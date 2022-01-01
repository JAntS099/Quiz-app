import React from 'react'
import Body from '../components/Body'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const PHome = () => {
    const client = new QueryClient()

  
    // const data = useQuery("country", fetch(url).then(data => data.json()))

    // console.log(data)

    return (
        <QueryClientProvider client={client}>
        <div>
            <Body data={'paulito'} />
        </div>
        </QueryClientProvider>
    )
}

export default PHome
