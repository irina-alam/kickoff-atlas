import { Link } from "react-router-dom"
import heroImage from "../assets/more-than-a-game.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6">
      
      {/* Hero image */}
      <div
        className="h-72 rounded-2xl bg-cover bg-center mt-6 mb-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Text + input */}
      <div className="space-y-6 flex-1">
        <h1 className="text-3xl font-semibold leading-tight">
          Find your next
          <br /> football match
        </h1>

        <input
          type="text"
          placeholder="Enter city"
          className="w-full bg-gray-800 text-white rounded-full px-5 py-4 text-sm outline-none"
        />
      </div>

      {/* CTA */}
      <Link
        to="/matches"
        className="bg-lime-400 text-black rounded-full py-4 text-center font-semibold transition hover:bg-lime-300"
      >
        Search
      </Link>
    </div>
  )
}
