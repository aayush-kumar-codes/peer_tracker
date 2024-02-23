import { Link, NavLink } from "react-router-dom";
import "../navbar/Navbar.css";
import { useEffect, useState } from "react";
import AmLogo from "../Amlogo";

const navLink = [
  { id: "1", name: "Summary", link: "/" },
  { id: "2", name: "FY2023 Award", link: "/FY2023Award" },
  { id: "3", name: "FY2022 Award", link: "/FY2022Award" },
  { id: "4", name: "FY2021 Award", link: "/FY2021Award" },
  { id: "5", name: "Historical Awards", link: "/HistoricalAwards" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 bg-gradient-to-r from-[#031D37] to-[#031D37] z-[500]">
      <div className=" flex pt-8 pb-2 justify-between  border-b-2 max-w-6xl mx-auto px-4 ">
        <AmLogo />
        <nav className="flex flex-wrap items-end text-[15px] text-[#4D4F53] justify-end space-x-14">
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
          <p className="text-[#6486a5] text-4xl italic flex items-end">
            Peer Tracker
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
