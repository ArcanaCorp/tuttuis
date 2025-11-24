import { useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";
import { serviceRegisterAssitence } from "@/featured/dashboard/services/assistence.services";
import moment from "moment";
import { toast } from "sonner";

export default function Scan() {

    const [error, setError] = useState("Error al registrar la asistencia del alumno.");
    const [loading, setLoading] = useState(false);

    const handleRegisterAssitence = async (token) => {
        try {
            setLoading(true);
            const dia = moment().format('YYYY-MM-DD')
            const hora = moment().format('HH:mm:ss')
            const data = await serviceRegisterAssitence(token, dia, hora);
            if (!data.ok) return toast.warning('Alerta', { description: data.message })
                toast.success('Éxito', { description: data.message })
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setError('')
        setLoading(false)
    }

    return (
        
        loading ? (  
            <div className="__scan_box_loading">
                <span className="__loading"></span>
            </div>
        ) : (
            error ? (
                <div className="__scan_box_error">
                    <div>
                        <p>{error}</p>
                        <button onClick={handleRetry}>Reintentar</button>
                    </div>
                </div>
            ) : (
                <BarcodeScanner
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                        if (err) return;
                        if (!result) return;
                        const text = result.text;
                        handleRegisterAssitence(text)
                    }}
                />
            )
        )
    );
}