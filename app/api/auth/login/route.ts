
import { RowDataPacket } from "mysql2"; 
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import bcrypt from "bcryptjs";


export async function POST(request: Request) {
  const { email, password } = await request.json();

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );

  const user = rows[0] as any;

  if (!user) return NextResponse.json({ error: "Usuario no encontrado" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ error: "Contraseña incorrecta" });

  return NextResponse.json({ rol: user.rol });
}