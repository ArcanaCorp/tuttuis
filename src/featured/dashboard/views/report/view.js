import ReportCard from './components/card';
import './styles/view.css'
export default function ReportView () {

    const reports = [
        {
            id: 1,
            fullname: "María Gonzales López",
            grade: "5to",
            section: "A",
            fecha: "2025-11-14",
            hora: "08:32",
            incidencia: "Llegó tarde al ingreso."
        },
        {
            id: 2,
            fullname: "Juan Carlos Rivas",
            grade: "3ro",
            section: "B",
            fecha: "2025-11-14",
            hora: "10:15",
            incidencia: "No portaba el uniforme completo."
        },
        {
            id: 3,
            fullname: "Ana María Huamán",
            grade: "2do",
            section: "C",
            fecha: "2025-11-13",
            hora: "12:47",
            incidencia: "Interrupción reiterada en clase."
        },
        {
            id: 4,
            fullname: "Luis Alberto Quispe",
            grade: "4to",
            section: "B",
            fecha: "2025-11-13",
            hora: "07:55",
            incidencia: "No trajo materiales para el curso."
        },
        {
            id: 5,
            fullname: "Valeria Chávez Ramos",
            grade: "1ro",
            section: "A",
            fecha: "2025-11-12",
            hora: "09:03",
            incidencia: "Discusión con un compañero."
        }
    ];

    return (

        <>
        
            <header className='__header_report_view'>
                <div className='__header_box'>
                    <h1>Reportes</h1>
                    <button className='__btn_new'>Nuevo reporte</button>
                </div>
                <ul className='__filters'>
                    <li className={`__filter`}>Hoy</li>
                    <li className={`__filter`}>Ayer</li>
                    <li className={`__filter`}>Por fecha</li>
                    <li className={`__filter`}>Por grado</li>
                    <li className={`__filter`}>Por sección</li>
                </ul>
            </header>

            <main className='__main_report_view'>
                {reports.length > 0 ? (
                    <ul className='__report_lst'>
                        {reports.map((report) => (
                            <ReportCard key={report.id} info={report} />
                        ))}
                    </ul>
                ) : (
                    <div className='__report_empty'>
                        <p>No hay reportes aún</p>
                    </div>
                )}
            </main>

            <div></div>

        </>

    )

}