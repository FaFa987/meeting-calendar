import React, { useState } from 'react';

const ScheduleForm = ({ onAddMeeting }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    level: '',
    participants: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: Date.now(),
      title: formData.title,
      date: formData.date,
      time: formData.time,
      level: formData.level
    };
    onAddMeeting(newMeeting);
    setFormData({ title: '', date: '', time: '', level: '', participants: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule a New Meeting</h2>
      <input
        type="text"
        placeholder="Meeting Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <select
        value={formData.level}
        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
        required
      >
        <option value="">Choose Level</option>
        <option value="Team">Team</option>
        <option value="Department">Department</option>
      </select>
      <button type="submit">Create Meeting</button>
    </form>
  );
};

export default ScheduleForm;