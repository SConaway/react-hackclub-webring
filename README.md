# hackclub-webring

> react library for https://github.com/hackclub/webring that supports SSR

[![NPM](https://img.shields.io/npm/v/hackclub-webring.svg)](https://www.npmjs.com/package/hackclub-webring) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hackclub-webring
```

## Usage

### Code Example

```jsx
import React, { Component } from 'react'

import { HackClubWebring, fetchWebringData } from 'hackclub-webring'
import 'hackclub-webring/dist/index.css' // be sure to import the styles

const Example = () => {
  const [webringData, setWebringData] = useState(null)

  useEffect(() => {
    ;(async () => {
      //
      setWebringData(await fetchWebringData())
    })()
  }, [])

  return <HackClubWebring webringData={webringData} domainName='example.com' />
}
```

The library allows you to manage fetching the data when convenient by using `fetchWebringData()`. `example/` has an example of fetching it client-side; `example-next/` has an example of fetching it when rendering on the server using NextJS's `getServerSideProps`.

## License

MIT © [SConaway](https://github.com/SConaway)
