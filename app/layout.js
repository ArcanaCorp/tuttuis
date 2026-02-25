import { Poppins } from "next/font/google"
import '@/styles/theme.css'
import './global.css'
import { Toaster } from "sonner"
import { AuthProvider } from "@/context/AuthContext"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins-sans',
})

export const metadata = {
    title: {
        default: "ttutis | Control escolar en tiempo real",
        template: "%s | ttutis"
    },
    description: "ttutis es una app escolar que reemplaza la libreta física y notifica en tiempo real a los padres vía WhatsApp sobre ingresos, salidas y eventos escolares.",
    applicationName: "ttutis",
    keywords: [
        "control escolar",
        "libreta digital",
        "asistencia escolar",
        "notificaciones escolares",
        "app para colegios",
        "whatsapp colegios",
        "control de alumnos"
    ],
    authors: [{ name: "ttutis" }],
    creator: "ttutis",
    publisher: "ttutis",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://ttutis.com",
        siteName: "ttutis",
        title: "ttutis | Control escolar en tiempo real",
        description: "Libreta digital con notificaciones por WhatsApp para padres. Más control, menos angustia.",
        images: [
            {
                url: "https://ttutis.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "ttutis - App de control escolar"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ttutis | Control escolar en tiempo real",
        description: "Libreta digital escolar con notificaciones instantáneas por WhatsApp.",
        images: ["https://ttutis.com/og-image.png"]
    }
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#fec907",
};

export default function RootLayout ({ children }) {

    return (

        <>

            
        
            <html lang="en" className={`${poppins.variable}`}>
                <body>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </body>
            </html>
        
            <Toaster position="top-center" duration={4000} closeButton={true} />

        </>

    )

}