import styles from "./Scss/Navbar.module.scss";
import { DesktopNav } from "./DesktopNav";
import { TabletMobileNav } from "./TabletMobileNav";

/**
 * Function Component NavBar
 * vi bruger Navlink fordi den sætter automatisk class active på valgt link
 */
export const NavBar = () => {
  return (
    <section className={styles.navbar}>
      <h2>This is a responsive navbar</h2>
      {/* two different navigations , one for desktop and one for tablet+mobile 
        tablet+mobile is ony visible when browser is less then 1000px
      */}
      <DesktopNav />
      <TabletMobileNav />
    </section>
  );
};
