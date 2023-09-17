import PropTypes from "prop-types";
import { useState } from "react";
import style from "./ContactForm.module.css";

export const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (evt) => {
    const { value } = evt.target;
    setName(value);
  };

  const handleNumberChange = (evt) => {
    const { value } = evt.target;
    setNumber(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    onFormSubmit({
      name: name,
      number: number,
    });
    form.reset();
  };

  return (
    <form on onSubmit={handleFormSubmit}>
      <h3 className={style.subtitle}>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
        className={style.input}
      />
      <br />
      <h3 className={style.subtitle}>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
        className={style.input}
      />
      <br />
      <button type="submit" className={style.add_contact_button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
