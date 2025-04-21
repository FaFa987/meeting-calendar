import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';
import ListOfMeetings from './ListOfMeetings';
import AnalyticsPlaceholder from './AnalyticsPlaceholder';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Project Kobalt", date: "15/05/2024", time: "10:00 AM", level: "Team" },
    { id: 2, title: "Quarterly Review", date: "01/06/2024", time: "02:00 PM", level: "Department" }
  ]);

  const handleAddMeeting = (newMeeting) => {
    setMeetings([...meetings, {
      ...newMeeting,
      id: meetings.length + 1,
      date: newMeeting.date.split('-').reverse().join('/') // Convert yyyy-mm-dd to dd/mm/yyyy
    }]);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Meeting Calendar</h1>
      </header>
      
      <nav className="dashboard-nav">
        <button 
          className={`nav-button ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          Schedule Meeting
        </button>
        <button 
          className={`nav-button ${activeTab === 'manage' ? 'active' : 'completed'}`}
          onClick={() => setActiveTab('manage')}
        >
          Manage Meetings
        </button>
        <button 
          className={`nav-button ${activeTab === 'analytics' ? 'active' : 'completed'}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
        <button className="nav-button disabled">Users & Permissions</button>
        <button className="nav-button disabled">Nullisations</button>
        <button className="nav-button disabled">Settings</button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'schedule' && <ScheduleForm onAddMeeting={handleAddMeeting} />}
        {activeTab === 'manage' && <ListOfMeetings meetings={meetings} />}
        {activeTab === 'analytics' && <AnalyticsPlaceholder />}
      </main>
    </div>
  );
};

export default Dashboard;