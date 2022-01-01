import React from 'react'
import { useQuery } from 'react-query'


const Body = (props) => {
    const url = 'https://countries.trevorblades.com/graphql'

    const { isLoading, error, data } = useQuery('countries', () =>
    fetch(url).then(res =>
      res.json()
    )
  )

   console.log(data) 

    return (
        <div ref={ref}>
            <h1>{props.data}</h1>
        </div>
    )
}

export default Body


/**
 * top menu row (row comp)
 * top left menu (arr row comp)
 * 
 * menus = 6 compoentns
 * advertisement component
 * 
 * playlist item component
 * array of playlist
 * 
 * right shit = 4 components
 * 
 * 
 * 
 * 
 * 
 * Question:
 * quesiton
 * answer
 * solution
 * 
 * questionarr.map((item) => <Question question={item.question} answer={item.answer} />)
 */