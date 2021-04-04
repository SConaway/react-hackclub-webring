import React, { useMemo } from 'react'
import styles from './styles.module.css'

// in case anyone ever wants this
export const chopURL = (url) => {
  var hostname

  // find & remove protocol (http, ftp, etc.) and chop to bare domain name
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  // find & remove port number
  hostname = hostname.split(':')[0]
  // find & remove "?"
  hostname = hostname.split('?')[0]

  return hostname
}

export const HackClubWebring = ({ domainName, webringData }) => {
  const links = useMemo(() => {
    if (!webringData?.length || webringData.length <= 0)
      return {
        nextURI: 'https://webring.hackclub.com',
        previousURI: 'https://webring.hackclub.com'
      }

    const currentIndex = webringData.findIndex(
      (site) => chopURL(domainName) === chopURL(site.url)
    )

    if (currentIndex <= -1)
      return {
        nextURI: 'https://webring.hackclub.com',
        previousURI: 'https://webring.hackclub.com'
      }

    let previousIndex = currentIndex - 1
    if (previousIndex == -1) previousIndex = webringData.length - 1

    let nextIndex = currentIndex + 1
    if (nextIndex == webringData.length) nextIndex = 0

    return {
      previousURI: webringData[previousIndex].url,
      nextURI: webringData[nextIndex].url
    }
  }, [webringData, domainName])

  return (
    <div className={styles.wrapper}>
      <a
        href={links.previousURI}
        id='previousBtn'
        className={styles.anchor}
        title='Previous'
      >
        ‹
      </a>
      <a
        href='https://webring.hackclub.com/'
        className={styles.logo}
        title='Hack Club Webring'
        alt='Hack Club Webring'
      ></a>
      <a
        href={links.nextURI}
        id='nextBtn'
        className={styles.anchor}
        title='Next'
      >
        ›
      </a>
    </div>
  )
}

export const fetchWebringData = async () => {
  let requestURL = 'https://webring.hackclub.com/public/members.json'

  const res = await fetch(requestURL)

  const json = await res.json()

  return json
}
