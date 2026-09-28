import "./globals.css";

export const metadata = {
  title: "Veterinaria Pet It | Tu Mascota, Tu Familia",
  description: "Atención veterinaria integral para tus mascotas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/imgs/pet it/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imgs/pet it/logo.png" />
        <link rel="apple-touch-icon" href="/imgs/pet it/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
