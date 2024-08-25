import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.item}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
