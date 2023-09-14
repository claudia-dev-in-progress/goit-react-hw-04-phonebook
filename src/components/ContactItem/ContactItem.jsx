import PropTypes from "prop-types";
import style from "./ContactItem.module.css";

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={style.contact_item}>
      {name} : {number}
      <button
        type="button"
        className={style.delete_button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
