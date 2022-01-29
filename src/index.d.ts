export interface Person {
  url: string
  member: string
  bypass?: boolean
}

export interface HackclubWebringProps {
  webringData: Person[]
  domainName: string
}

export function chopURL(url: string): string
export function HackClubWebring({
  domainName,
  webringData
}: {
  webringData: Person[]
  domainName: string
}): JSX.Element
export function fetchWebringData(): Promise<Person[]>
