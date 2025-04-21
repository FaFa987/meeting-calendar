import React from "react";
import { Routes, Route, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#f8f9fa",
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard/manage-users")}
              >
                Manage User
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard/invitations")}
              >
                Invitations
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "16px" }}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="invitations" element={<Invitations />} />
        </Routes>
      </main>
    </div>
  );
};

const ManageUsers = () => {
  return (
    <div>
      <h2>Manage Users</h2>
      <p>Here, you can manage users, update roles, and more.</p>
    </div>
  );
};

const Invitations = () => {
  return (
    <div>
      <h2>My Invitations</h2>
      <p>View and manage your invitations here.</p>
    </div>
  );
};

const DashboardHome = () => {
  return <p>Welcome to the Dashboard! Select an option from the menu.</p>;
};

export default Dashboard;