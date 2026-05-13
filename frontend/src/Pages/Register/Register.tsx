import { useState } from "react";
import Popup from "../../Components/Popup/Popup";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [popup, setPopup] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const API = "https://donation-hsbo.onrender.com";

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`${API}/register`, {
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;