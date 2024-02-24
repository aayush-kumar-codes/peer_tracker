import { NavLink } from "react-router-dom";
import "../navbar/Navbar.css";
import AmLogo from "../Amlogo";
import axios from "axios";

const navLink = [
  { id: "1", name: "Summary", link: "/" },
  { id: "2", name: "FY2023 Award", link: "/FY2023Award" },
  { id: "3", name: "FY2022 Award", link: "/FY2022Award" },
  { id: "4", name: "FY2021 Award", link: "/FY2021Award" },
  { id: "5", name: "Historical Awards", link: "/HistoricalAwards" },
];

const Navbar = ({ handleLogout }) => {
  const token = localStorage.getItem("token");

  const logout = async (token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/logout/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      response.status == 200 && handleLogout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="sticky top-0 bg-gradient-to-r from-[#031D37] to-[#031D37] z-[500]">
      <div className=" flex pt-8 pb-2 justify-between  border-b-2 max-w-7xl mx-auto px-4 ">
        <AmLogo />
        <nav className="flex flex-wrap items-end text-[15px] text-[#4D4F53] justify-end space-x-10">
          {navLink.map((ele) => (
            <NavLink
              to={ele.link}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "pending"
              }
              key={ele.id}
            >
              {ele.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex gap-4 items-end">
          <p className="text-[#6486a5] text-4xl italic">Peer Tracker</p>
          <div>
            <button
              onClick={() => logout(token)}
              className=" bg-[#E61B22] text-white px-3 rounded-sm py-[2px]"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
