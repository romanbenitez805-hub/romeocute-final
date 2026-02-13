"use client";

export default function ContactoPage() {
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
        <main className="holder contacto">
            <h2>formulario de contacto:</h2>

            <form action="/api/contacto" method="POST" className="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="telefono" id="telefono" />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" required></textarea>
                </p>
                <p>
                    <button type="submit">Enviar</button>
                </p>
            </form>

            <div className="otras-vias">
                <h2>Otras vías de contacto</h2>
                <p>
                    También podés encontrarnos en nuestras redes sociales o visitarnos en
                    nuestra tienda física.
                </p>
                <ul>
                    <li>Teléfono: 1234-5678</li>
                    <li>Email: romeocutea@gmail.com</li>
                    <li>Facebook: romeocutea</li>
                    <li>Instagram: @romeocute</li>
                    <li>Skype: romeocute</li>
                </ul>
            </div>

            {/* Botón de cerrar sesión */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button onClick={handleLogout} style={{
                    padding: "0.5rem 1rem",
                    marginTop: "1.5rem",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"

                }}>
                    Cerrar sesión
                </button>
            </div>
        </main>
    );
}
