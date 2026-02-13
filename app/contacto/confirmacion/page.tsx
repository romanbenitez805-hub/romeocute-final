"use client";

export default function Confirmacion() {
  // Función para cerrar sesión
  const handleLogout = () => {
    // Borrar cookie "rol"
    document.cookie = "rol=; path=/; max-age=0";
    // Borrar localStorage
    localStorage.removeItem("rol");
    // Redirigir al login
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>¡Gracias, Roman!</h2>
      <p>Tu mensaje fue enviado con éxito. Te responderemos pronto.</p>

      {/* Link para volver al inicio */}
      <a href="/" style={{ color: "blue", textDecoration: "underline", display: "block", marginTop: "1rem" }}>
        Volver al inicio
      </a>

      {/* Botón de cerrar sesión en rojo */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: "1.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
