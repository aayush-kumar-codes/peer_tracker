import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HistoricalAwards from "./pages/Historical Awards";
import FY2023Award from "./pages/FY2023Award";
import Navbar from "./components/common/navbar/Navbar";
import FY2022Award from "./pages/FY2022Award";
import FY2021Award from "./pages/FY2021Award";
import Footer from "./components/common/footer";
import Summary from "./pages/summary";
import "./App.css";
import Login from "./pages/login";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="w-[100%] mx-auto">
      <BrowserRouter>
        {token ? (
          <>
            <Navbar handleLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/FY2023Award" element={<FY2023Award />} />
              <Route path="/FY2022Award" element={<FY2022Award />} />
              <Route path="/FY2021Award" element={<FY2021Award />} />
              <Route
                path="/HistoricalAwards"
                element={<HistoricalAwards />}
              />
            </Routes>
            <Footer />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
