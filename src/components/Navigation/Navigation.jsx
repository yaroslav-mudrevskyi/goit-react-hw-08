import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <nav className={s.nav}>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={addActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
