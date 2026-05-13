import { useState } from "react";
import "./Register.css";
import Popup from "../../Components/Popup/Popup";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [popup, setPopup] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://donation-hsbo.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({
          show: true,
          message: "Registered successfully ✅",
        });

        setTimeout(() => {
          window.location.href = "/login";
        }, 1200);
      } else {
        setPopup({
          show: true,
          message: data.message || "Register failed ❌",
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

      <form onSubmit={handleRegister} className="login-form">
        <h2>Register</h2>

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

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <span
            onClick={() => (window.location.href = "/login")}
            style={{ color: "#2563eb", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;

