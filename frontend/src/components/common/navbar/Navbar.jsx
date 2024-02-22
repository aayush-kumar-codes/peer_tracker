import { Link, NavLink } from "react-router-dom"
import "../navbar/Navbar.css"
import { useEffect, useState } from "react";

const navLink = [
    { id: "1", name: "Summary", link: "/" },
    { id: "2", name: "FY2023 Award", link: "/FY2023Award" },
    { id: "3", name: "FY2022 Award", link: "/FY2022Award" },
    { id: "4", name: "FY2021 Award", link: "/FY2021Award" },
    { id: "5", name: "Historical Awards", link: "/HistoricalAwards" },
]

const Navbar = () => {
    // const [scrolled, setScrolled] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 80);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="sticky top-0 bg-gradient-to-r from-[#06213D] to-[#173450] z-[500]">
            <div className=" flex pt-8 pb-2 justify-between  border-b-2 max-w-6xl mx-auto px-4 ">
                <Link to="/" className="flex title-font font-medium items-center text-[#4D4F53] mb-4 md:mb-0">
                    <svg className="flogo" xmlns="http://www.w3.org/2000/svg" width="75.667" height="66.898" viewBox="0 0 75.667 66.898">
                        <g id="logo" transform="translate(-41.11 -169.922)">
                            <g id="Group_1635" data-name="Group 1635" transform="translate(41.11 169.922)">
                                <path id="Path_36-2" data-name="Path 36-2" d="M86.8,190.181h2.066l4.771,10.546H91.692l-1.382-3.185H85.168l-1.443,3.185H81.844Zm3,6.219-2.026-4.654L85.671,196.4Z" transform="translate(-18.374 -158.614)" fill="#fff"></path>
                                <g id="Group_2-2" data-name="Group 2-2" transform="translate(63.052 43.508)">
                                    <path id="Path_37-2" data-name="Path 37-2" d="M83.951,201.243a2.186,2.186,0,0,1-.284-1.017,2.076,2.076,0,0,1,.865-1.7,3.618,3.618,0,0,1,2.3-.675,3.3,3.3,0,0,1,2.142.623,1.889,1.889,0,0,1,.767,1.5,2.408,2.408,0,0,1-.793,1.781,7.693,7.693,0,0,1-1.558,1.03l2.4,2.29c.146-.385.249-.672.312-.857a6.132,6.132,0,0,0,.179-.8h1.572a6.452,6.452,0,0,1-.609,1.949c-.3.614-.453.868-.453.743l2.3,2.242H91.048l-1.237-1.173a6.238,6.238,0,0,1-1.342.913,5.629,5.629,0,0,1-2.456.508,4.253,4.253,0,0,1-2.985-.879,2.7,2.7,0,0,1-.935-1.982A2.528,2.528,0,0,1,83,203.749a10.315,10.315,0,0,1,2.068-1.215,5.685,5.685,0,0,1-1.12-1.292m3.9,5.891a3.519,3.519,0,0,0,1.1-.816l-2.978-2.9a8.844,8.844,0,0,0-1.633,1.03,1.7,1.7,0,0,0-.589,1.314,1.415,1.415,0,0,0,.762,1.289,3.149,3.149,0,0,0,1.636.449,3.7,3.7,0,0,0,1.7-.365m-.125-5.952a1.464,1.464,0,0,0,.525-1.091,1.028,1.028,0,0,0-.382-.8,1.537,1.537,0,0,0-1.041-.338,1.592,1.592,0,0,0-1.376.53.952.952,0,0,0-.2.591,1.371,1.371,0,0,0,.3.84,8.4,8.4,0,0,0,1.005,1.047,7.062,7.062,0,0,0,1.169-.779" transform="translate(-81.288 -197.845)" fill="#fff"></path>
                                    <path id="Path_38-2" data-name="Path 38-2" d="M81.578,206.029h2.534l3.775,8.917,3.783-8.917h2.521v10.544H92.508V210.34c0-.215.014-.57.039-1.07s.031-1.031.031-1.6l-3.821,8.9h-1.77l-3.8-8.9v.321c0,.262.014.658.034,1.187s.036.915.036,1.159v6.233h-1.68Z" transform="translate(-81.576 -193.277)" fill="#fff"></path>
                                </g>
                                <path id="Path_39-2" data-name="Path 39-2" d="M80.76,169.922l-39.65,66.9h9.167l32.246-56.742V236.82H89.71v-66.9Z" transform="translate(-41.11 -169.922)" fill="#fff"></path>
                                <path id="Path_40-2" data-name="Path 40-2" d="M68.517,182.34l-7.233,12.715v34.833h7.233Z" transform="translate(-29.85 -162.991)" fill="#fff"></path>
                                <path id="Path_41-2" data-name="Path 41-2" d="M73.817,182.34l7.231,12.715v34.833H73.817Z" transform="translate(-22.854 -162.991)" fill="#fff"></path>
                            </g>
                        </g>
                    </svg>
                </Link>
                <nav className="flex flex-wrap items-end text-[15px] text-[#4D4F53] justify-end space-x-14">
                    {navLink.map((ele) => <NavLink to={ele.link} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "pending"} key={ele.id}>{ele.name}</NavLink>)}
                    <p className="text-[#6486a5] text-4xl italic flex items-end">Peer Tracker</p>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
