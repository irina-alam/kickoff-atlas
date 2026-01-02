import { useParams } from "react-router-dom"
import { getMatchById } from "../services/matchService"

export default function TicketRedirect() {
  const { id } = useParams()
  const match = getMatchById(id)

  if (!match) {
    return <div className="text-white p-6">Ticket not found</div>
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md space-y-4 text-center">
        
        <h1 className="font-semibold">
          Ticket redirection
        </h1>

        <p className="text-sm text-gray-600">
          {match.homeTeam} – {match.awayTeam}
        </p>

        <a
          href={match.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-500 text-white rounded-full py-3 font-semibold"
        >
          Click here to get redirected
        </a>
      </div>
    </div>
  )
}
