# react-hackclub-webring

> react library for https://github.com/hackclub/webring that supports SSR

[![NPM](https://img.shields.io/npm/v/react-hackclub-webring.svg)](https://www.npmjs.com/package/react-hackclub-webring) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hackclub-webring
```

## Usage

The library allows you to manage fetching the data when convenient by using `fetchWebringData()`. `example/` has an example of fetching it client-side; `example-next/` has an example of fetching it when rendering on the server using NextJS's `getServerSideProps`.

### Code Example

```jsx
import React from 'react'

import { HackClubWebring, fetchWebringData } from 'react-hackclub-webring'
import 'react-hackclub-webring/dist/index.css' // be sure to import the styles

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

### Props

| Prop        | Description                                                                                   | Default Value | Required | Notes                                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| webringData | data from the `fetchWebringData()` function                                                   | none          | Yes      | Allows your app to manage fetching when convenient (for SSR and stuff)                                                                                                                    |
| domainName  | the domain name of your website as on the [webring's home page](https://webring.hackclub.com) | none          | Yes      | For those of us with multiple domains for our websites, it allows the webring to work correctly. Also because when SSR with NextJS, I don't think `window.location.hostname` is available |

## License

MIT © [SConaway](https://github.com/SConaway)
