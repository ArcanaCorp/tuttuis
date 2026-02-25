"use client";

import { useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { toast } from "sonner";
import { createAccount } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function Page () {

    const router = useRouter();

    const [ formData, setFormData ] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
    })
    const [ view, setView ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            
            if (!formData.fullname || !formData.phone || !formData.email || !formData.password) return toast.warning('Alerta', { description: 'Antes de continuar rellena todos los campos necesarios.' })

                setLoading(true);

                const data = await createAccount(formData);

                if (!data.ok) return toast.error('Error', { description: data.message })

                toast.success('Cuenta creada', {description: 'Ahora crea el colegio'});
                router.replace('/onboarding/school')

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl" aria-label="Crear cuenta">Crear cuenta</h1>
                    <p aria-label="Crea tu cuenta para poder disfrutar y acceder a herramientas increíbles para tu colegio y tus alumnos.">Crea tu cuenta para poder disfrutar y acceder a herramientas increíbles para tu colegio y tus alumnos.</p>
                </div>
                <div className="flex flex-col gap-4 p4">
                    <div className="w-full">
                        <label className="block text-sm mb2" htmlFor="fullname">Ingresa tu nombre completo</label>
                        <div className="input input-radius-md h" style={{"--h": "50px"}}>
                            <input type="text" className="w-full h-full bg-transparent" name="fullname" id="fullname" placeholder="Ingresa tu nombre completo" aria-label="Ingresa tu nombre completo" onChange={(e) => setFormData(prev => ({...prev, fullname: e.target.value}))} required />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 lg:flex-row">
                        <div className="w-full">
                            <label className="block text-sm mb2" htmlFor="phone">Ingresa tu número de teléfono</label>
                            <div className="input input-radius-md h" style={{"--h": "50px"}}>
                                <input type="text" inputMode="numeric" className="w-full h-full bg-transparent" name="phone" id="phone" placeholder="Ingresa tu número de teléfono" aria-label="Ingresa tu número de teléfono" onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))} required />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm mb2" htmlFor="email">Ingresa tu correo electrónico</label>
                            <div className="input input-radius-md h" style={{"--h": "50px"}}>
                                <input type="email" className="w-full h-full bg-transparent" name="email" id="email" placeholder="Ingresa tu correo electrónico" aria-label="Ingresa tu correo electrónico" onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} required />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb2" htmlFor="password">Ingresa tu contraseña</label>
                        <div className="input input-radius-md h" style={{"--h": "50px"}}>
                            <input type={view ? 'text' : 'password'} className="w-full h-full bg-transparent" name="password" id="password" placeholder="Ingresa tu contraseña" aria-label="Ingresa tu contraseña" onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))} required />
                            <span className="absolute top right w h btn-center pointer" style={{"--top": "0", "--right": "0","--w": "50px", "--h": "50px"}} onClick={() => setView(!view)}>{view ? <IconEyeClosed/> : <IconEye/>}</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="btn btn-exp btn-primary btn-radius-full h" style={{"--h": "50px"}}>
                            {!loading ? ( <span className="btn-text-content">Crear cuenta</span> ) : ( <span className="btn-spinner"></span> )}
                        </button>
                    </div>
                </div>
            </form>
        
        </>

    )

}