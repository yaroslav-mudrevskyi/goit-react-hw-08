const SearchBox = ({ searchContact, setSearchContact }) => {
  return (
    <div>
      <input
        value={searchContact}
        onChange={(e) => setSearchContact(e.target.value)}
        placeholder="Enter contact name"
      />
    </div>
  );
};

export default SearchBox;
