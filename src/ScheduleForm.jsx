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
    if (!formData.title || !formData.date || !formData.time || !formData.level) {
      alert('Please fill all required fields');
      return;
    }
    onAddMeeting(formData);
    setFormData({
      title: '',
      date: '',
      time: '',
      level: '',
      participants: '',
      description: ''
    });
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <h2>Schedule New Meeting</h2>
      
      <div className="form-group">
        <label>Meeting Title *</label>
        <input
          type="text"
          placeholder="Enter meeting title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date *</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Time *</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Meeting Level *</label>
        <select
          value={formData.level}
          onChange={(e) => setFormData({...formData, level: e.target.value})}
          required
        >
          <option value="">Select Level</option>
          <option value="Team">Team</option>
          <option value="Department">Department</option>
          <option value="Company">Company</option>
        </select>
      </div>

      <div className="form-group">
        <label>Participants (Emails)</label>
        <input
          type="text"
          placeholder="Enter participant emails, separated by commas"
          value={formData.participants}
          onChange={(e) => setFormData({...formData, participants: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Enter meeting description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button type="submit" className="submit-button">Create Meeting</button>
    </form>
  );
};

export default ScheduleForm;