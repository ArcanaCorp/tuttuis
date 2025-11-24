import { Link, Outlet, useLocation } from "react-router-dom";
import { tabs } from "@/config";
import { Toaster } from "sonner";
import './styles/layout.css'

export default function DashboardLayout () {

    const location = useLocation();

    return (

        <>

            <main className="__dash_main">
                <Outlet/>
            </main>

            <footer className="__dash_footer">
                <ul className="__nav_tabs">
                    {tabs.map((tab, idx) => (
                        <li key={idx} className={`__tab ${location.pathname === tab.link ? '__tab--active' : ''}`}>
                            <Link to={tab.link} className="__tab_link">
                                <span className={`__tab_ico`}>{tab.ico}</span>
                                <span className={`__tab_txt`}>{tab.tab}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>

            <Toaster position="top-center" duration={3000} richColors />

        </>

    )

}