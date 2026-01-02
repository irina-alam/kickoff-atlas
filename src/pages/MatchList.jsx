import { useState } from "react"
import MatchCard from "../components/MatchCard"
import { getMatches } from "../services/matchService"

export default function MatchList() {
  const matches = getMatches()

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")

  const filteredMatches = matches.filter(match => {
    const matchDate = match.date
    const matchesDate = selectedDate ? matchDate === selectedDate : true
    const matchesTeam = selectedTeam
      ? match.homeTeam === selectedTeam || match.awayTeam === selectedTeam
      : true

    return matchesDate && matchesTeam
  })

  const teams = [
    ...new Set(
      matches.flatMap(match => [match.homeTeam, match.awayTeam])
    ),
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Match list</h1>

      {/* Filters */}
      <div className="max-w-md mx-auto mb-8 space-y-4">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full bg-gray-800 text-white rounded-full px-4 py-3 text-sm"
        />

        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full bg-gray-800 text-white rounded-full px-4 py-3 text-sm"
        >
          <option value="">All teams</option>
          {teams.map(team => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      {/* Match list */}
      <div className="max-w-md mx-auto space-y-6">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))
        ) : (
          <p className="text-sm text-gray-400 text-center">
            No matches found for selected filters
          </p>
        )}
      </div>
    </div>
  )
}
