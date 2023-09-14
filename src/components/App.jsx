import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import style from "./App.module.css";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsList = JSON.parse(localStorage.getItem("contacts"));
    if (contactsList) {
      setContacts(contactsList);
    }
  }, []);

  useEffect(() => {
    const contactsJson = JSON.stringify(contacts);
    localStorage.setItem("contacts", contactsJson);
  }, [contacts]);

  const handleFormSubmit = (event) => {
    const existingContact = contacts.find(
      (contact) => contact.name === event.name
    );
    if (existingContact !== undefined) {
      alert(`${event.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: event.name,
        number: event.number,
      };

      setContacts([...contacts, contact]);
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredContacts;
  };

  const handleDeleteContact = (id) => {
    const remainingContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(remainingContacts);
  };

  return (
    <section className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit}></ContactForm>
      <h1 className={style.subtitle}>Contacts</h1>
      <Filter value={filter} onFilterChange={handleFilterChange}></Filter>
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={handleDeleteContact}
      ></ContactList>
    </section>
  );
};
