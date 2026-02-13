import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Rutas públicas que no requieren login
  const publicPaths = ["/login", "/api/auth/login", "/contacto/confirmacion"];

  // Si la ruta actual es pública, dejar pasar
  if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Leer cookie "rol"
  const rol = request.cookies.get("rol")?.value;

  if (!rol) {
    // Si no hay login, redirigir al login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Si hay login, dejar pasar
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
