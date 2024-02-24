import { IoIosArrowDropupCircle } from "react-icons/io";
import SocialMedia from "./SocialMedia";
import FooterNavLink from "./FooterNavLink";
import AmLogo from "../Amlogo";
import Form from "./Form";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="text-[#fff]  bg-[#0c192e] mt-[110px] py-8 ">
        <div className="mx-auto flex max-w-7xl border-b-[1px] border-white justify-between items-end py-2 ">
          <AmLogo />
          <FooterNavLink />
          <Form />
          <SocialMedia />
        </div>
        <p className="text-[#fff]  text-center text-[12px] pt-3">
          &copy; Copyright 2024, Alvarez & Marsal Holdings, LLC.All Rights
          Reserved.
        </p>
      </footer>
      <div
        className="group fixed right-6 bottom-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium cursor-pointer"
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
