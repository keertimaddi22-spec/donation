import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false); // ✅ new

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);

        // ✅ show popup
        setShowPopup(true);

        // ✅ redirect after 2 sec
        setTimeout(() => {
          window.location.href = "/donate";
        }, 2000);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
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
      </form>

      {/* ✅ POPUP yahi lagega */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🎉 Login Successful!</h3>
            <p>Welcome to LittleHearts 💛</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;