"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/router";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = window.localStorage.getItem("userId");
      setUserId(storedUserId ? JSON.parse(storedUserId) : "");
    } else {
      setUserId("werkt niet");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://swipperresource.azurewebsites.net/api/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        window.localStorage.setItem("userId", data);
        setUserId(data);
        console.log(userId);
        onLogin();
      } else {
        // Error occurred
        const errorData = await response.json();
        prompt(errorData.message);
        console.log("Login error:", errorData);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div id={styles.wrapper}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id={styles.username}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="Password"
            id={styles.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
