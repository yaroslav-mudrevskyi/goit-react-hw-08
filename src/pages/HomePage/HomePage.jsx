// import { useSelector } from "react-redux";
// import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div className={s.wrapper}>
      {/* <DocumentTitle>Home</DocumentTitle> */}
      <div className={s.container}>
        <h1 className={s.title}>Manage Your Contacts with Ease!</h1>
        <Link className={s.button} to="/login">
          Let's go!
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
