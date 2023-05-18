import React from "react";

export const ContactPicker = ({ contacts, value, name, handleChange }) => {
  return (
    <>
      {contacts && contacts.length > 0 && (
        <select onChange={handleChange} value={value} name={name}>
          <option value="">No Contact Selected</option>
          {contacts.map((contact) => (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};
