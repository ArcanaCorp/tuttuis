import AuthGuard from "@/guards/auth.guard";
import { msgDemo } from "@/helpers/texts";
import Image from "next/image";
import Link from "next/link";

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#fec907",
};

export default function SchoolLayout ({ children }) {
    return (
        
        <>

            <AuthGuard>

                <header className={`w-full h`} style={{"--h": "60px"}}>
                    <div className={`w h-full flex align-center justify-between m-auto md:w lg:w`} style={{"--w": "90%", "--w-md": "80%", "--w-lg": "60%"}}>
                        <Image src={'/Ttutis.svg'} alt="Logo de ttutis" width={100} height={45} priority/>
                        <Link href={`https://wa.me/51966327426/?text=${msgDemo}`} target="_blank" className={`btn btn-md btn-primary btn-radius-full`}>Solicitar demo</Link>
                    </div>
                </header>
            
                <main className="w-full">
                    <section className="w-full h pv4 center" style={{"--h": "calc(100dvh - 60px)"}}>
                        {children}
                    </section>
                </main>
            
            </AuthGuard>
        
        </>

    )
}