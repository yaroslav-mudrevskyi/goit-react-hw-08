import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <DocumentTitle>Home</DocumentTitle>
      <div className={s.container}>
        <h1 className={s.title}>Manage Your Contacts with Ease!</h1>
        <Link className={s.btn} to="/login">
          Let's go!
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
