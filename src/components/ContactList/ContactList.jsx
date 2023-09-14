import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        ></ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
