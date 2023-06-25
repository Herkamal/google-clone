import React from 'react';
import Head from  'next/head';
import Header from '../components/Header';
import {API_KEY, CONTEXT_KEY} from "../keys"

function Search({results}) {
  console.log(results)
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header></Header>
      {/* search results */}
    </div>
  )
}

export default Search


export async function getServerSideProps(context) {
  const useDummydata = false;

  const data = await fetch
  (`https://www.googleapis.com/books/v1/key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
  ).then((response) => response.json());

// after the server has rendered pass the results to the client
return {
  props:{
    results: data
  }
}
}