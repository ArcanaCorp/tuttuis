import { msgDemo } from "@/helpers/texts";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage () {

    return (

        <>
        
            <header className={`w-full h`} style={{"--h": "60px"}}>
                <div className={`w h-full flex align-center justify-between m-auto md:w lg:w`} style={{"--w": "90%", "--w-md": "80%", "--w-lg": "60%"}}>
                    <Image src={'/Ttutis.svg'} alt="Logo de ttutis" width={100} height={45} priority/>
                    <Link href="/auth/login" className={`btn btn-md btn-primary btn-radius-full`}>Ingresar</Link>
                </div>
            </header>

            <main className="w-full">

                <section className="w-full h pv4 center" style={{"--h": "calc(100dvh - 60px)"}}>
                    <div className="w text-center m-auto flex flex-col align-center gap-4 md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "60%"}}>
                        <h1 className="text-6xl line-height-tight text-dark md:text-7xl" aria-label="El control escolar que avisa en tiempo real">El control escolar que avisa en tiempo real</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm line-height-relaxed md:text-md" aria-label="Reemplaza la libreta física por una digital y notifica a los padres por WhatsApp cuando el alumno ingresa, sale o tiene una incidencia.">Reemplaza la libreta física por una digital y notifica a los padres por WhatsApp cuando el alumno ingresa, sale o tiene una incidencia.</p>
                            <p className="text-sm line-height-relaxed md:text-md" aria-label="Más control para el colegio. Más tranquilidad para los padres.">Más control para el colegio. Más tranquilidad para los padres.</p>
                        </div>
                        <div className="flex flex-col gap-2 lg:flex-row">
                            <Link href={`https://wa.me/51966327426/?text=${msgDemo}`} target="_blank" className="btn btn-lg btn-primary btn-radius-full" aria-label="Solicitar demostración">Solicitar demostración</Link>
                            <Link href={`/login`} className="btn btn-lg btn-outline btn-radius-full hover-bg-primary" aria-label="Ingresar al sistema">Ingresar</Link>
                        </div>
                    </div>
                </section>

            </main>
        
        </>

    )

}