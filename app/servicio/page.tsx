
"use client";

export default function ServiciosPage() {
  return (
    <main className="holder">
      <h2>Nuestros Servicios:</h2>
<hr/>
      <div className="servicios">
        <div className="servicio">
          <img src="/img/calidad.jpg" alt="Calidad" />
          <div className="info">
            <h4>Calidad de las Telas</h4>
            <p>
              En ROMEOCUTE usamos telas suaves, resistentes y con estilo. Cada
              prenda está pensada para durar y sentirse bien desde el primer uso.
              Calidad que se nota, diseño que te representa.
            </p>
          </div>
        </div>
<hr/>
        <div className="servicio">
          <img src="/img/duracion.jpg" alt="Duración" />
          <div className="info">
            <h4>Excelente Duración</h4>
            <p>
              Las prendas de ROMEOCUTE están hechas para durar. Usamos materiales
              resistentes y confección de calidad, para que cada pieza te
              acompañe temporada tras temporada sin perder estilo ni forma.
            </p>
          </div>
        </div>
<hr/>
        <div className="servicio">
          <img src="/img/precio.jpg" alt="Precio" />
          <div className="info">
            <h4>Estilo accesible</h4>
            <p>
              Creemos que el estilo no tiene que ser caro. Por eso ofrecemos
              prendas con diseño y calidad a precios accesibles, para que todos
              puedan vestir con personalidad sin gastar de más.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
