import NavBar from "./component/navbar"
import CrewPage from "./pages/crew"
import DestinationPage from "./pages/destination"
import Homepage from "./pages/homepage"
import NoPage from "./pages/nopage"
import TechnologyPage from "./pages/technology"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter basename="/space-tourism">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Homepage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
