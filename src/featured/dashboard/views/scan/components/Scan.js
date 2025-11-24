import { useEffect, useRef, useState } from "react";

export default function Scan() {

    const videoRef = useRef(null);
    const [ data, setData ] = useState("No hay datos");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {

        let stream;
        const barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });

        async function initCam() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" }
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }

                scanLoop();
            } catch (err) {
                console.error("Error cámara:", err);
            }
        }

        async function scanLoop() {
            if (!videoRef.current) return;

            try {
                const barcodes = await barcodeDetector.detect(videoRef.current);
                if (barcodes.length > 0) {
                    setData(barcodes[0].rawValue);
                }
            } catch (_) {}

            requestAnimationFrame(scanLoop);
        }

        initCam();

        return () => {
            if (stream) {
                stream.getTracks().forEach(t => t.stop());
            }
        };

    }, []);

    return (
        <>
            <div className="__scan_wrap_native">
                <video ref={videoRef} className="__video_native"></video>
            </div>
        </>
    );
}
