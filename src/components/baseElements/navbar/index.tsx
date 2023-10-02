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
      className="flex-no-wrap shadow-md shadow-grey relative flex w-full items-center justify-between bg-white py-4 shadow-sm shadow-black/5"
      data-te-navbar-ref
    >
      <div className="flex flex-1 items-center justify-between px-6">
        <div className="flex justify-start">
          <ul className="list-style-none flex flex-row pl-0 space-x-3">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className="font-semibold text-xl text-teal-800 focus:text-teal-600 hover:bg-neutral-100 py-2 px-4 rounded-md"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("about-us")}
                className="font-semibold text-xl text-teal-800 focus:text-teal-600 hover:bg-neutral-100 py-2 px-4 rounded-md"
              >
                About Us
              </button>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={openDrawer}
            className="font-semibold text-xl text-teal-800 hover:bg-neutral-100 py-2 px-4 rounded-md focus:text-neutral-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};
