import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("adminToken")
  );
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [registerMsg, setRegisterMsg] = useState("");
  const [oldUsername, setOldUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      let data;
      try {
        data = await res.json();
      } catch {
        data = {};
      }
      if (!res.ok) {
        setError(data.error || `Server error (${res.status})`);
        return;
      }

      if (data.exists) {
        localStorage.setItem("adminToken", "adminLoggedIn");
        setLoggedIn(true);
        navigate("/admin");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Network error: " + err.message + API_BASE_URL);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterMsg("");
    setError("");
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // check old credentials
    try {
      const loginRes = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: oldUsername, password: oldPassword }),
      });
      const loginData = await loginRes.json();
      if (!loginRes.ok || !loginData.exists) {
        setError("Old admin credentials are incorrect.");
        return;
      }
    } catch {
      setError("Server error during admin check.");
      return;
    }

    // If old credentials are valid, register new account
    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setRegisterMsg("Account created! You can now log in.");
        setShowRegister(false);
        setOldUsername("");
        setOldPassword("");
        setUsername("");
        setPassword("");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch {
      setError("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, Admin!</h2>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 300, margin: "2rem auto" }}>
      {showRegister ? (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Old Admin Username"
            value={oldUsername}
            onChange={(e) => setOldUsername(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <input
            type="password"
            placeholder="Old Admin Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <input
            type="text"
            placeholder="New Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <button type="submit" style={{ width: "100%" }}>
            Register
          </button>
          <button
            type="button"
            style={{ width: "100%", marginTop: 10 }}
            onClick={() => setShowRegister(false)}
          >
            Back to Login
          </button>
          {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
          {registerMsg && (
            <div style={{ color: "green", marginTop: 10 }}>{registerMsg}</div>
          )}
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: 10 }}
          />
          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
          <button
            type="button"
            style={{ width: "100%", marginTop: 10 }}
            onClick={() => setShowRegister(true)}
          >
            Create Account
          </button>
          {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
          {registerMsg && (
            <div style={{ color: "green", marginTop: 10 }}>{registerMsg}</div>
          )}
        </form>
      )}
    </div>
  );
}

export default AdminLogin;
