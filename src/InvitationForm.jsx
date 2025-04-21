import axios from "axios";
import React, { useState } from "react";

const InvitationForm = ({ onInvitationAdded }) => {
  const API_ENDPOINT = "http://localhost:8080/api/invitations";
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_ENDPOINT, formData);

      if (response.status === 201) {
        onInvitationAdded(response.data);
        setFormData({
          title: "",
          date: "",
          time: "",
          location: "",
          status: "pending",
        });
        console.log("Invitation created successfully.");
      }
    } catch (error) {
      console.error("Error creating invitation:", error);
    }
  };

  return (
    <div className="mb-4">
      <h4>Create a New Invitation</h4>
      <form onSubmit={handleSumbit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="time"
            name="time"
            className="form-control"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Invitation
        </button>
      </form>
    </div>
  );
};

export default InvitationForm;