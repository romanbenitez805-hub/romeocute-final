import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const nombre = formData.get("nombre")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const telefono = formData.get("telefono")?.toString() || "";
  const mensaje = formData.get("mensaje")?.toString() || "";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_TO,
    subject: "Nuevo mensaje de contacto",
    text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
  });

  // Redirige página de confirmación bonita
  return NextResponse.redirect(new URL("/contacto/confirmacion", request.url));
}
