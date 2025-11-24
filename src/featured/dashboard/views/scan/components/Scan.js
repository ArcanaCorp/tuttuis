import { useState } from "react";
import { QrScanner } from "react-qr-barcode-scanner";

export default function Scan() {

    const [data, setData] = useState("No hay datos");
    //const [loading, setLoading] = useState(false);

    return (
        <div className="__scan_wrap_native">
            <QrScanner
                onUpdate={(result) => {
                    if (result) {
                        setData(result.text);
                    }
                }}
                onError={(err) => {
                    console.error("Error en el escáner:", err);
                }}
                videoStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />

            {/* Si quieres mostrar el valor leído, puedes dejar algo así */}
            {<p>{data}</p>}
        </div>
    );
}