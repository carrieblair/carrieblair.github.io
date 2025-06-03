// src/components/monthlyView.css.ts
import { style } from "@vanilla-extract/css";

export const calendarContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
});

export const monthNav = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "900px",
  marginBottom: "1rem",
});

export const calendarGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  background: "#e5e7eb",
  borderRadius: "12px",
  maxWidth: "910px",
  margin: "0 auto",
});

export const dayCell = style({
  background: "white",
  border: "1px solid #d1d5db",
  minWidth: "130px",
  minHeight: "140px",         // Set min, but allow it to grow!
  padding: "12px",
  fontSize: "14px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflow: "visible",        // Allow events to expand cell
});

export const fadedDay = style({
  opacity: 0.4,
});

export const dayNumber = style({
  fontSize: "13px",
  fontWeight: 600,
  color: "#6b7280",
  marginBottom: "0.25rem",
});

export const eventsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  overflow: "visible",
});

// Category color styles:
export const eventCarrie = style({
  background: "#fbcfe8", color: "#be185d", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px", 
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const eventAtticus = style({
  background: "#bbf7d0", color: "#166534", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px",
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const eventFamily = style({
  background: "#fdba74", color: "#9a3412", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px",
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const eventTodo = style({
  background: "#bfdbfe", color: "#1e40af", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px",
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const eventKids = style({
  background: "#ddd6fe", color: "#6d28d9", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px",
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const eventDefault = style({
  background: "#e5e7eb", color: "#374151", borderRadius: "8px",
  fontSize: "12px", fontWeight: 500, padding: "3px 8px", marginBottom: "2px",
  "@media": {
    "(max-width: 700px)": {
      fontSize: "11px",
    },
    "(max-width: 500px)": {
      fontSize: "10px",
    },
  },
  selectors: {
    "&.smallFont": { fontSize: "10px" }, // For dynamic class change below!
  },
});
export const monthTitle = style({
  fontFamily: "'Montserrat Alternates', sans-serif",
  fontWeight: 900,
  fontSize: "2.4rem",
  color: "#22223b",
  margin: "0.5rem 0 2rem 0",
  letterSpacing: "0.01em",
  fontStyle: "italic",        // <--- makes it italic
  fontVariant: "normal",      // just in case
  transform: "skew(-8deg)",   // <--- extra slant to match your image
});
// Top bar container
export const topBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto 1.5rem auto",
  position: "relative",
  zIndex: 2,
});

// Tab group
export const tabGroup = style({
  display: "flex",
  gap: "0.5rem",
});

// Tab button
export const tabButton = style({
  padding: "0.6rem 1.2rem",
  fontSize: "1.1rem",
  fontWeight: 600,
  background: "white",
  color: "#22223b",
  border: "2px solid #ddd",
  borderRadius: "10px 10px 0 0",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.15s",
  boxShadow: "0 2px 8px rgba(34,34,59,0.04)",
  ":hover": {
    background: "#f1f3f9",
  },
});

// Active tab
export const activeTab = style({
  background: "#e6ecff",
  color: "#393985",
  borderBottom: "2px solid #e6ecff",
  zIndex: 1,
});

// Add Event Button
export const addEventButton = style({
  marginLeft: "auto",
  padding: "0.6rem 1.2rem",
  fontSize: "1.1rem",
  fontWeight: 700,
  border: "none",
  borderRadius: "12px",
  background: "#fff",
  color: "#22223b",
  boxShadow: "0 1px 8px rgba(34,34,59,0.05)",
  cursor: "pointer",
  transition: "background 0.15s, color 0.15s",
  ":hover": {
    background: "#fbcfe8",
    color: "#a21caf",
  },
});
