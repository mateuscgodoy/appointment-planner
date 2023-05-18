import React from "react";

export const ContactForm = ({ contact, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={contact.name ? contact.name : ""}
            onChange={handleChange}
            name="name"
            required
          />
        </label>
        <label>
          Phone Number: {<em>ex. +55 (19) 91111-1111</em>}
          <input
            type="text"
            value={contact.phone ? contact.phone : ""}
            onChange={handleChange}
            name="phone"
            pattern="^(\+55)?\s*\(?\s*(\d{2})\s*\)?\s*9\s*([5-9]{1}\d{3})[-.\s]*\d{4}$"
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="text"
            value={contact.email ? contact.email : ""}
            onChange={handleChange}
            name="email"
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
