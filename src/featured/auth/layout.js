import { Outlet } from "react-router-dom";
import collegeLogo from '@/shared/img/insignia-svpjauja.png'
import logo from '@/shared/img/LOGO.svg'
import './styles/layout.css'
import { Toaster } from "sonner";

export default function AuthLayout () {

    return (

        <>
        
            <header className="__auth_header">
                <div className="__auth_logo">
                    <a href='/' className="__link_logo">
                        <img className="__img_logo_college" src={collegeLogo} alt="Logo del colegio SAN VICENTE DE PAUL DE JAUJA" fetchPriority="high" />
                    </a>
                </div>
                <h1>Bienvenido</h1>
                <p>Ingresa a tu cuenta con tus credenciales.</p>
            </header>

            <main className="__auth_main">
                <Outlet/>
            </main>

            <footer className="__auth_footer">
                <div className="__box_footer">
                    <p>Powered by</p>
                    <img className="__img_logo" src={logo} alt={`Logo`} fetchPriority="high" />
                    <p>Un producto de <b><a href="/">ARCANA CORP</a></b></p>
                </div>
            </footer>

            <Toaster position="top-center" duration={3000} richColors />

        </>

    )

}