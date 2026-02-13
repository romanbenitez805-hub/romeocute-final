import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // 👈 acá el await
    await pool.query("UPDATE staff SET activo = 0 WHERE id=?", [id]);
    return NextResponse.json({ message: "Empleado marcado como inactivo" });
  } catch (error: any) {
    console.error("Error en DELETE /api/staff/delete/[id]:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
