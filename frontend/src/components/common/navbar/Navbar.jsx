import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/AM_Logo.png"
import "../navbar/Navbar.css"

const navLink = [
    { id: "1", name: "Summary", link: "/" },
    { id: "2", name: "FY2023 Award", link: "/FY2023Award" },
    { id: "3", name: "FY2022 Award", link: "/FY2022Award" },
    { id: "4", name: "FY2021 Award", link: "/FY2021Award" },
    { id: "5", name: "Historical Awards", link: "/HistoricalAwards" },
]

const Navbar = () => {
    return (
        <div className="text-gray-400  border-b-4 ">
            <div className=" flex flex-wrap px-5 pt-8 pb-1 justify-between w-[100%]">
                <Link to="/" className="flex title-font font-medium items-center text-[#4D4F53] mb-4 md:mb-0">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className="flex flex-wrap items-end text-[15px] text-[#4D4F53] justify-end space-x-14">
                    {navLink.map((ele) => <NavLink to={ele.link} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    } key={ele.id}>{ele.name}</NavLink>)}
                    <p className="text-[#4575a2] text-4xl italic flex items-end">Peer Tracker</p>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
