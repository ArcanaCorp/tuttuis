'use client';

import AccountForm from "@/components/settings/AccountForm";
import InstitutionForm from "@/components/settings/InstitutionForm";
import { useAuth } from "@/context/AuthContext";
import { IconLogout } from "@tabler/icons-react";
import { useState } from "react";

export default function Page () {
    
    const { user, school, logout } = useAuth();
    const [ view, setView ] = useState('account')

    return (
        <>
            <section className="w flex gap-1 m-auto border-surface p4 lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                <ul className="w flex flex-col gap-4 border-right p4 bg-white rounded-md" style={{"--w": "300px", "--mnw": "300px"}}>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'account' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('account')}>Administrar Cuenta</li>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'institution' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('institution')}>Cuenta de institución</li>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'users' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('users')}>Administrar usuarios</li>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'privacy' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('privacy')}>Privacidad</li>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'notification' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('notification')}>Notificaciones</li>
                    <li className={`w-full h pointer flex align-center text-md rounded-sm ph2 ${view === 'login' ? 'text-primary fw-bold' : ''}`} style={{"--h": "40px"}} onClick={() => setView('login')}>Inicio de sesión</li>
                </ul>
                <div className="w-full p4 bg-white rounded-md">
                    {view === 'account' && ( <AccountForm user={user} /> )}
                    {view === 'institution' && ( <InstitutionForm user={user} school={school} /> )}
                    {view === 'login' && (
                        <>
                            <h3 className="text-2xl mb2 lg:text-3xl">Inicio de Sesión</h3>
                            <ul className="w bg-white m-auto lg:w-full" style={{"--w": "90%"}}>
                                <button className="w-full h flex align-center bg-danger-transparent text-danger rounded-md gap-2 ph2" style={{"--h": "50px"}} onClick={logout}><IconLogout/> Cerrar Sesión</button>
                            </ul>
                        </>
                    )}
                </div>
            </section>

            
        </>
    )
}