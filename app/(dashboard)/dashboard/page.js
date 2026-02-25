"use client";

import { useAuth } from "@/context/AuthContext";
import { getAttendanceDashboard } from "@/services/dashboard.service";
import { IconAlertTriangleFilled, IconCircleCheck, IconClock, IconUserPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Page () {

    const { school } = useAuth();
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!school?.id) return;

        getAttendanceDashboard(school.id)
            .then(setStats)
            .catch(console.error);
    }, [school])

    if (!stats) {
        return (
            <div className="w-full h-40 center">
                <span className="opacity-60 text-sm">
                    Cargando panel…
                </span>
            </div>
        );
    }

    return (

        <>

            <section className="w m-auto lg:w" style={{"--w": "90%", "--w-lg": "90%"}}>

                <h2>Panel de Asistencia</h2>
                <p className="mb6">Mira en tiempo real la asistencia de tus alumnos.</p>

                <ul className="w-full grid grid-cols gap-2 lg:grid-cols" style={{"--grid-cols": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(4, 1fr)"}}>
                    <li className="bg-white border-surface rounded-md w-full p3 flex flex-col gap-2">
                        <div className="w h center bg-surface rounded-md" style={{"--w": "40px", "--h": "40px", "--mnw": "40px", "--mnh": "40px"}}><IconUserPlus/></div>
                        <h3 className="text-4xl">{stats.totalStudents}</h3>
                        <p>Total de estudiantes</p>
                    </li>
                    <li className="bg-white border-surface rounded-md w-full p3 flex flex-col gap-2">
                        <div className="w h center bg-surface rounded-md" style={{"--w": "40px", "--h": "40px", "--mnw": "40px", "--mnh": "40px"}}><IconCircleCheck/></div>
                        <h3 className="text-4xl">{stats.onTime}</h3>
                        <p>Puntuales hoy</p>
                    </li>
                    <li className="bg-white border-surface rounded-md w-full p3 flex flex-col gap-2">
                        <div className="w h center bg-surface rounded-md" style={{"--w": "40px", "--h": "40px", "--mnw": "40px", "--mnh": "40px"}}><IconClock/></div>
                        <h3 className="text-4xl">{stats.late}</h3>
                        <p>Tardanzas</p>
                    </li>
                    <li className="bg-white border-surface rounded-md w-full p3 flex flex-col gap-2">
                        <div className="w h center bg-surface rounded-md" style={{"--w": "40px", "--h": "40px", "--mnw": "40px", "--mnh": "40px"}}><IconAlertTriangleFilled/></div>
                        <h3 className="text-4xl">{stats.incidents}</h3>
                        <p>Total de incidencias</p>
                    </li>
                </ul>

            </section>

        </>

    )

}