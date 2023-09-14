import PropTypes from "prop-types";
import { Component } from "react";
import style from "./ContactForm.module.css";

export class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.onFormSubmit(this.state);
    form.reset();
  }

  render() {
    return (
      <form on onSubmit={this.handleFormSubmit}>
        <h3 className={style.subtitle}>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          className={style.input}
        />
        <br />
        <button type="submit" className={style.add_contact_button}>
          Add contact
        </button>
      </form>
    );
  }
}
