import { useState } from "react";
import "./Login.css";
import Popup from "../../Components/Popup/Popup";

const API = "https://donation-hsbo.onrender.com";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [popup, setPopup] = useState({
    show: false,
    message: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);

        setPopup({
          show: true,
          message: "Login successful ✅",
        });

        setTimeout(() => {
          window.location.href = "/donate";
        }, 1200);
      } else {
        setPopup({
          show: true,
          message: data.message || "Login failed ❌",
        });
      }
    } catch (err) {
      setPopup({
        show: true,
        message: "Backend not reachable ❌",
      });
    }
  };

  return (
    <div className="login-container">

      {popup.show && (
        <Popup
          message={popup.message}
          onClose={() => setPopup({ show: false, message: "" })}
        />
      )}

      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p>
          Don’t have an account?{" "}
          <span
            onClick={() => (window.location.href = "/register")}
            style={{ color: "#2563eb", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;