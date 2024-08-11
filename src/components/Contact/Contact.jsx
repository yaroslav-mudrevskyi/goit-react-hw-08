import s from "./Contact.module.css";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contactData}>
        <h3 className={s.name}>
          <FaUserTie />
          {contact.name}
        </h3>
        <p className={s.number}>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button className={s.btn} onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
