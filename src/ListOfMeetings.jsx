import React from 'react';

const ListOfMeetings = ({ meetings }) => {
  return (
    <div className="meetings-container">
      <h2>List of Created Meetings</h2>
      <div className="table-responsive">
        <table className="meetings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Meeting Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting) => (
              <tr key={meeting.id}>
                <td>{meeting.id}</td>
                <td>{meeting.title}</td>
                <td>{meeting.date}</td>
                <td>{meeting.time}</td>
                <td>{meeting.level}</td>
                <td>
                  <button className="action-button edit">Edit</button>
                  <button className="action-button delete">Delete</button>
                  <span className="completed-check">✔</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfMeetings;