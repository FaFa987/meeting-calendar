import React from 'react';


const ListOfMeetings = ({ meetings }) => {
  return (
    <div>
      <h2>List of Created Meetings</h2>
      <table>
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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfMeetings;