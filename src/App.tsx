import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import styles from "./app-styles.module.css";
import { BaseLayout } from "./components/layouts/baseLayout";
import { Error } from "./components/layouts/baseLayout/error";
import { Home } from "./components/baseElements/home";
import { AboutUs } from "./components/baseElements/aboutUs";

function App() {
  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index path={"home"} element={<Home />} />
            <Route path={"about-us"} element={<AboutUs />} />

            {/* Any non-match */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
