import moment from "moment";
import "moment/locale/es";
import './styles/card.css'

moment.locale("es");

export default function ReportCard ({ info }) {

    const fecha = moment(info?.fecha).format('ll')
    const hora = moment(`1970-01-01 ${info?.hora}`, "YYYY-MM-DD HH:mm").format("h:mm a");


    return (
        <li className={`__card_report`}>
            <div className="__box_report">
                <h4 className="__txt_name">{info.fullname} • {info.grade} {info.section}</h4>
                <p className="__txt_incidence">{info.incidencia}</p>
            </div>
            <p className="__txt_hora">{fecha} • {hora}</p>
        </li>
    )
}