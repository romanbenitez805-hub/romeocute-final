"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const rol = localStorage.getItem("rol");
    if (!rol) {
      // redirige al login si no hay rol
      window.location.href = "/login";
    } else {
      setChecked(true); // si hay login, muestra el Home
    }
  }, []);

  if (!checked) return null; // evita renderizar antes de verificar

  return (
    <main className="holder">
      {/* Imagen principal */}
      <div className="homeimg"></div>

      {/* Estrellas */}
      <div className="estrellas">
        <div className="estrella estrella1">★</div>
        <div className="estrella estrella2">★</div>
        <div className="estrella estrella3">★</div>
        <div className="estrella estrella4">★</div>
        <div className="estrella estrella5">★</div>
        <div className="estrella estrella6">★</div>
        <div className="estrella estrella7">★</div>
        <div className="estrella estrella8">★</div>
        <div className="estrella estrella9">★</div>
        <div className="estrella estrella10">★</div>
        <div className="estrella estrella11">★</div>
        <div className="estrella estrella12">★</div>
        <div className="estrella estrella13">★</div>
        <div className="estrella estrella14">★</div>
        <div className="estrella estrella15">★</div>
        <div className="estrella estrella16">★</div>
        <div className="estrella estrella17">★</div>
        <div className="estrella estrella18">★</div>
        <div className="estrella estrella19">★</div>
        <div className="estrella estrella20">★</div>
      </div>

      {/* Bienvenida */}
      <div className="bienvenidos">
        <h2>Bienvenidos a RomeoCute</h2>
      </div>
      <div className="caja">
        <p>
          En ROMEOCUTE celebramos la moda como una forma de expresión única.
          Nuestra tienda está pensada para quienes buscan estilos auténticos
          y una alternativa a la moda convencional.
        </p>
      </div>

      {/* Testimonios */}
      <div className="testimonios">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>
            "Me encanta la variedad de estilos que ofrece ROMEOCUTE. Siempre
            encuentro algo que se adapta a mi personalidad."
          </p>
          <p className="autor">- Ana G.</p>
        </div>

        <div className="testimonial">
          <p>"Siempre encuentro algo nuevo que me sorprende."</p>
          <p className="autor">- Juan P.</p>
        </div>
      </div>
    </main>
  );
}
