import React, { useState, useReducer } from "react";
import { fetchAPI } from "../utils";

const BookingsForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString('en-CA'),
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const initializeTimes = (date) => {
    return fetchAPI(date);
  }
  const updateTimes = (state, action) => {
    if (action.date) {
      state = [...fetchAPI(new Date(action.date))];
    }
    return state
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(new Date()));

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (e.target.id === "date") {
      dispatch({date: e.target.value});
    }
  };

  return (
    <>
      <h1>Booking Form</h1>
      <form>
        <label for="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          defaultValue={formData.date}
          onChange={handleFormDataChange}
        />
        <label for="time">Choose time</label>
        <select id="time" value={formData.time} onChange={handleFormDataChange}>
          {availableTimes.map((time, i) => (
            <option key={i}>{time}</option>
          ))}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          onChange={handleFormDataChange}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.guests}
          onChange={handleFormDataChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your Reservation</button>
      </form>
    </>
  );
};

export default BookingsForm;
