"use client";

import { db } from "@/libs/supabase";
import { createSchool } from "@/services/school.service";
import { IconPhoto } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page () {

    const router = useRouter();
    const [ formData, setFormData ] = useState({
        image: null,
        preview: null,
        name: ''
    })
    const [ loading, setLoading ] = useState(false);
    const [ userId, setUserId ] = useState(null);

    // Obtener usuario autenticado
    useEffect(() => {
        db.auth.getUser().then(({ data }) => {
            if (!data.user) return toast.error("Sesión inválida");
            setUserId(data.user.id);
        });
    }, []);

    // Limpiar preview
    useEffect(() => {
        return () => {
            if (formData.preview) URL.revokeObjectURL(formData.preview);
        };
    }, [formData.preview]);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validación básica
        if (!file.type.startsWith('image/')) {
            return alert('Solo se permiten imágenes');
        }

        const previewUrl = URL.createObjectURL(file);

        setFormData(prev => ({
            ...prev,
            image: file,
            preview: previewUrl
        }));
    };

    const handleOnSubmit = async (e) => {

        e.preventDefault();

        if (!formData.name || !formData.image) return toast.warning('Alerta', { description: 'Completa los campos necesarios para continuar.' })

            if (!userId) return toast.warning('Alerta', { description: 'Usuario no autenticado' })

        try {
                setLoading(true);

                await createSchool({name: formData.name, imageFile: formData.image, userId})

                toast.success('Éxito', { description: "Colegio configurado correctamente" });

                router.replace('/dashboard')

        } catch (error) {
            console.error(error);
            toast.error('Error', { description: error.message })
        } finally {
            setLoading(false);
        }

    }

    return (

        <>
        
            <form className="w m-auto flex flex-col gap-4 md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "40%"}} onSubmit={handleOnSubmit}>
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl" aria-label="Configurar Colegio">Configurar Colegio</h1>
                    <p aria-label="Configura los datos de tu colegio para hacer la experiencia más personalizada.">Configura los datos de tu colegio para hacer la experiencia más personalizada.</p>
                </div>
                <div className="flex flex-col gap-4 p4">
                    <div className="w-full">
                        <label className="center w h bg-surface rounded-full m-auto pointer hidden" style={{"--w": "180px", "--h": "180px"}} htmlFor="picture-school">
                            {formData.preview ? ( <img src={formData.preview} alt="Logo del colegio" className="w-full h-full object-cover" /> ) : ( <IconPhoto size={48} /> )}
                        </label>
                        <input type="file" id="picture-school" name="picture-school" accept="image/*" onChange={handleImageChange} hidden />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb2" htmlFor="nameSchool">Ingresa nombre completo del colegio</label>
                        <div className="input input-radius-md h" style={{"--h": "50px"}}>
                            <input type="text" className="w-full h-full bg-transparent" name="nameSchool" id="nameSchool" placeholder="Ingresa nombre completo del colegio" aria-label="Ingresa nombre completo del colegio" onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))} required />
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="btn btn-exp btn-primary btn-radius-full h" style={{"--h": "50px"}}>
                            {!loading ? ( <span className="btn-text-content">Configurar colegio</span> ) : ( <span className="btn-spinner"></span> )}
                        </button>
                    </div>
                </div>
            </form>
        
        </>

    )

}