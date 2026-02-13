import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL as string);

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, rol, descripcion, edad, gmail, foto FROM staff WHERE activo = 1"
    );
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Error en GET /api/staff:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const formData = await req.formData();
    const nombre = formData.get("nombre") as string;
    const rol = formData.get("rol") as string;
    const edad = Number(formData.get("edad"));
    const gmail = formData.get("gmail") as string;
    const descripcion = formData.get("descripcion") as string;
    const file = formData.get("foto") as File | null;

    let fotoUrl = "";

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await new Promise<void>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "staff" },
          (error, result) => {
            if (error) return reject(error);
            fotoUrl = result?.secure_url || "";
            resolve();
          }
        );
        uploadStream.end(buffer);
      });
    }

    await pool.query(
      "UPDATE staff SET nombre=?, rol=?, edad=?, gmail=?, descripcion=?, foto=? WHERE id=? AND activo=1",
      [nombre, rol, edad, gmail, descripcion, fotoUrl, id]
    );

    return NextResponse.json({ message: "Miembro actualizado correctamente" });
  } catch (error: any) {
    console.error("Error en PUT /api/staff/update/[id]:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await pool.query("UPDATE staff SET activo = 0 WHERE id = ?", [id]);
  return NextResponse.json({ message: "Empleado marcado como inactivo" });
}
