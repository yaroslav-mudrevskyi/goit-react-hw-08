import { useDispatch } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
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
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
