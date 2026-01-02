import { Link } from "react-router-dom"

export default function MatchCard({ match }) {
  return (
    <Link to={`/matches/${match.id}`}>
      <div className="bg-white text-black rounded-2xl p-5 space-y-2 transition transform hover:-translate-y-1 hover:shadow-lg">
        
        <p className="text-xs text-gray-500">
          {match.date}
        </p>

        <h2 className="font-semibold text-base">
          {match.homeTeam} – {match.awayTeam}
        </h2>

        <p className="text-sm text-gray-600">
          {match.venue}
        </p>
      </div>
    </Link>
  )
}
