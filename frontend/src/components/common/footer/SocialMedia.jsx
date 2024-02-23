import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-7 justify-center items-center">
          <a href="#" className="text-[#fff] cursor-pointer">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className=" text-[#fff] cursor-pointer">
            <FaXTwitter size={22} />
          </a>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <a href="#" className=" text-[#fff]">
            <FaInstagramSquare size={24} />
          </a>
          <a href="#" className=" text-[#fff]">
            <FaLinkedin size={24} />
          </a>
        </div>
        {/* <a href="#" className=" text-[#fff]">
          <IoLogoYoutube size={26} />
        </a> */}
      </div>
    </div>
  );
};

export default SocialMedia;
