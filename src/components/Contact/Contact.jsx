const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
