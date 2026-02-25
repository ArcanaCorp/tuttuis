'use client';

import { useAuth } from "@/context/AuthContext";
import { IconLogout } from "@tabler/icons-react";

export default function Page () {
    
    const { logout } = useAuth();
    
    return (
        <>
            <section className="w bg-white m-auto border-surface p4 rounded-md lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                <h3 className="text-2xl mb2 lg:text-3xl">Inicio de Sesión</h3>
                <ul className="w bg-white m-auto lg:w-full" style={{"--w": "90%"}}>
                    <button className="w-full h flex align-center bg-danger-transparent text-danger rounded-md gap-2 ph2" style={{"--h": "50px"}} onClick={logout}><IconLogout/> Cerrar Sesión</button>
                </ul>
            </section>

            <section className="w bg-white m-auto border-surface p4 rounded-md mb4 lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                <h3 className="text-2xl lg:text-3xl mb2">Información del Colegio</h3>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label>Ingresa el nombre del colegio</label>
                        <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                    </div>
                    <div className="w-full flex gap-2">
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w bg-white m-auto border-surface p4 rounded-md mb4 lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                <h3 className="text-2xl lg:text-3xl mb2">Información del Colegio</h3>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label>Ingresa el nombre del colegio</label>
                        <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                    </div>
                    <div className="w-full flex gap-2">
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w bg-white m-auto border-surface p4 rounded-md mb4 lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                <h3 className="text-2xl lg:text-3xl mb2">Información del Colegio</h3>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label>Ingresa el nombre del colegio</label>
                        <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                    </div>
                    <div className="w-full flex gap-2">
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label>Ingresa el nombre del colegio</label>
                            <input type="text" className="input input-radius-md h" style={{"--h": "50px"}} name="colege_name" id="colege_name" placeholder="Ingresa el nombre del colegio" aria-placeholder="Ingresa el nombre del colegio" />
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}