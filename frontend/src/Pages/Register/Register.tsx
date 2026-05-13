import { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import "./Register.css";
import React from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://your-backend.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({ show: true, message: "Registered successfully ✅" });

        setTimeout(() => {
          window.location.href = "/login";
        }, 1200);
      } else {
        setPopup({ show: true, message: data.message || "Register failed ❌" });
      }
    } catch (err) {
      setPopup({ show: true, message: "Backend not reachable ❌" });
    }

    setLoading(false);
  };

  return (
    <div className="login-container">

      {popup.show && (
        <Popup
          message={popup.message}
          onClose={() => setPopup({ show: false, message: "" })}
        />
      )}

      <form className="login-form" onSubmit={handleRegister}>
        <h2>Create Account ✨</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading} className="btn">
          {loading ? <span className="spinner"></span> : "Register"}
        </button>

        <p>
          Already have an account?{" "}
          <span onClick={() => (window.location.href = "/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;