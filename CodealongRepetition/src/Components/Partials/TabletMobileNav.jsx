import styles from "./Scss/Navbar.module.scss";
import { NavLinks } from "./NavLinks";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";

//hamburger links
//https://www.npmjs.com/package/hamburger-react
//https://hamburger-react.netlify.app/
//https://www.youtube.com/watch?v=Et5tDPoU03c

export const TabletMobileNav = () => {
  //initially setting it to false, so it´s not open
  const [open, setOpen] = useState(false);

  //if one of the links are clicked, the menu will close
  return (
    <nav className={styles.tabletmobil_nav}>
      {/* Hamburger menu */}
      <div
        className={styles.hamburger_menu_wrapper_toggle}
        //onclick on the hamburger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Hamburger color="green" className={styles.hamburger} />
      </div>

      {open && <NavLinks />}
    </nav>
  );
};
