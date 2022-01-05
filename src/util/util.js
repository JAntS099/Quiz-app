import React, { useState, useEffect } from "react";
import { useQuery, gql, ApolloClient, InMemoryCache } from "@apollo/client";

export const randomizer = (a, b) => Math.random() - 0.5;

const randElementFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getXRandomValues = (length, array = [], exceptions) => {
  if (array.length === 0) return;
  const noDup = [...new Set(array)];
  const randomValArr = [];
  const exceptionArr = [exceptions];

  for (let i = 0; i < length; i++) {
    const random = randElementFromArray(noDup);
    if (randomValArr.includes(random) || exceptionArr.includes(random)) {
      while (true) {
        let random = randElementFromArray(noDup);

        if (!randomValArr.includes(random) && !exceptionArr.includes(random)) {
          randomValArr.push(random);
          break;
        }
      }
    } else {
      randomValArr.push(random);
    }
  }

  const removedDups = [...new Set(randomValArr)];
  noDup.map((item) => {
    if (
      removedDups.length !== length &&
      !removedDups.includes(item) &&
      !exceptionArr.includes(item)
    ) {
      removedDups.push(item);
    }
  });

  return removedDups;
};

const randomizeAnswers = (data, questionsArray, key) =>
  questionsArray.map((item) => ({
    ...item,
    answers: [
      item.solution,
      ...getXRandomValues(
        3,
        data.countries.map((item) =>
          typeof item[key] === "object" ? item[key].name : item[key]
        ),
        item.solution
      ),
    ],
  }));

export const mapToQuestionDataType = (data) => {
  const capitalArray = data.countries.map((c) => ({
    question: `Name The capital of ${c.name}.`,
    solution: c.capital,
    correct: null,
  }));

  const currencyArray = data.countries.map((c) => ({
    question: `What is the currency of ${c.name}?`,
    solution: c.currency,
    correct: null,
  }));

  const continentArray = data.countries.map((c) => ({
    question: `Name the continent of ${c.name}.`,
    solution: c.continent.name,
    correct: null,
  }));

  const answeredCapitals = randomizeAnswers(data, capitalArray, "capital");
  const answeredCurrency = randomizeAnswers(data, currencyArray, "currency");
  const answeredContinent = randomizeAnswers(data, continentArray, "continent");

  const combinedArr = answeredCapitals
    .concat(answeredCurrency, answeredContinent)
    .map((item) => ({
      ...item,
      answers: item.answers.sort(randomizer),
    }));

  return combinedArr;
};

// write a GraphQL query that asks for names and codes for all countries
export const countryQuery = gql`
  {
    countries(
      filter: {
        code: {
          in: [
            "NL"
            "FR"
            "ES"
            "PH"
            "NO"
            "BS"
            "AU"
            "MY"
            "PL"
            "FJ"
            "NZ"
            "JP"
            "IE"
            "AT"
            "PG"
            "GB"
            "MX"
          ]
        }
      }
    ) {
      code
      name
      capital
      currency
      continent {
        name
      }
    }
  }
`;

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

export const useFetchData = () => {
  const [state, setState] = useState(null);
  const { data, loading, error } = useQuery(countryQuery, { apolloClient });

  useEffect(() => {
    setState(data);
  }, [loading]);

  return state;
};

export const isCorrectAnswer = (solution, givenAnswer) =>
  solution === givenAnswer;
