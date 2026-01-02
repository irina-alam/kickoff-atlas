import { matches } from "../data/matches"

export function getMatches() {
  return matches
}

export function getMatchById(id) {
  return matches.find(match => match.id === Number(id))
}
