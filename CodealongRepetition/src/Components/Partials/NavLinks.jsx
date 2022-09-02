import { NavLink } from "react-router-dom";

//making navkinks so we can reuse in both mobile and desktop
export const NavLinks = () => {
  return (
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
  );
};
