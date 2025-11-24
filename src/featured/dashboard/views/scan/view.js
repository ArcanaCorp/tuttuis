import Scan from './components/Scan'
import './styles/view.css'
export default function ScanView () {

    return (

        <>
        
            <header className="__header_scan_view">
                <h1>Escanear</h1>
            </header>

            <main className="__main_scan_view">
                <div className='__scan_box'>
                    <Scan/>
                </div>
            </main>

        </>

    )

}