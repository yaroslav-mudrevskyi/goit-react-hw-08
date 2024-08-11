import s from "./SearchBox.module.css";

const SearchBox = ({ searchContact, setSearchContact }) => {
  return (
    <div>
      <input
        className={s.input}
        value={searchContact}
        onChange={(e) => setSearchContact(e.target.value)}
        placeholder="Enter name for search..."
      />
    </div>
  );
};

export default SearchBox;
