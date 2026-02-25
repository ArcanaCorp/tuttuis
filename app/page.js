import { landingText } from "@/content/landing";
import { IconBrandFacebook, IconBrandTiktok, IconCheck, IconCircleCheckFilled, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    
    return (
        <>
            
            <header className="sticky inset w-full h bg-white" style={{ "--h": "60px" }}>
                <div className="w h-full flex align-center justify-between m-auto md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "80%" }}>
                    <Image src={"/Ttutis.svg"} alt="Logo de ttutis" width={100} height={45} priority/>
                    <Link href="/auth/login" className="btn btn-md btn-primary btn-radius-full">Ingresar</Link>
                </div>
            </header>

            <main className="w-full">
                
                <section className="w-full h pv10 center bg-white lg:h" style={{ "--h-lg": "calc(100dvh - 60px)" }}>
                    <div className="w text-center m-auto flex flex-col align-center gap-8 lg:gap-4 md:w lg:w lg:flex-row" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "80%"}}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-left text-6xl line-height-tight text-dark md:text-7xl" aria-label={landingText.hero.title} dangerouslySetInnerHTML={{__html: landingText.hero.title}}></h1>
                            <div className="flex flex-col gap-2">
                                <p className="text-left text-sm line-height-relaxed md:text-md" aria-label={landingText.hero.subtitle}>{landingText.hero.subtitle}</p>
                            </div>
                            <div className="flex flex-row align-center justify-start gap-2">
                                <Link href={landingText.hero.cta.url} target="_blank" className="btn btn-lg btn-primary btn-radius-full" aria-label={landingText.hero.cta.txt}>{landingText.hero.cta.txt}</Link>
                                <Link href={landingText.hero.alt.url} className="btn btn-lg btn-outline btn-radius-full hover-bg-primary" aria-label={landingText.hero.alt.txt}>{landingText.hero.alt.txt}</Link>
                            </div>
                            <div className="flex flex-row align-center justify-start gap-2">
                                {landingText.hero.extra.map((ext, idx) => (
                                    <span key={idx} className="flex algin-center gap-1 text-muted"><IconCircleCheckFilled size={16} color="#066701"/> {ext}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w h lg:w lg:h rounded-md hidden" style={{"--w": "312px", "--h": "312px", "--mnw": "312px", "--mnh": "312px", "--w-lg": "512px", "--h-lg": "512px", "--mnw-lg": "512px", "--mnh-lg": "512px"}}>
                            <img src="/bg-hero.png" alt={landingText.hero.title} draggable={false} loading="eager" className="w h lg:w lg:h" style={{"--w": "312px", "--h": "312px", "--w-lg": "512px", "--h-lg": "512px"}}/>
                        </div>
                    </div>
                </section>

                <section className="w-full pv10 bg-light">
                    <div className="w m-auto md:w lg:w" style={{ "--w": "90%", "--w-md": "80%", "--w-lg": "80%"}}>
                        <div className="text-center mb8">
                            <h2 className="text-left text-6xl md:text-7xl lg:w" style={{"--mxw-lg": "60%"}} dangerouslySetInnerHTML={{__html: landingText.problems.title}}></h2>
                            <p className="text-left text-sm md:text-md mt2">{landingText.problems.subtitle}</p>
                        </div>
                        <ul className="flex flex-col gap-4 text-sm md:text-md lg:flex-row lg:flex-wrap lg:gap-6">
                            {landingText.problems.items.map((p, idx) => (
                                <li key={idx} className="flex flex-row gap-2 align-center lg:w ph4 pv2" style={{"--w-lg": "calc((100% / 2) - 5%)"}}>
                                    <div className="w h bg-danger-transparent rounded-full center" style={{"--w": "50px", "--mnw": "50px", "--h": "50px"}}><IconX color="#FF0000" /></div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-nowrap">{p.tit}</h3>
                                        <p className="text-muted text-sm">{p.txt}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="w-full pv10 bg-white">
                    <div className="w m-auto md:w lg:w" style={{ "--w": "90%", "--w-md": "80%", "--w-lg": "80%" }}>
                        <div className="text-center mb8">
                            <h2 className="text-left text-6xl md:text-7xl lg:w" style={{"--mxw-lg": "60%"}} dangerouslySetInnerHTML={{__html: landingText.pros.title}}></h2>
                            <p className="text-left text-sm md:text-md mt2" aria-label={landingText.pros.subtitle}>{landingText.pros.subtitle}</p>
                        </div>
                        <div className="grid gap-4 grid-cols md:grid-cols" style={{"--grid-cols": "repeat(1, 1fr)", "--grid-cols-md": "repeat(4, 1fr)"}}>
                            {landingText.pros.items.map((pro, idx) => (
                                <div key={idx} className="w-full border-surface rounded-md p4 flex flex-col gap-2">
                                    <span className="center w h bg-surface rounded-sm" style={{"--w": "40px", "--h": "40px"}}>{pro.ico}</span>
                                    <h3 className="text-xl font-semibold" aria-label={pro.tit}>{pro.tit}</h3>
                                    <p className="text-sm" aria-label={pro.txt}>{pro.txt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full pv10">
                    <div className="w m-auto md:w lg:w" style={{ "--w": "90%", "--w-md": "80%", "--w-lg": "80%" }}>
                        <div className="text-center mb4">
                            <h2 className="text-left text-6xl md:text-7xl lg:w" style={{"--mxw-lg": "60%"}} dangerouslySetInnerHTML={{__html: landingText.howWork.title}}></h2>
                            <p className="text-left text-sm md:text-md mt2" aria-label={landingText.howWork.subtitle}>{landingText.howWork.subtitle}</p>
                        </div>
                        <ol className="flex flex-col gap-3 text-sm md:text-md lg:flex-row">
                            {landingText.howWork.items.map((b) => (
                                <li key={b.num} className="w-full flex flex-col align-center justify-center gap-3 text-center pv4 ph2 bg-white rounded-md">
                                    <span className="center w h bg-primary text-dark rounded-full" style={{"--w": "40px", "--h": "40px"}}>{b.num}</span>
                                    <h3>{b.tit}</h3>
                                    <span className="text-muted text-sm">{b.txt}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="w-full pv10 bg-white text-dark text-center">
                    <div className="w m-auto flex flex-col align-center gap-8 md:w lg:w lg:flex-row lg:justify-between" style={{ "--w": "90%", "--w-md": "80%", "--w-lg": "80%"}}>
                        <div className="flex flex-col gap-4 justify-start align-start">
                            <h2 className="text-left text-6xl md:text-7xl lg:w" style={{"--mxw": "60%"}} aria-label={landingText.modern.title} dangerouslySetInnerHTML={{__html: landingText.modern.title}}></h2>
                            <p className="text-left text-sm md:text-md" aria-label={landingText.modern.subtitle}>{landingText.modern.subtitle}</p>
                            <ul className="w-full flex flex-col gap-4">
                                {landingText.modern.items.map((itm, idx) => (
                                    <li key={idx} className="w-full flex gap-4 pv3 ph2">
                                        <span className="center w h rounded-full bg-yellow-transparent text-primary" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}}><IconCheck/></span>
                                        <div className="flex flex-col gap-1 text-left">
                                            <h3>{itm.tit}</h3>
                                            <p>{itm.txt}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link href={landingText.modern.cta.url} target="_blank" className="btn btn-lg btn-primary btn-radius-full" aria-label={landingText.modern.cta.txt}>{landingText.modern.cta.txt}</Link>
                        </div>
                        <div className="w h bg-surface lg:w lg:h rounded-md hidden" style={{"--w": "312px", "--h": "312px", "--mnw": "312px", "--mnh": "312px", "--w-lg": "512px", "--h-lg": "512px", "--mnw-lg": "512px", "--mnh-lg": "512px"}}></div>
                    </div>
                </section>
            
            </main>

            <footer className="w-full pv10 bg-dark text-center">
                <div className="w m-auto md:w lg:W" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "80%"}}>
                    <div className="w-full flex flex-col gap-8 text-muted lg:flex-row lg:gap-4">
                        <div className="w-full flex flex-col gap-2 align-center lg:align-start">
                            <img src="/Ttutis.svg" className="h" style={{"--h": "40px"}} />
                            <p className="lg:text-left">El estándar moderno para el control de asistencia educativa</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-white mb4 text-lg">Producto</h3>
                            <ul className="flex flex-col gap-4">
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a Características">Características</Link>
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a WhatsApp API">WhatsApp API</Link>
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a Precios">Precios</Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h3 className="text-white mb4 text-lg">Empresa</h3>
                            <ul className="flex flex-col gap-4">
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a Características">Acerca de</Link>
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a WhatsApp API">Política de Privacidad</Link>
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a Precios">Contacto</Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h3 className="text-white mb4 text-lg">Contacto</h3>
                            <ul className="flex flex-col gap-4">
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a Características">noreply@ttutis.com</Link>
                                <Link href={'/'} className="text-md text-muted" aria-label="Ir a WhatsApp API">+51 966 327 426</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h bg-muted mv5" style={{"--h": ".5px"}}></div>
                    <div className="w-full flex flex-col align-center justify-between lg:flex-row">
                        <p className="text-muted text-sm">ttutis – Developed by ARCANA CORP. All rights reserved © {new Date().getFullYear()}.</p>
                        <ul className="flex flex-row gap-2">
                            <Link href={`https://fb.com`} className="center w h text-muted" style={{"--w": "40px", "--h": "40px"}}><IconBrandFacebook/></Link>
                            <Link href={`https://fb.com`} className="center w h text-muted" style={{"--w": "40px", "--h": "40px"}}><IconBrandTiktok/></Link>
                        </ul>
                    </div>
                </div>
            </footer>
            
        </>
    );
}