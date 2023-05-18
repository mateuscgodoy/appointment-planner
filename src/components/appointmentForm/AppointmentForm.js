import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  appointment,
  handleSubmit,
  handleChange,
  contacts,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={appointment.name ? appointment.name : ""}
            onChange={handleChange}
            name="name"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            min={getTodayString()}
            value={appointment.date ? appointment.date : ""}
            onChange={handleChange}
            name="date"
            required
          />
        </label>
        <label>
          Hour:
          <input
            type="text"
            value={appointment.hour ? appointment.hour : ""}
            onChange={handleChange}
            name="hour"
            required
          />
        </label>
        <label>
          Contact:
          <ContactPicker
            contacts={contacts}
            handleChange={handleChange}
            name="contact"
            value={appointment.contact ? appointment.contact : ""}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
