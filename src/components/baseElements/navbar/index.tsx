import { useNavigate } from "react-router-dom";

type Props = {
  openDrawer: () => void;
};

export const NavBar = (props: Props) => {
  const { openDrawer } = props;

  const navigate = useNavigate();

  const handleMenuClick = (route: string) =>
    navigate(`/${route.toLowerCase()}`);

  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-4 shadow-sm shadow-black/5"
      data-te-navbar-ref
    >
      <div className="flex flex-1 items-center justify-between px-6">
        <div className="flex justify-start">
          <ul className="list-style-none flex flex-row pl-0">
            <li className="pr-4">
              <button
                onClick={() => handleMenuClick("home")}
                className="font-semibold text-xl text-black hover:text-neutral-500 focus:text-neutral-700"
              >
                Home
              </button>
            </li>
            <li className="pr-4">
              <button
                onClick={() => handleMenuClick("about-us")}
                className="font-semibold text-xl text-black hover:text-neutral-500 focus:text-neutral-700"
              >
                About Us
              </button>
            </li>
            <li className="pr-4">
              <button
                onClick={() => handleMenuClick("services")}
                className="font-semibold text-xl text-black hover:text-neutral-500 focus:text-neutral-700"
              >
                Services
              </button>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={openDrawer}
            className="font-semibold text-xl text-black hover:text-neutral-500 focus:text-neutral-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};
