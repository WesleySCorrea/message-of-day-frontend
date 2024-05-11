import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      {" "}
      <ul className={styles.ul}>
        {" "}
        <li className={styles.li}>
          {" "}
          <Link to="/" className={styles.link}>
            {" "}
            HomePublic
          </Link>
        </li>
        <li className={styles.li}>
          {" "}
          <Link to="/login" className={styles.link}>
            {" "}
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
