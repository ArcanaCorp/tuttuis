"use client";

import { useAuth } from "@/context/AuthContext";
import { txtLevels } from "@/helpers/texts";
import { IconEdit, IconQrcode, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function RowStudent ({ s }) {

    const { user } = useAuth();
    const [ face, setFace ] = useState(true)
    const [ modalQr, setModalQr ] = useState(false)
    
    console.log(s);

    return (

        <>

            <tr className="w-full h border-bottom" style={{"--h": "50px"}}>
                <td className="border-right text-center h" style={{"--h": "50px"}}>{s.first_name} {s.last_name}</td>
                <td className="border-right text-center h" style={{"--h": "50px"}}>{s.grade}</td>
                <td className="border-right text-center h" style={{"--h": "50px"}}>{s.section}</td>
                <td className="border-right text-center h" style={{"--h": "50px"}}>{txtLevels[s.education_level]}</td>
                <td className="w-full flex gap-2 align-center justify-center">
                    <button className="w h center bg-surface rounded-sm" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}} onClick={() => setModalQr(true)}><IconQrcode/></button>
                    <button className="w h center bg-surface rounded-sm" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}}><IconEdit/></button>
                    <button className="w h center bg-surface rounded-sm" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}}><IconTrash/></button>
                </td>
            </tr>

            {modalQr && (
                <div className="w-screen h-screen inset center absolute" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
                    <div className="w m-auto bg-white border-surface rounded-md lg:w" style={{"--w": "90%", "--w-lg": "30%"}}>
                        <div className="w-full flex align-center justify-between h ph4" style={{"--h": "50px"}}>
                            <h2>Tarjeta de {s.first_name} {s.last_name}</h2>
                            <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={() => setModalQr(false)}><IconX/></button>
                        </div>
                        <div className="w-full p4">
                            <div id="target" className="relative w-full h border-surface rounded-md hidden" style={{"--h": "250px"}}>
                                {face ? (
                                    <>
                                        <div className="absolute top left" style={{"--top": "10px", "--left": "10px"}}>
                                            <p className="text-lg">Colegio</p>
                                            <h2 className="text-3xl">{user?.school.name}</h2>
                                        </div>
                                        <div className="absolute w h top right" style={{"--w": "100px", "--h": "100px", "--top": "10px", "--right": "10px"}}>
                                            <img src={user?.school.logo_url} alt={`Colegio ${user?.school.name}`} className="w-full h-full" />
                                        </div>
                                        <p className="absolute bottom right text-4xl fw-bold" style={{"--bottom": "40px", "--right": "10px"}}>2026</p>
                                        <div className="absolute w-full bottom" style={{"--bottom": "10px"}}>
                                            <div className="w-full h" style={{"--h": "10px", backgroundColor: "#FF0000"}}></div>
                                            <div className="w-full h" style={{"--h": "10px", backgroundColor: "#ffffff"}}></div>
                                            <div className="w-full h" style={{"--h": "10px", backgroundColor: "#1100ff"}}></div>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <button onClick={() => setFace(!face)}>Rotar</button>
                        </div>
                    </div>
                </div>
            )}
        
        </>

    )

}