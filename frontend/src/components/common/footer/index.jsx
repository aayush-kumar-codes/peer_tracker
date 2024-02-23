import { IoIosArrowDropupCircle } from "react-icons/io";
import SocialMedia from "./SocialMedia";
import FooterNavLink from "./FooterNavLink";
import AmLogo from "../Amlogo";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="text-[#fff]  bg-[#0c192e] mt-8 py-4 ">
        <div className="mx-auto flex max-w-6xl border-b-[1px] border-white h-[120px] justify-between items-end py-2 ">
          <AmLogo />
          <FooterNavLink />
          <div className="flex flex-col items-center pt-4">
            <div class="flex items-center">
              <input
                type="email"
                class="min-h-10 w-64 px-4 text-white text-base border border-[#3A879E] rounded-l-md bg-transparent focus:border-blue-500 focus:outline-none"
                id="Email"
                name="Email"
                placeholder="Enter Your Email"
                autocomplete="off"
              />
              <input
                class="min-h-10 px-4 border-none border-l-0 rounded-r-md bg-[#3A879E] text-white text-base cursor-pointer transition-colors duration-300 hover:bg-[#396b9a]"
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
          <SocialMedia />
        </div>
        <p className="text-[#fff]  text-center text-[12px] pt-3">
          &copy; Copyright 2024, Alvarez & Marsal Holdings, LLC.All Rights
          Reserved.
        </p>
      </footer>
      <div
        className="group fixed right-6 bottom-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium cursor-pointer"
        onClick={handleScrollToTop}
      >
        <span className="relative transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 text-yellow-400">
          <IoIosArrowDropupCircle size={40} />
        </span>
        <div className="hidden group-hover:block">
          <div className="group absolute -top-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-lg text-center text-[12px] text-slate-300 before:-top-2">
            <div className="rounded-sm bg-black py-1 px-2">
              <p className="whitespace-nowrap">Go To Top</p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
