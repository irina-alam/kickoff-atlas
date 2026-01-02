import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import MatchList from "./pages/MatchList"
import MatchDetails from "./pages/MatchDetails"
import TicketRedirect from "./pages/TicketRedirect"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/matches" element={<MatchList />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
        <Route path="/tickets/:id" element={<TicketRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
