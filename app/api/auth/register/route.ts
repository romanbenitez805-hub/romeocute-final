 import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();
    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)",
      [email, hash, role || "client"]
    );

    return NextResponse.json({ message: "Usuario registrado correctamente" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}