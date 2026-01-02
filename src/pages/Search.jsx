import { Link } from "react-router-dom"

export default function Search() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        Search
      </h1>

      <Link
        to="/matches"
        className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold"
      >
        Show matches
      </Link>
    </div>
  )
}
