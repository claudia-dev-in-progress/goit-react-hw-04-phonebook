import { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li className={style.contact_item}>
        {this.props.name} : {this.props.number}
        <button
          type="button"
          className={style.delete_button}
          onClick={() => this.props.onDeleteContact(this.props.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
