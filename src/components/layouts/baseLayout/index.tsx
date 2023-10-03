import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ContactUs } from "../../baseElements/contactUs";
import { Footer } from "../../baseElements/footer";
import { NavBar } from "../../baseElements/navbar";

export const BaseLayout = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | null;
}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => setShowDrawer(true);

  const closeDrawer = () => setShowDrawer(false);

  return (
    <div className={"flex flex-1 flex-col bg-white"}>
      <NavBar openDrawer={openDrawer} />

      <div className="flex flex-1 flex-col h-full w-full">
        <Outlet />
        {!!children && children}
      </div>

      <Footer />

      <ContactUs showDrawer={showDrawer} closeDrawer={closeDrawer} />
    </div>
  );
};
