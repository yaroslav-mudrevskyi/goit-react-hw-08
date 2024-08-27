import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
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
    </>
  );
};

export default ContactsPage;
