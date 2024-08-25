import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectIsError } from "./redux/selectors";
import Loader from "./components/Loader/Loader";

import s from "./App.module.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title={"Something went wrong, please, try again later!"}
        />
      )}
      <ContactList />
    </div>
  );
};

export default App;
