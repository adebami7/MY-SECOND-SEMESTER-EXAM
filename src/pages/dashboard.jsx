import React from "react";
import { useUser } from "../hooks/useUser";

function Dashboard() {
  const { user, logout } = useUser();
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="container">
        <img src={user.profile_picture} alt={user.first_name} className="profile_picture" />
        <p className="first_name">first name: {user.first_name}</p>
        <p className="last_name">last name: {user.last_name}</p>
        <p className="user_name">username: {user.username}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
