// pages/auth.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("Coffee First")
  const [role, setRole] = useState("Admin")
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Email and password must not be empty.");
      return;
    }

    if (email === "coffee.first.calbayog@gmail.com" && password === "coffeefirst") {
      localStorage.setItem("loggedInUser", JSON.stringify({email, username, role}));
      alert("Login successful!");
      router.replace("/admin/dashboard");
    } else {
        alert("Fuck you");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded shadow-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;