import { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import "./Login.css";
import React from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
  });

 const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://your-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);

        setPopup({ show: true, message: "Login successful ✅" });

        setTimeout(() => {
          window.location.href = "/donate";
        }, 1200);
      } else {
        setPopup({ show: true, message: data.message || "Login failed ❌" });
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

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>

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
          {loading ? (
            <span className="spinner"></span>
          ) : (
            "Login"
          )}
        </button>

        <p>
          Don’t have an account?{" "}
          <span onClick={() => (window.location.href = "/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;