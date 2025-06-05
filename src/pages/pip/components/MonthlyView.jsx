import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  format,
  isSameMonth,
  subMonths,
  addMonths,
} from "date-fns";
import { useState } from "react";
import * as styles from "./monthlyView.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getCategoryClass = (cat) => {
  switch (cat) {
    case "Carrie": return styles.eventCarrie;
    case "Atticus": return styles.eventAtticus;
    case "Family": return styles.eventFamily;
    case "To Do": return styles.eventTodo;
    case "Travel": return styles.eventTravel;
    default: return styles.eventDefault;
  }
};

const getEventsForDay = (day, events) => {
  return events.filter(
    (e) => format(new Date(e.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
  );
};



const MonthlyView = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = addDays(startOfWeek(monthEnd, { weekStartsOn: 0 }), 6);

  const days = [];
  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div id="calendar-main-view" className={styles.calendarContainer}>

        {/* Month navigation */}
        <div className={styles.monthNav}>
          <button onClick={handlePrevMonth}>← Previous</button>

          <h2 className={styles.monthTitle}>
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button onClick={handleNextMonth}>Next →</button>
        </div>

        {/* Weekday headers */}
        <div
          className={styles.calendarGrid}
          style={{ background: "transparent", border: "none" }}
        >
          {weekdays.map((day) => (
            <div
              key={day}
              style={{
                textAlign: "center",
                fontWeight: 600,
                color: "#6b7280",
                padding: "10px 0",
                background: "#fff",
                borderBottom: "1px solid #e5e7eb",
                fontSize: "15px",
              }}
            >
              {day}
            </div>
          ))}


          {/* Calendar grid */}

          {days.map((day, idx) => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const dayEvents = getEventsForDay(day, events);

            return (
              <div
                key={idx}
                className={`${styles.dayCell} ${!isCurrentMonth ? styles.fadedDay : ""}`}
              >
                <div className={styles.dayNumber}>{format(day, "d")}</div>
                <div className={styles.eventsList}>
                  {dayEvents.map((e, i) => {
                    // Add smallFont class if too many events
                    const smallFont = dayEvents.length > 4 ? "smallFont" : "";
                    return (
                      <div
                        key={i}
                        className={`${getCategoryClass(e.category)} ${smallFont}`}
                        title={e.title}
                      >
                        {e.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* Category Legend */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "18px",
            justifyContent: "center",
          }}
        >
          <span className={styles.eventCarrie}>Carrie</span>
          <span className={styles.eventAtticus}>Atticus</span>
          <span className={styles.eventFamily}>Family</span>
          <span className={styles.eventTodo}>To Do</span>
          <span className={styles.eventTravel}>Travel</span>
        </div>
      </div>
  );
};

export default MonthlyView;
