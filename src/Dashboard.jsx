import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';
import ListOfMeetings from './ListOfMeetings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Project Kobalt", date: "2024-05-15", time: "10:00 AM", level: "Team" },
    { id: 2, title: "Quarterly Review", date: "2024-06-01", time: "02:00 PM", level: "Department" }
  ]);

  const handleAddMeeting = (newMeeting) => {
    setMeetings([...meetings, newMeeting]);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <button onClick={() => setActiveTab('schedule')}>Schedule Meeting</button>
        <button onClick={() => setActiveTab('manage')}>Manage Meetings</button>
        <button>Analytics</button>
      </div>

      <div className="content">
        {activeTab === 'schedule' && <ScheduleForm onAddMeeting={handleAddMeeting} />}
        {activeTab === 'manage' && <ListOfMeetings meetings={meetings} />}
      </div>
    </div>
  );
};

export default Dashboard;
