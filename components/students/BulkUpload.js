"use client";

import { useState } from "react";
import { uploadStudentsBulk } from "@/services/students.service";
import { IconUpload } from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

const VALID_LEVELS = [
    "initial",
    "primary",
    "secondary",
    "higher",
    "university"
];

export default function BulkUpload({ onFinished }) {

    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setError(null);
        setLoading(true);

        try {
            const text = await file.text();

            const rows = text
                .split("\n")
                .map(r => r.trim())
                .filter(Boolean);

            if (rows.length <= 1) {
                throw new Error("El archivo CSV no contiene registros");
            }

            // quitamos el header
            const dataRows = rows.slice(1);

            const students = dataRows.map((row, index) => {
                const cols = row.split(",");

                if (cols.length < 6) {
                    throw new Error(`Fila ${index + 2}: columnas incompletas`);
                }

                const [
                    first_name,
                    last_name,
                    document_number,
                    grade,
                    section,
                    education_level
                ] = cols.map(c => c.trim());

                if (!first_name || !last_name) {
                    throw new Error(`Fila ${index + 2}: nombre o apellido vacío`);
                }

                if (!VALID_LEVELS.includes(education_level)) {
                    throw new Error(
                        `Fila ${index + 2}: nivel educativo inválido (${education_level})`
                    );
                }

                return {
                    school_id: user?.school_id,
                    first_name,
                    last_name,
                    document_number,
                    grade,
                    section,
                    education_level
                };
            });

            await uploadStudentsBulk(students);

            onFinished?.();

        } catch (err) {
            console.error(err);
            setError(err.message || "Error al procesar el archivo");
        } finally {
            setLoading(false);
            e.target.value = ""; // reset input
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-white p4 border rounded-md">

            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">Carga masiva de estudiantes</h3>
                <p className="text-sm text-muted">
                    Sube un archivo CSV con los alumnos de tu institución.
                </p>
            </div>

            <input
                type="file"
                accept=".csv"
                onChange={handleFile}
                disabled={loading}
                className="input input-radius-sm pointer"
            />

            {error && (
                <div className="text-red-600 text-sm bg-red-50 p2 rounded">
                    {error}
                </div>
            )}

            <button className="btn btn-primary h btn-radius-full" style={{"--h": "50px"}} disabled={loading}>
                <IconUpload size={16} />
                {loading ? "Importando alumnos…" : "Subir archivo CSV"}
            </button>

        </div>
    );
}