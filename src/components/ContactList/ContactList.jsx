import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  return (
    <div className={s.item}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          // handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
