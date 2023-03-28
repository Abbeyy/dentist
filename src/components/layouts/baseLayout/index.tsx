import { Outlet } from "react-router-dom";
import { Footer } from "../../baseElements/footer";
import { NavBar } from "../../baseElements/navbar";

export const BaseLayout = () => (
  <div className={"flex flex-1 flex-col bg-white"}>
    <NavBar />

    <div className="flex flex-1 flex-col h-full w-full">
      <Outlet />
    </div>

    <Footer />
  </div>
);
