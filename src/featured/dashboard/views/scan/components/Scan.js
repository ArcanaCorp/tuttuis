import { useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";

export default function Scan() {

    const [data, setData] = useState("No hay datos");
    //const [loading, setLoading] = useState(false);

    return (
        <div className="__scan_wrap_native">
            <BarcodeScanner 
                width={500}
                height={500}
                onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
                }}
            />

            {/* Si quieres mostrar el valor leído, puedes dejar algo así */}
            {<p>{data}</p>}
        </div>
    );
}