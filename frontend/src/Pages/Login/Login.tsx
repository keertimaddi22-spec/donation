import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://donation-hsbo.onrender.com/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        window.location.href = "/donate";
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (err) {
      alert("Backend not reachable ❌");
    }
  };

  return (
    <div className="login-container">
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