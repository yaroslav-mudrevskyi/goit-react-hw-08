import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={s.item}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
