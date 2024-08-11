import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import s from "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  const [searchContact, setSearchContact] = useState("");

  useEffect(() =>
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  ),
    [contacts];

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  const searchedContact = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox
        searchContact={searchContact}
        setSearchContact={setSearchContact}
      />
      <ContactList
        contacts={searchedContact}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
