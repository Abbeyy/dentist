import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { useLayoutEffect, useState } from "react";

type Props = {
  openDrawer: () => void;
};

export const NavBar = (props: Props) => {
  const { openDrawer } = props;

  const navigate = useNavigate();

  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });

  useLayoutEffect(() => {
    const onResize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      setDimensions({ width, height });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMenuClick = (route: string) =>
    navigate(`/${route.toLowerCase()}`);

  return (
    <nav
      className="flex-no-wrap shadow-md shadow-grey relative flex w-full items-center justify-between bg-white py-4 shadow-sm shadow-black/5"
      data-te-navbar-ref
    >
      <div className="flex flex-1 items-center justify-between px-6">
        <div className="flex justify-start">
          <ul className="list-style-none flex flex-row pl-0 space-x-3">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="flex items-center gap-2 font-semibold text-lg text-teal-800 focus:text-teal-600 hover:bg-neutral-100 py-2 px-4 rounded-md"
              >
                <FaHome size={22} />
                <>{dimensions.width > 550 ? "HOME" : ""}</>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about-us")}
                className="flex items-center gap-2 font-semibold text-lg text-teal-800 focus:text-teal-600 hover:bg-neutral-100 py-2 px-4 rounded-md"
              >
                <FaPeopleGroup size={22} />
                <>{dimensions.width > 550 ? "ABOUT US" : ""}</>
              </button>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={openDrawer}
            className="flex items-center gap-2 font-semibold text-xl text-teal-800 hover:bg-neutral-100 py-2 px-4 rounded-md focus:text-neutral-700"
          >
            <PiPhoneCallFill size={22} />
            <>{dimensions.width > 550 ? "CONTACT US" : ""}</>
          </button>
        </div>
      </div>
    </nav>
  );
};
