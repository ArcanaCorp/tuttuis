import Header from '../../layout/header'
import Scan from './components/Scan'
import './styles/view.css'
export default function ScanView () {

    return (

        <>
        
            <Header/>

            <main className="__main_scan_view">
                <div className='__scan_box'>
                    <Scan/>
                </div>
            </main>

        </>

    )

}