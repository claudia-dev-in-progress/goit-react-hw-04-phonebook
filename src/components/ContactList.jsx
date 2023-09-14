import { Component } from "react";
import PropTypes from "prop-types";
import { ContactItem } from "./ContactItem";

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={this.props.onDeleteContact}
          ></ContactItem>
        ))}
      </ul>
    );
  }
}
