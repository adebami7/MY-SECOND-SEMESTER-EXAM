import React, { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [profilePictureName, setProfilePictureName] = useState("");

  const [profilePicture, setProfilePicture] = useState("");

  const { login, error, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    return () => {
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
    };
  }, []);

  return (
    <div className="login">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(profilePicture, firstName, lastName, username, email, password);
        }}
      >
        {error && <div style={{ color: "red" }}>{error}</div>}
        <label htmlFor="profile-picture">
          <input
            type="file"
            id="profile-picture"
            required
            onChange={(e) => {
              setProfilePictureName(e.target.files[0].name);
              setProfilePicture(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>
        <label htmlFor="first-name">
          <input
            type="text"
            id="first-name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p>First name</p>
        </label>
        <label htmlFor="last-name">
          <input
            type="text"
            id="last-name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <p>Last name</p>
        </label>
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>User name</p>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Email</p>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Password</p>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
