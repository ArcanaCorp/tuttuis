"use client";

import { useEffect, useState } from "react";
import { getStudents } from "@/services/students.service";
import { IconEdit, IconPlus, IconQrcode, IconTrash, IconUpload, IconX } from "@tabler/icons-react";
import StudentForm from "@/components/students/StudentForm";
import BulkUpload from "@/components/students/BulkUpload";
import { txtLevels } from "@/helpers/texts";
import RowStudent from "@/components/students/RowStudent";

export default function Page () {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState(''); // 'single' | 'bulk'
    const [modal, setModal] = useState({
        view: false,
        type: '',
        id: ''
    })

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        setLoading(true);
        const data = await getStudents();
        setStudents(data || []);
        setLoading(false);
    };

    if (loading) return <p>Cargando estudiantes…</p>;

    return (
        <>
        
            <section className="w m-auto lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>
                
                <div className="w-full flex align-center justify-between">
                    <div>
                        <h2 className="text-3xl lg:text-4xl">Estudiantes</h2>
                        <p className="text-xs text-muted">Mira el listado de tus alumnos registrados y las acciones a realizar.</p>
                    </div>
                    <div className="flex gap-2 mb4">
                        <button className="btn btn-primary btn-md rounded-sm" onClick={() => setMode("single")}><IconPlus size={16} /> Agregar alumno</button>
                        <button className="btn btn-outline btn-md rounded-sm" onClick={() => setMode("bulk")}><IconUpload size={16} /> Carga masiva</button>
                    </div>
                </div>

                <table className="w-full mt6 bg-white border-surface rounded-md">
                    <thead className="w-full h " style={{"--h": "50px"}}>
                        <tr className="border-bottom">
                            <th className="border-right">Nombre</th>
                            <th className="border-right">Grado</th>
                            <th className="border-right">Sección</th>
                            <th className="border-right">Nivel</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center pv10">
                                    <h2 className="text-xl mb2">
                                        No tienes estudiantes registrados
                                    </h2>
                                    <p className="mb4 opacity-70">
                                        Empieza cargando alumnos para usar el sistema
                                    </p>

                                    <div className="flex justify-center gap-2">
                                        <button className="btn btn-primary btn-md rounded-sm" onClick={() => setMode("single")}><IconPlus size={16} /> Agregar alumno</button>
                                        <button className="btn btn-outline btn-md rounded-sm" onClick={() => setMode("bulk")}><IconUpload size={16} /> Carga masiva</button>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            students.map((s) => (
                                <RowStudent key={s.id} s={s} />
                            ))
                        )}
                    </tbody>
                </table>

            </section>
        
            {mode !== '' && (
                <div className="w-screen h-screen inset center absolute" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
                    <div className="w m-auto bg-white border-surface rounded-md lg:w" style={{"--w": "90%", "--w-lg": "40%"}}>
                        <div className="w-full flex align-center justify-between h ph4" style={{"--h": "50px"}}>
                            <h2>{mode === 'single' ? 'Subir registro único' : 'Subida masiva'}</h2>
                            <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={() => setMode('')}><IconX/></button>
                        </div>
                        <div className="w-full p4">
                            {mode === 'single' ? <StudentForm/> : <BulkUpload/> }
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}