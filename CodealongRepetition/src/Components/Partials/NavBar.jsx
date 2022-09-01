import { NavLink } from "react-router-dom";

/**
 * Function Component NavBar
 * vi bruger Navlink fordi den sætter automatisk class active på valgt link
 * @returns html string
 */
export const NavBar = () => {
  return (
    <nav>
      <h2>This is navbar</h2>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produkter StringsOnline</NavLink>
        </li>
        <li>
          <NavLink to="/ekstranet">Ekstranet</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/search">Søg</NavLink>
        </li>
      </ul>
    </nav>
  );
};
