"use client";

import { useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginWithEmail } from "@/services/auth.service";

export default function Page () {

    const router = useRouter();
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });
    const [ view, setView ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const handleOnSubmit = async (e) => {
        
        e.preventDefault();

        try {
            
            if (!formData.email || !formData.password) return toast.warning('Alerta', { description: 'Completa los campos antes de continuar' })

                setLoading(true);

                await loginWithEmail(formData.email, formData.password);

                toast.success('Éxito', { description: 'Inicio de sesión exitóso' })

                router.replace('/dashboard')

        } catch (error) {
            console.error(error);
            toast.error('Error', { description: error.message })
        } finally {
            setLoading(false)
        }
    }

    return (

        <>

            <form className="w m-auto flex flex-col gap-4 md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "40%"}} onSubmit={handleOnSubmit}>
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl" aria-label="Ingresar a la Plataforma">Ingresar a la Plataforma</h1>
                    <p aria-label="Introduce tus credenciales para iniciar sesión y disfrutar de las herramientas que tenemos para tu colegio.">Introduce tus credenciales para iniciar sesión y disfrutar de las herramientas que tenemos para tu colegio.</p>
                </div>
                <div className="flex flex-col gap-4 p4">
                    <div className="w-full">
                        <label className="block text-sm mb2" htmlFor="email">Ingresa tu correo electrónico</label>
                        <div className="input input-radius-md h" style={{"--h": "50px"}}>
                            <input type="email" className="w-full h-full bg-transparent" name="email" id="email" placeholder="Ingresa tu correo electrónico" aria-label="Ingresa tu correo electrónico" onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} required />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb2" htmlFor="pword">Ingresa tu contraseña</label>
                        <div className="input input-radius-md h" style={{"--h": "50px"}}>
                            <input type={view ? 'text' : 'password'} className="w-full h-full bg-transparent" name="pword" id="pword" placeholder="Ingresa tu contraseña" aria-label="Ingresa tu contraseña" onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))} required />
                            <span className="absolute top right w h btn-center pointer" style={{"--top": "0", "--right": "0","--w": "50px", "--h": "50px"}} onClick={() => setView(!view)}>{view ? <IconEyeClosed/> : <IconEye/>}</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="btn btn-exp btn-primary btn-radius-full h" style={{"--h": "50px"}}>
                            {!loading ? (
                                <span className="btn-text-content">Iniciar Sesión</span>
                            ) : (
                                <span className="btn-spinner"></span>
                            )}
                        </button>
                    </div>
                </div>
            </form>        

        </>

    )

}