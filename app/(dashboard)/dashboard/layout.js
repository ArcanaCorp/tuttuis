import AuthGuard from "@/guards/auth.guard";
import Header from "@/layout/Header";
import Nav from "@/layout/Nav";

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#fec907",
};

export default function DashboardLayout ({ children }) {

    return (

        <>

                <div className="w-screen h-screen flex flex-col lg:flex-row-reverse hidden">

                    <main className="w h md:w md:h lg:w lg:h-screen" style={{"--w": "100dvw", "--h": "calc(100dvh - 60px)", "--h-md": "calc(100dvh - 60px)", "--w-lg": "calc(100dvw - 300px)"}}>
                        <Header/>
                        <div className="w-full pv2 lg:h scroll" style={{"--h-lg": "calc(100dvh - 60px)"}}>
                            {children}
                        </div>
                    </main>

                    <Nav/>
                
                </div>

        </>

    )

}