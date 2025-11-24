import { useUser } from "@/context/UserContext";
import Header from "../../layout/header";
import { IconBubble, IconInfoCircle, IconKey, IconLogout2, IconPhone, IconUserCircle } from "@tabler/icons-react";
import './styles/view.css'

export default function AccountView () {

    const { logout } = useUser();

    return (

        <>
        
            <Header/>

            <main className="__main_account_view">

                <section className="__section_opt">
                    <h4>Cuenta</h4>
                    <ul>
                        <li>
                            <button><IconUserCircle/> Cuenta</button>
                        </li>
                        <li>
                            <button><IconPhone/> Teléfono</button>
                        </li>
                        <li>
                            <button><IconKey/> Contraseña</button>
                        </li>
                    </ul>
                </section>

                <section className="__section_opt">
                    <h4>Ayuda e información</h4>
                    <ul>
                        <li>
                            <button><IconLogout2/> Informar de un problema</button>
                        </li>
                        <li>
                            <button><IconBubble/> Ayuda</button>
                        </li>
                        <li>
                            <button><IconInfoCircle/> Términos y condiciones</button>
                        </li>
                    </ul>
                </section>

                <section className="__section_opt">
                    <h4>Cuenta</h4>
                    <ul>
                        <li>
                            <button className="__btn_logout" onClick={() => logout()}><IconLogout2/> Cerrar Sesión</button>
                        </li>
                    </ul>
                </section>

            </main>

        </>

    )
}