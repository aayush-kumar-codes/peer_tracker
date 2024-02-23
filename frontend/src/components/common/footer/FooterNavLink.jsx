import { footerNav } from "../../../utils/footerNavLink";
import { Link } from "react-router-dom";

const FooterNavLink = () => {
  return (
    <div className=" flex text-center">
      {footerNav.map((list, index) => {
        return (
          <div
            key={index}
            className="text-[#fff] flex items-center gap-6 "
          >
            {list.map((item,i) => (
              <nav className="list-none text-[14px] hover:text-[#E61B22]" key={i} >
                <Link key={item.id} to={item.link} className="">
                  {item.name}
                </Link>
              </nav>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FooterNavLink;
