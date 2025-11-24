import { IconEye, IconEyeClosed, IconMail } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { login } from "./services/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginPage () {

    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ viewPwd, setViewPwd ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validDomain = /@[\w-]+\.ttutis\.com$/;

        if (!emailRegex.test(value)) {
            setEmailError("El formato del correo no es válido.");
        } else if (!validDomain.test(value)) {
            setEmailError("El correo debe pertenecer al dominio @algo.ttutis.com");
        } else {
            setEmailError("");
        }
    };

    const handlePwdChange = (e) => {
        const value = e.target.value;
        setPwd(value);
        if (value.length < 6) {
            setPwdError("La contraseña debe tener al menos 6 caracteres.");
        } else {
            setPwdError("");
        }
    };

    const handleLogin = async () => {
        if (!email || !pwd) return toast.warning('Alerta', { description: 'Todos los campos son requeridos' })
            try {
                setLoading(true);
                const data = await login(email, pwd)
                if (!data.ok) return toast.warning('Alerta', { description: data.message })
                    const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000);
                    Cookies.set('user_college', data.data, { expires: expiresAt })
                    localStorage.setItem("token", data.data);
                    toast.success('Éxito', { description: data.message })
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 3000)
            } catch (error) {
                return toast.error('Error', { description: `${error.message}` })
            } finally {
                setLoading(false)
            }
    }

    return (

        <div className="__form">
            <div className="__form_group">
                <label className="__form_label" htmlFor="email">Ingresa tu correo institucional</label>
                <div className="__form_control">
                    <input type="email" className="__entry __entry_block __entry_rounded_md" autoComplete="off" name="email" id="email" value={email} placeholder="Ingresa tu correo institucional" aria-placeholder="Ingresa tu correo institucional" onChange={(e) => handleEmailChange(e)} />
                    <span className="__form_ico"><IconMail/></span>
                </div>
                {emailError && <p className="__form_error">{emailError}</p>}
            </div>
            <div className="__form_group">
                <label className="__form_label" htmlFor="pwd">Ingresa tu contraseña</label>
                <div className="__form_control">
                    <input type={viewPwd ? 'text' : 'password'} className="__entry __entry_block __entry_rounded_md" autoComplete="off" name="pwd" id="pwd" value={pwd} placeholder="Ingresa tu contraseña" aria-placeholder="Ingresa tu contraseña" onChange={(e) => handlePwdChange(e)} />
                    <span className="__form_ico" onClick={() => setViewPwd(!viewPwd)}>{!viewPwd ? <IconEye/> : <IconEyeClosed/>}</span>
                </div>
                {pwdError && <p className="__form_error">{pwdError}</p>}
                <p className="__form_link"><a href="/">¿Olvidaste tu contraseña?</a></p>
            </div>
            <div className="__form_group">
                <button className={`__btn __btn_block __btn_rounded_md __btn_primary`} disabled={emailError || pwdError || !email || !pwd} onClick={handleLogin}>{loading ? 'Validando...' : 'Ingresar'}</button>
            </div>
        </div>

    )

}