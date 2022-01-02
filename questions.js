import { useQuery, gql } from "@apollo/client";


// gql(`{
//     countries{
//       name,
//       languages{
//         name,
//       },
//       continent {
//         name
//       }
          

//     }
//   }`)

export const questions = [

    
    
     {
        questionName: 'Q1',
        question: 'How many continents are there?',
        solution: 7,
        answers: [7,5,4,10],
        correct: null,
    },
     {
        questionName: 'Q2',
        question: 'On which continent is the Netherlands?',
        // query: {data,error} = useQuery (gql('{country (code:"NL"){continent{name}}}')),

        // solution: {useQuery()},
        solution: '',
        answers: [''],
        correct: null,
   
    {
        questionName: 'Q3',
        question: "What is the Netherland's language",
        solution: '',
        answers: [''],
     correct: null,
    },
    {
        questionName: 'Q4',
        question: "What is the capital of the Netherlands",
        solution: '',
    answers: [''],
        correct: null,
    },
    {
        questionName: 'Q5',
        question: "What is the Netherlands' currency?",
        solution: '',
        answers: [''],
        correct: null,
   



    Q6: {
        questionName: 'Q6',
     question: 'On which continent is Australia?',
        solution: '',
        answers: [''],
        correct: null,
    },
    Q7: {
    questionName: 'Q7',
        question: 'What is the curreny of Australia',
        solution: '',
        answers: [''],
        correct: null,
    },
     {
        questionName: 'Q8',
        question: 'What country is in Asia',
        solution: '',
        answers: [''],
        correct: null,
     Q9: {
        questionName: 'Q9',
        question: 'What country is not in Oceania?',
        solution: '',
        answers: [''],
        correct: null,
    },
    Q10: {
  uestionName: 'Q10',
        question: 'what are not the languages of Belgium?',
        solution: '',
        answers: [''],
        correct: null,
    },



    Q11: {
        uestionName: 'Q11',
        question: 'What the capital of Bermuda?',
        solution: "",
 answers: [''],
        correct: null,
    },
    Q12: {
        uestionName: 'Q12',
        question: 'On which continent is Russia?',
        solution: '',
 answers: [''],
        correct: null,
    },
    Q13: {
        uestionName: 'Q13',
        question: 'what is the capital of Belarus?',
        solution: '',
   answers: [''],
        correct: null,
    },
   question:'what is the capital of Russia?',
        solution: '',
        answers: [''],
        correct: null,
    },
    Q15: {
        question: 'What is the capital of Canada',
        solution: '',
        answers: [''],
        correct: null,
    }

]