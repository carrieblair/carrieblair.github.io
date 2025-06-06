import { useState } from "react";
import MonthlyView from "./components/MonthlyView";
import WeeklyView from "./components/WeeklyView";
import EventInput from "./components/EventInput";
/*import * as styles from './components/calendarStyles.css';*/
import * as styles from "./components/monthlyView.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([
    { title: "Beach Day", date: "2025-05-31", category: "Family" },
    { title: "No School", date: "2025-06-01", category: "Family" },
    { title: "Pool Day", date: "2025-06-01", category: "Family" },
    { title: "Pictures", date: "2025-06-07", category: "Family" },
    { title: "A in Germany", date: "2025-06-08", category: "Atticus" },
    { title: "A in Germany", date: "2025-06-09", category: "Atticus" },
    { title: "A in Germany", date: "2025-06-10", category: "Atticus" },
    { title: "A in Germany", date: "2025-06-11", category: "Atticus" },
    { title: "Last Day of Work", date: "2025-06-17", category: "Atticus" },
    { title: "Bologna", date: "2025-06-19", category: "Travel" },
    { title: "Bologna", date: "2025-06-20", category: "Travel" },
    { title: "A Jump", date: "2025-06-23", category: "Atticus" },
    { title: "A Jump", date: "2025-06-24", category: "Atticus" },
    { title: "A Jump", date: "2025-06-25", category: "Atticus" },
    { title: "A Jump", date: "2025-06-26", category: "Atticus" },
    { title: "A Jump", date: "2025-06-27", category: "Atticus" },
    { title: "Harper's Graduation & Class Party", date: "2025-06-05", category: "Family" },
    { title: "Jackson's Class Party", date: "2025-06-14", category: "Family" },
    { title: "Last Day of School", date: "2025-06-27", category: "Family" },
    { title: "Move to the Inn", date: "2025-06-29", category: "Travel" },
    { title: "Maggie Fly to VCE", date: "2025-06-16", category: "Travel" },
    { title: "Ederle Inn", date: "2025-06-29", category: "Travel" },
    { title: "Ederle Inn", date: "2025-06-30", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-01", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-02", category: "Travel" },
    { title: "Crete", date: "2025-07-03", category: "Travel" },
    { title: "Crete", date: "2025-07-04", category: "Travel" },
    { title: "Crete", date: "2025-07-05", category: "Travel" },
    { title: "Crete", date: "2025-07-06", category: "Travel" },
    { title: "Crete", date: "2025-07-07", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-07", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-08", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-09", category: "Travel" },
    { title: "Ederle Inn", date: "2025-07-10", category: "Travel" },
    { title: "UAB & CFMO Pickup", date: "2025-06-30", category: "Family" },
    { title: "Clean the house", date: "2025-06-29", category: "Carrie" },
    { title: "Fly to ATL, land at 4p", date: "2025-07-10", category: "Travel" },
    { title: "Atticus Drive to Kansas", date: "2025-07-15", category: "Travel" },
    { title: "Fly to Kansas", date: "2025-08-10", category: "Travel" },
  ]);
  const [activeView, setActiveView] = useState("month"); // or pass this as prop

  const handleAddEvent = (event) => {
    setEvents((prev) => [...prev, event]);
  };

  const handleExportPDF = async () => {
    // Get the calendar element by ID or ref
    const calendarElem = document.getElementById("calendar-main-view");
    if (!calendarElem) return;
  
    // Use html2canvas to capture screenshot
    const canvas = await html2canvas(calendarElem, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
  
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [canvas.width, canvas.height],
    });
  
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`Calendar-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
  <div className="w-full">
        <div className={styles.topBar}>
          <div className={styles.tabGroup}>
            <button
              className={`${styles.tabButton} ${activeView === "week" ? styles.activeTab : ""}`}
              onClick={() => setActiveView("week")}
            >
              Week View
            </button>
            <button
              className={`${styles.tabButton} ${activeView === "month" ? styles.activeTab : ""}`}
              onClick={() => setActiveView("month")}
            >
              Month View
            </button>
          </div>
          <button className={styles.addEventButton}>
            Add Event
          </button>
          <div style={{ background: "transparent", border: "none" }}>
            <button onClick={handleExportPDF} style={{ marginLeft: "1rem" }}>
              Export to PDF
            </button>
          </div>

        </div>


    {view === "month" ? <MonthlyView events={events} /> : <WeeklyView />}
  </div>
</div>

  );
}

export default App;
