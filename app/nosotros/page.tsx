"use client";
import { useEffect, useState, useRef } from "react";

interface Persona {
  id: string | number;
  foto?: string;
  nombre: string;
  rol: string;
  descripcion: string;
  edad: number;
  gmail: string;
}

export default function NosotrosPage() {
  const [staff, setStaff] = useState<Persona[]>([]);
  const [editando, setEditando] = useState<Persona | null>(null);
  const [rol, setRol] = useState<string | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    const r = localStorage.getItem("rol");
    setRol(r);

    if (!fetched.current) {
      fetched.current = true;
      cargarStaff();
    }
  }, []);

  const cargarStaff = async () => {
    const res = await fetch("/api/staff");
    const data = await res.json();
    setStaff(Array.isArray(data) ? data : []);
  };

  const crear = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch("/api/staff/create", {
      method: "POST",
      body: formData,
    });

    e.currentTarget.reset();
    cargarStaff();
  };

  const eliminar = async (id: number | string) => {
    await fetch(`/api/staff/delete/${id}`, { method: "DELETE" });
    cargarStaff();
  };

  const guardarEdicion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editando) return;

    const formData = new FormData(e.currentTarget);

    await fetch(`/api/staff/update/${editando.id}`, {
      method: "PUT",
      body: formData,
    });

    setEditando(null);
    cargarStaff();
  };

  return (
    <main className="holder">
      <section className="historia">
        <h2>Historia</h2>
      </section>

      <section className="descripcion">
        <p>ROMEOCUTE nació de una chispa de rebeldía y estilo...</p>
      </section>

      <section className="personas">
        <h2>Staff</h2>
        {staff.length > 0 ? (
          staff.map((persona) => (
            <div className="persona" key={persona.id}>
              {persona.foto && (
                <img src={persona.foto} alt={persona.nombre} className="foto" />
              )}
              <h5 className="nombre">{persona.nombre}</h5>
              <h6>{persona.rol}</h6>
              <p className="descripcion">{persona.descripcion}</p>
              <p>Edad: {persona.edad}</p>
              <p>Email: {persona.gmail}</p>

              {rol === "admin" && (
                <>
                  <button onClick={() => setEditando(persona)}>Editar</button>
                  <button onClick={() => eliminar(persona.id)}>Eliminar</button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No se pudo cargar el staff.</p>
        )}

        {rol === "admin" && editando && (
          <form onSubmit={guardarEdicion} className="form-editar" encType="multipart/form-data">
            <h3>Editar miembro</h3>
            <input type="text" name="nombre" defaultValue={editando.nombre} />
            <input type="text" name="rol" defaultValue={editando.rol} />
            <input type="number" name="edad" defaultValue={editando.edad} />
            <input type="email" name="gmail" defaultValue={editando.gmail} />
            <input type="text" name="descripcion" defaultValue={editando.descripcion} />
            <input type="file" name="foto" accept="image/*" />
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={() => setEditando(null)}>Cancelar</button>
          </form>
        )}

        {rol === "admin" && (
          <form onSubmit={crear} className="form-agregar" encType="multipart/form-data">
            <h3>Agregar miembro</h3>
            <input type="text" name="nombre" placeholder="Nombre:" required />
            <input type="text" name="rol" placeholder="Rol:" required />
            <input type="number" name="edad" placeholder="Edad:" required />
            <input type="email" name="gmail" placeholder="Email:" required />
            <input type="text" name="descripcion" placeholder="Descripción:" />
            <input type="file" name="foto" accept="image/*" />
            <button type="submit">Agregar</button>
          </form>
        )}
      </section>
    </main>
  );
}
