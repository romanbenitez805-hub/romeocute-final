
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, rol, descripcion, edad, gmail, foto FROM staff WHERE activo = 1"
    );
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
