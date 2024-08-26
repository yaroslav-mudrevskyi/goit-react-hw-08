import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/contacts/selectors";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name for search..."
      />
    </div>
  );
};

export default SearchBox;
