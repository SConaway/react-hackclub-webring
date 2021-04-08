import React from 'react'

export interface Person {
  url: string
  member: string
  bypass?: boolean
}

export interface HackclubWebringProps {
  webringData: Person[]
  domainName: string
}

declare module 'react-hackclub-webring' {
  export function fetchWebringData(): Person[]
  export function HackclubWebring(
    webringData: Person[],
    domainName: string
  ): React.FC<HackclubWebringProps>
  export function chop(url: string): string
}
