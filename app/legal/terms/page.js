import Link from "next/link";

export default function Page () {

    return (

        <>

            <section className="w m-auto bg-white p4 rounded-md lg:w mt4 mb4" style={{"--w": "90%", "--w-lg": "60%"}}>
                
                <Link href={'/'}>Volver a la página principal</Link>
                <h1>Términos y Condiciones de Uso</h1>
                <p className="text-muted">Última actualización: 2026</p>
                <p className="mb8">
                    Bienvenido a <strong>ttutis</strong>, una plataforma digital desarrollada por 
                    <strong>ARCANA CORP (RUC: 20612123901)</strong> que permite a instituciones educativas 
                    gestionar el control de asistencia escolar y comunicación con padres de familia en tiempo real.
                </p>

                <article className="mb6">
                    <h2>1. Aceptación de los términos</h2>
                    <p>
                        Al utilizar la plataforma ttutis, el usuario acepta cumplir con los presentes 
                        Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, 
                        debe abstenerse de utilizar el servicio.
                    </p>
                </article>

                <article className="mb6">
                    <h2>2. Descripción del servicio</h2>
                    <p>ttutis es un sistema digital que permite a las instituciones educativas:</p>
                    <ul className="flex flex-col gap-2 pl4 mv4">
                        <li>Registrar asistencia de estudiantes mediante códigos QR</li>
                        <li>Gestionar información de alumnos</li>
                        <li>Registrar eventos escolares</li>
                        <li>Notificar automáticamente a padres o tutores mediante WhatsApp u otros canales</li>
                        <li>Generar historial y reportes institucionales</li>
                    </ul>
                </article>

                <article className="mb6">
                    <h2>3. Usuarios del sistema</h2>
                    <p>La plataforma puede ser utilizada por:</p>
                    <ul className="flex flex-col gap-2 pl4 mv4">
                        <li>Administradores de instituciones educativas</li>
                        <li>Personal autorizado del colegio</li>
                        <li>Padres o tutores legales como receptores de notificaciones</li>
                    </ul>
                    <p>La institución educativa es responsable de autorizar a su personal para el uso del sistema.</p>
                </article>

                <article className="mb6">
                    <h2>4. Responsabilidad de la institución educativa</h2>
                    <p>La institución que utilice ttutis es responsable de:</p>
                    <ul className="flex flex-col gap-2 pl4 mv4">
                        <li>La veracidad de los datos ingresados</li>
                        <li>Contar con autorización de los padres o tutores para registrar datos de estudiantes</li>
                        <li>El uso adecuado del sistema por parte de su personal</li>
                    </ul>
                </article>

                <article className="mb6">
                    <h2>5. Uso adecuado del servicio</h2>
                    <p>Los usuarios se comprometen a no:</p>
                    <ul className="flex flex-col gap-2 pl4 mv4">
                        <li>Utilizar la plataforma para actividades ilegales</li>
                        <li>Intentar vulnerar la seguridad del sistema</li>
                        <li>Acceder a información que no les corresponde</li>
                    </ul>
                </article>

                <article className="mb6">
                    <h2>6. Disponibilidad del servicio</h2>
                    <p>
                        ARCANA CORP se esfuerza por mantener el servicio disponible y funcional, 
                        sin embargo no garantiza disponibilidad ininterrumpida del sistema debido a 
                        mantenimiento técnico, fallos de terceros o eventos fuera de control razonable.
                    </p>
                </article>

                <article className="mb6">
                    <h2>7. Servicios de terceros</h2>
                    <p>
                        La plataforma puede integrarse con servicios externos como proveedores de 
                        mensajería (por ejemplo WhatsApp). El funcionamiento de dichos servicios 
                        depende de las políticas y disponibilidad de sus respectivos proveedores.
                    </p>
                </article>

                <article className="mb6">
                    <h2>8. Propiedad intelectual</h2>
                    <p>
                        El software ttutis, su diseño, funcionalidades y código son propiedad de 
                        <strong>ARCANA CORP</strong>. El uso del sistema no otorga ningún derecho 
                        de propiedad sobre el software.
                    </p>
                </article>

                <article className="mb6">
                    <h2>9. Suspensión del servicio</h2>
                    <p>
                        ARCANA CORP se reserva el derecho de suspender o cancelar el acceso al sistema 
                        si detecta uso indebido, incumplimiento de los términos o actividades que 
                        comprometan la seguridad de la plataforma.
                    </p>
                </article>

                <article className="mb6">
                    <h2>10. Modificaciones</h2>
                    <p>
                        ARCANA CORP puede modificar los presentes términos cuando sea necesario. 
                        Las actualizaciones serán publicadas en esta misma página.
                    </p>
                </article>

                <article className="mb6">
                    <h2>11. Legislación aplicable</h2>
                    <p>Estos términos se rigen por las leyes de la República del Perú.</p>
                </article>

                <article className="mb6">
                    <h2>12. Contacto</h2>
                    <p>Para consultas relacionadas con estos términos puede contactar a:</p>
                    <p>
                        <strong>ARCANA CORP</strong><br/>
                        RUC: 20612123901<br/>
                        Correo: contacto@ttutis.com
                    </p>
                </article>

                <Link href={'/legal/policy'}>Política de Privacidad</Link>

            </section>
        
        </>

    )

}