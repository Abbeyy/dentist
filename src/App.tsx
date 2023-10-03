import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import styles from "./app-styles.module.css";
import { BaseLayout } from "./components/layouts/baseLayout";
import { Home } from "./components/baseElements/home";
import { AboutUs } from "./components/baseElements/aboutUs";

function App() {
  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<BaseLayout />}>
            <Route path={"home"} element={<Home />} />
            <Route path={"about-us"} element={<AboutUs />} />

            <Route path="*" element={<Navigate replace={true} to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
