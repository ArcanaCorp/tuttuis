import { useLocation } from "react-router-dom"
import { useUser } from '@/context/UserContext'

export default function Header () {

    const location = useLocation();
    const { user } = useUser();

    return (

        <>
        
            <header className='__header_home_view'>
                {location.pathname === '/dashboard' && (
                    <>
                        <p className='__txt_greeting'>Bienvenido,</p>
                        <h1>{user?.name}</h1>
                    </>
                )}
                {location.pathname === '/dashboard/scan' && (
                    <>
                        <h1>Escanear</h1>
                        <p className='__txt_greeting'>Escanea para registrar la asistencia.</p>
                    </>
                )}
                {location.pathname === '/dashboard/search' && (
                    <>
                        <h1>Buscar</h1>
                        <p className='__txt_greeting'>Encuentra a tus alumnos para más acciones.</p>
                    </>
                )}
                {location.pathname === '/dashboard/account' && (
                    <>
                        <h1>Cuenta</h1>
                        <p className='__txt_greeting'>Revisa más información sobre la cuenta.</p>
                    </>
                )}
            </header>

        </>

    )

}