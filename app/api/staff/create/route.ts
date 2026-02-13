import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL as string,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
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

      // Subir a Cloudinary
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
      "INSERT INTO staff (nombre, rol, edad, gmail, descripcion, foto, activo) VALUES (?, ?, ?, ?, ?, ?, 1)",
      [nombre, rol, edad, gmail, descripcion, fotoUrl]
    );

    return NextResponse.json({ message: "Miembro creado correctamente" });
  } catch (error: any) {
    console.error("Error en POST /api/staff/create:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
