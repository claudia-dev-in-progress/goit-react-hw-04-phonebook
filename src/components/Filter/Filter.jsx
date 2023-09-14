import PropTypes from "prop-types";
import style from "./Filter.module.css";

export const Filter = ({ value, onFilterChange }) => {
  return (
    <>
      <label className={style.description}>Find contacts by name</label>
      <br />
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
        placeholder="Enter contact to search"
        className={style.input}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
