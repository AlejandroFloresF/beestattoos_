import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../assets/css/Root.css'
import '../assets/css/Navbar.css'
import '../assets/css/Footer.css'
import '../assets/css/Galeria.css'
import '../assets/css/Portafolio.css'
import '../assets/css/Nosotros.css'
import '../assets/css/Index.css'
import '../assets/css/NavbarMenu.css'
import '../assets/css/Login.css'
import '../assets/css/Register.css'
import '../assets/css/Citas.css'




export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

