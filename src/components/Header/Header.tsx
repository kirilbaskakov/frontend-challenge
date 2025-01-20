import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const links = [
  { path: "/", label: "Все котики" },
  { path: "/favorites", label: "Любимые котики" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
