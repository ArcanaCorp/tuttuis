import moment from "moment";
import "moment/locale/es";
import "./styles/calendar.css";

moment.locale("es");

export default function Calendar({open=false}) {
    const today = moment();

    // Semana actual
    const currentMonth = today.month(); 
    const currentWeek = today.isoWeek();

    // Construcción de la semana actual (lunes a domingo)
    const currentWeekDays = Array.from({ length: 7 }).map((_, i) =>
        moment().isoWeek(currentWeek).startOf("isoWeek").add(i, "days")
    );

    // 🔥 Construcción de TODAS las semanas del mes
    const buildMonthWeeks = () => {
        const startOfMonth = moment().startOf("month").startOf("isoWeek"); 
        const endOfMonth = moment().endOf("month").endOf("isoWeek");

        const weeks = [];
        let cursor = startOfMonth.clone();

        while (cursor.isBefore(endOfMonth)) {
            const week = Array.from({ length: 7 }).map((_, i) =>
                cursor.clone().add(i, "days")
            );
            weeks.push(week);
            cursor.add(1, "week");
        }

        return weeks;
    };

    const monthWeeks = buildMonthWeeks();

    // 🔥 Decide qué renderizar
    const weeksToRender = open ? monthWeeks : [currentWeekDays];

    return (
        <div className="__cmp_calendar">
            {weeksToRender.map((week, wIdx) => (
                <ul key={wIdx} className="__calendar_week">
                    {week.map((day, dIdx) => {
                        const isToday = day.isSame(today, "day");
                        const isInCurrentMonth = day.month() === currentMonth;
                        return (
                            <li key={dIdx} className={`__calendar_day ${isToday ? "__calendar_day--active" : ""} ${!isInCurrentMonth ? "__calendar_day--lastmonth" : ""}`}>
                                <p className="__txt_day_num">{day.format("DD")}</p>
                                <p className="__txt_day">{day.format("ddd").replace(".", "")}</p>
                            </li>
                        );
                    })}
                </ul>
            ))}
        </div>
    );
}