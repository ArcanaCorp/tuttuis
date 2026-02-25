"use client";

import { createStudent } from "@/services/students.service";
import { useState } from "react";

export default function StudentForm ({ onSaved }) {

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        grade: "",
        section: "",
        education_level: "primary"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(form);
        onSaved();
    };

    return (
        <>
        
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                <input type="text" className="input input-radius-sm" placeholder="Nombre" onChange={e => setForm({ ...form, first_name: e.target.value })} />
                <input type="text" className="input input-radius-sm" placeholder="Apellido" onChange={e => setForm({ ...form, last_name: e.target.value })} />
                <input type="text" className="input input-radius-sm" placeholder="Grado" onChange={e => setForm({ ...form, grade: e.target.value })} />
                <input type="text" className="input input-radius-sm" placeholder="Sección" onChange={e => setForm({ ...form, section: e.target.value })} />
                <select className="input input-radius-sm" onChange={e => setForm({ ...form, education_level: e.target.value })}>
                    <option value="initial">Inicial</option>
                    <option value="primary">Primaria</option>
                    <option value="secondary">Secundaria</option>
                    <option value="higher">Superior</option>
                    <option value="university">Universidad</option>
                </select>
                <button className="btn btn-primary h rounded-full" style={{"--h": "50px"}}>Guardar</button>
            </form>

        </>
    )
}