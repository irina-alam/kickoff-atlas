import { useParams, Link } from "react-router-dom"
import { getMatchById } from "../services/matchService"

export default function MatchDetails() {
  const { id } = useParams()
  const match = getMatchById(id)

  if (!match) {
    return <div className="text-white p-6">Match not found</div>
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md space-y-4">
        
        <h1 className="font-semibold text-lg text-center">
          {match.homeTeam} – {match.awayTeam}
        </h1>

        <p className="text-sm text-center text-gray-600">
          {match.date} • {match.venue}
        </p>

        <Link
          to={`/tickets/${match.id}`}
          className="block bg-lime-400 text-black rounded-full py-3 text-center font-semibold"
        >
          Buy ticket
        </Link>
      </div>
    </div>
  )
}
