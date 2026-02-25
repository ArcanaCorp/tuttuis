'use client';

import { useAuth } from "@/context/AuthContext";
import { texts } from "@/helpers/texts";
import { IconBell, IconSearch } from "@tabler/icons-react";

export default function Header () {

    const { user } = useAuth();

    console.log(user);

    return (

        <header className="w-full bg-white border-bottom">

            <div className="w-full flex flex-col gap-2 pv2 lg:none">
                <div className="w m-auto flex align-center justify-between" style={{"--w": "90%"}}>
                    <div className="flex gap-2">
                        <div className="w h bg-surface rounded-full hidden" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}>
                            <img src={user?.school?.logo_url} className="w-full h-full" loading="eager" fetchPriority="auto" />
                        </div>
                        <div>
                            <h2 aria-label={user?.full_name}>{user?.full_name}</h2>
                            <p className="text-xs text-muted" aria-label={`${user?.school?.name} · ${texts[user?.role]}`}>{user?.school?.name} · {texts[user?.role]}</p>
                        </div>
                    </div>
                    {user?.role === 'admin' ? (
                        <button className="w h center bg-transparent" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}><IconBell/></button>
                    ) : (
                        <p className="text-xs bg-success-transparent text-success pv1 ph2 rounded-full">en línea</p>
                    )}
                </div>
                {user?.role === 'admin' && (
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <div role="search" className="relative w h bg-surface rounded-sm" style={{"--w": "100%", "--h": "45px"}}>
                            <span className="absolute center w h" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}><IconSearch/></span>
                            <input type="text" className="w-full h-full bg-transparent pl pr2" style={{"--pl": "45px"}} name="search" id="search" placeholder="Buscar por estudiantes, logs o eventos" aria-placeholder="Buscar por estudiantes, logs o eventos" />
                        </div>
                    </div>
                )}
            </div>

            <div className="none lg:flex w h m-auto bg-white" style={{"--w": "90%","--h": "60px"}}>
                <div className="w-full flex align-center justify-between">
                    <div role="search" className="relative w h bg-surface rounded-sm" style={{"--w": "60%", "--h": "45px"}}>
                        <span className="absolute center w h" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}><IconSearch/></span>
                        <input className="w-full h-full bg-transparent pl pr2" style={{"--pl": "45px"}} placeholder="Buscar por estudiantes, logs o eventos" aria-placeholder="Buscar por estudiantes, logs o eventos" />
                    </div>
                    <button className="w h center bg-transparent" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}><IconBell/></button>
                </div>
                <div className="w flex align-center justify-end gap-2" style={{"--w": "200px"}}>
                    <div className="flex flex-col">
                        <h3 aria-label={user?.full_name}>{user?.full_name}</h3>
                        <p className="text-xs text-muted" aria-label={texts[user?.role]}>{texts[user?.role]}</p>
                    </div>
                    <div className="w h bg-surface rounded-full hidden" style={{"--w": "45px", "--mnw": "45px", "--h": "45px"}}>
                        <img src={user?.school?.logo_url} className="w-full h-full" loading="eager" fetchPriority="auto" />
                    </div>
                </div>
            </div>

        </header>

    )

}