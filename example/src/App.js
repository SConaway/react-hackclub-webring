import React, { useEffect, useState } from 'react'

import { HackClubWebring, fetchWebringData } from 'react-hackclub-webring'
import 'react-hackclub-webring/dist/index.css'

const App = () => {
  const [webringData, setWebringData] = useState(null)

  useEffect(() => {
    ;(async () => {
      //
      setWebringData(await fetchWebringData())
    })()
  }, [])

  return <HackClubWebring webringData={webringData} domainName='example.com' />
}

export default App
