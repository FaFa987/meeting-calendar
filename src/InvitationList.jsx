import axios from "axios";
import React, { useEffect, useState } from "react";
import InvitationForm from "./InvitationForm";

const InvitationList = () => {
  const [invitations, setInvitations] = useState([]);
  const API_ENDPOINT = "http://localhost:8080/api/invitations";


  useEffect(() => {
    fetchAllInvitations();
  }, []);


  const fetchAllInvitations = async () => {
    console.log("Step1: Starting to fetch invitations...");

    await axios
      .get(API_ENDPOINT)
      .then((response) => {
        console.log("Step2: Response received.", response);
        if (response.status === 200) {
          setInvitations(response.data);
        } else {
          console.error("Unexpected response status:", response.status);
        }

        console.log(
          "Step3: Invitations successfully fetched and state updated!"
        );
      })
      .catch((error) => {
        console.error("Error occured!");
      });

    console.log("Step4: Finished fetching invitations.");
  };

  const updateInvitationStatus = async (id, newStatus) => {
    try {
      console.log("newStatus:", newStatus);

      const response = await axios.put(
        `${API_ENDPOINT}/${id}?status=${newStatus}`
      );

      if (response.status === 204) {
        fetchAllInvitations();
        console.log("Invitation status updated successfully.");
      }
    } catch (error) {
      console.error("Error updating invitation:", error);
    }
  };

  const deleteInvitation = async (id) => {
    try {
      const response = await axios.delete(`${API_ENDPOINT}/${id}`);
      if (response.status === 204) {
        fetchAllInvitations();
        console.log("Invitation deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting invitation:", error);
    }
  };

    const handleInvitationAdded = () => {
        fetchAllInvitations();
      };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Invitations</h2>

      <InvitationForm onInvitationAdded={handleInvitationAdded}/>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Invitation</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td>{index + 1}</td>
                <td>{invitation.title}</td>
                <td>{invitation.date}</td>
                <td>{invitation.time}</td>
                <td>{invitation.location}</td>
                <td>
                  <span
                    className={`badge ${
                      invitation.status === "accepted"
                        ? "bg-success"
                        : invitation.status === "declined"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {invitation.status.charAt(0).toUpperCase() +
                      invitation.status.slice(1)}
                  </span>
                </td>
                <td>
                  {invitation.status === "pending" && (
                    <>
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() =>
                          updateInvitationStatus(invitation.id, "accepted")
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() =>
                          updateInvitationStatus(invitation.id, "declined")
                        }
                      >
                        Decline
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => deleteInvitation(invitation.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvitationList;