"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="holder">
        <li>
          <Link href="/" className={pathname === "/" ? "activo" : ""}>Home</Link>
        </li>
        <li>
          <Link href="/nosotros" className={pathname === "/nosotros" ? "activo" : ""}>Nosotros</Link>
        </li>
        <li>
          <Link href="/servicio" className={pathname === "/servicio" ? "activo" : ""}>Servicios</Link>
        </li>
        <li>
          <Link href="/galeria" className={pathname === "/galeria" ? "activo" : ""}>Galería</Link>
        </li>
        <li>
          <Link href="/novedades" className={pathname === "/novedades" ? "activo" : ""}>Novedades</Link>
        </li>
        <li>
          <Link href="/contacto" className={pathname === "/contacto" ? "activo" : ""}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
