import "./globals.css";
import "../public/css/romeocute.css";
import "../public/css/normalize.css";
import Link from "next/link";
import Nav from "./Nav";

export const metadata = {
  title: "romeoCute",
  description: "Sitio oficial de la marca RomeoCute",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="holder">
            <img src="/img/logo.png" width="100" alt="logo" />
            <h1>RomeoCute</h1>
          </div>
        </header>

        <Nav />

        {children}

        <footer>
          <p>Diseñado por Benitez Carlos Roman - ©2026</p>
        </footer>
      </body>
    </html>
  );
}
