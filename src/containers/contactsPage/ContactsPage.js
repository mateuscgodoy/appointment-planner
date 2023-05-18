import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addNewContact }) => {
  const [contact, setContact] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contacts.some((oldContact) => oldContact.name === contact.name)) {
      addNewContact(contact);
      setContact({});
      console.log("Success!");
    }
  };

  useEffect(() => {
    if (
      contact.name &&
      contacts.some((oldContact) => contact.name === oldContact.name)
    ) {
      alert("That contact is already on the list.");
    }
  }, [contact.name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contact={contact}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts} />
      </section>
    </div>
  );
};
