import styles from "./Scss/Navbar.module.scss";
import { NavLinks } from "./NavLinks";

export const DesktopNav = () => {
  return (
    <nav className={styles.desktop_nav}>
      <NavLinks />
    </nav>
  );
};
