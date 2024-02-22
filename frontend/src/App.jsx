import { BrowserRouter, Route, Routes } from "react-router-dom"
import HistoricalAwards from "./pages/Historical Awards"
import FY2023Award from "./pages/FY2023Award"
import Navbar from "./components/common/navbar/Navbar"
import FY2022Award from "./pages/FY2022Award"
import FY2021Award from "./pages/FY2021Award"
import Footer from "./components/common/footer"
import Summary from "./pages/summary"
import "./App.css"

function App() {
  return (
    <div className="w-[100%] mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Summary/>} />
          <Route path="/FY2023Award" element={<FY2023Award />} />
          <Route path="/FY2022Award" element={<FY2022Award />} />
          <Route path="/FY2021Award" element={<FY2021Award />} />
          <Route path="/HistoricalAwards" element={<HistoricalAwards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
