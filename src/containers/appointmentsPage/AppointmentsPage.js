import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addNewAppointment,
}) => {
  const [appointment, setAppointment] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewAppointment(appointment);
    setAppointment({});
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          appointment={appointment}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objects={appointments} />
      </section>
    </div>
  );
};
