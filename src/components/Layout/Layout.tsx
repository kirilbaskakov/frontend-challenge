import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
