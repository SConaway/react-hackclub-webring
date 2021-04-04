import React from 'react'
import styles from './styles.module.css'

export const HackClubWebring = ({}) => {
  return (
    <div className={styles.wrapper}>
      <a
        href='https://webring.hackclub.com/'
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
        href='https://webring.hackclub.com/'
        id='nextBtn'
        className={styles.anchor}
        title='Next'
      >
        ›
      </a>
    </div>
  )
}
