import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import moment from "moment";
import Header from "../../layout/header";
import Calendar from './components/Calendar';
import Activities from "./components/Activities";
import LastCitations from "./components/LastCitations";
import LastReports from "./components/LastReports";
import './styles/homeview.css'

import "moment/locale/es";
moment.locale("es");

export default function HomeView () {

    const today = moment();
    const currentMonth = today.format("MMMM");
    const [ toogleCalendar, setToogleCalendar ] = useState(false);

    return (

        <>
        
            <Header/>

            <main className='__main_home_view'>

                <section className='__section_home_view'>
                    <div className='__title_section'>
                        <h4 className='__txt_title_section'>Actividades</h4>
                    </div>
                    <Activities/>
                </section>

                <section className='__section_home_view'>
                    <div className='__title_section'>
                        <h4 className='__txt_title_section'>Calendario • {currentMonth}</h4>
                        <button className="__btn" onClick={() => setToogleCalendar(!toogleCalendar)}>{toogleCalendar ? <IconChevronUp/> : <IconChevronDown/>}</button>
                    </div>
                    <Calendar open={toogleCalendar}/>
                </section>

                <section className='__section_home_view'>
                    <div className='__title_section'>
                        <h4 className='__txt_title_section'>Últimas citaciones</h4>
                    </div>
                    <LastCitations/>
                </section>

                <section className='__section_home_view'>
                    <div className='__title_section'>
                        <h4 className='__txt_title_section'>Últimos reportes</h4>
                    </div>
                    <LastReports/>
                </section>

            </main>

        </>

    )

}