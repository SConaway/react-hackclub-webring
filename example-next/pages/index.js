import React from 'react'
import Head from 'next/head'

import { HackClubWebring, fetchWebringData } from 'react-hackclub-webring'

const App = ({ webringData }) => {
  return (
    <>
      <Head>
        <title>react-hackclub-webring example</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HackClubWebring webringData={webringData} domainName='example.com' />
    </>
  )
}

export default App

export async function getServerSideProps() {
  return {
    props: { webringData: await fetchWebringData() } // will be passed to the page component as props
  }
}
