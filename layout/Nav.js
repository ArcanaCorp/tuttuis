'use client';

import { useAuth } from "@/context/AuthContext";
import { texts } from "@/helpers/texts";
import { adminRoutes, auxiliaryRoutes, navs } from "@/libs/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav () {

    const location = usePathname();
    const { user } = useAuth();

    return (

        <nav className="w-screen h bg-white md:w lg:w lg:h lg:p4" style={{"--h": "60px", "--w-lg": "300px", "--h-lg": "100dvh"}}>
            <div className="none lg:flex p2 mb4 gap-2 border-primary rounded-md">
                <div className="w h bg-surface rounded-md hidden" style={{"--w": "50px", "--h": "50px"}}>
                    <img src={user?.school.logo_url} className="w-full h-full" alt={`Institución Educativa ${user?.school.name}`} />
                </div>
                <div className="flex flex-col gap2">
                    <h2>{user?.school.name}</h2>
                    <p>{texts[user?.role]}</p>
                </div>
            </div>
            <ul className="flex h-full lg:flex-col lg:gap-4">
                {user?.role === 'admin' ? (
                    adminRoutes.map((nav) => (
                        <li key={nav.url} className="w-full h-full lg:h" style={{"--h-lg": "50px"}}>
                            <Link className={`w-full h-full ${location === nav.url ? 'text-primary' : 'text-dark'} flex justify-center align-center lg:flex-row lg:gap-2 lg:align-center lg:justify-start lg:h lg:ph2`} style={{"--h-lg": "50px"}} href={nav.url} aria-label={`Ir a la opción de ${nav.txt}`}>
                                {nav.ico} <span className="none lg:block">{nav.txt}</span>
                            </Link>
                        </li>
                    ))
                ) : (
                    auxiliaryRoutes.map((nav) => (
                        <li key={nav.url} className="w-full h-full lg:h" style={{"--h-lg": "50px"}}>
                            <Link className={`w-full h-full ${location === nav.url ? 'text-primary' : 'text-dark'} flex justify-center align-center lg:flex-row lg:gap-2 lg:align-center lg:justify-start lg:h lg:ph2`} style={{"--h-lg": "50px"}} href={nav.url} aria-label={`Ir a la opción de ${nav.txt}`}>
                                {nav.ico} <span className="none lg:block">{nav.txt}</span>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </nav>

    )

}