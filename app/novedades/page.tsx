// app/novedades/page.tsx
"use client";

export default function NovedadesPage() {
  return (
    <main className="holder">
      <div className="titulo-novedades">
        <h2>Novedades</h2>
      </div>
<hr/>
      <div className="novedades-item">
        <h3 className="novedades-titulo">Nueva colección: Sombras de Roma</h3>
        <h4 className="novedades-subtitulo">Estilo urbano con alma romántica</h4>
        <p className="novedades-descripcion">
          Inspirada en las calles empedradas y los amores fugaces de Roma, esta
          colección mezcla siluetas relajadas con detalles poéticos. Prendas
          versátiles que hablan de rebeldía suave, perfectas para quienes viven
          con intensidad y estilo.
        </p>
      </div>

      <hr />

      <div className="novedades-item">
        <h3 className="novedades-titulo">ROMEOCUTE ahora en más talles</h3>
        <h4 className="novedades-subtitulo">Inclusividad sin perder actitud</h4>
        <p className="novedades-descripcion">
          Creemos que el estilo no tiene talla. Por eso ampliamos nuestra línea
          para que más personas puedan vestir con carácter. Mismo diseño, misma
          calidad, ahora con más opciones para que nadie se quede afuera del
          romance urbano.
        </p>
      </div>

      <hr />

      <div className="novedades-item">
        <h3 className="novedades-titulo">Noches en Trastevere</h3>
        <h4 className="novedades-subtitulo">
          Prendas con carácter, hechas para durar
        </h4>
        <p className="novedades-descripcion">
          Esta cápsula nocturna celebra la textura de la ciudad y la intensidad
          de lo efímero. Materiales resistentes, cortes atrevidos y un aire de
          misterio. Solo por tiempo limitado, como los mejores encuentros.
        </p>
      </div>
    </main>
  );
}
