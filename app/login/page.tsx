"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    document.cookie = `rol=${data.rol}; path=/; max-age=86400`; // dura 1 día

    if (data.rol) {
      localStorage.setItem("rol", data.rol);
      // redirige al Home
      window.location.href = "/";
    } else {
      alert("Login incorrecto");
    }
  };

  return (
  <main className="holder login">
      <div className="header">
      
        <h2>Iniciar sesión</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </p>
        <p>
          <button type="submit">Ingresar</button>
        </p>
      </form>
    </main>
  );
}
