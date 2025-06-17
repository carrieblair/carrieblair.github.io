/* 
import { useState } from "react";

const EventInput = ({ onEventParsed }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant that extracts structured event data from natural language.",
            },
            {
              role: "user",
              content: `Parse this into an event: "${text}"`,
            },
          ],
          temperature: 0.2,
        }),
      });

      const data = await response.json();
      const rawText = data.choices?.[0]?.message?.content || "";

      // Assume the response is like: {"title":"Lunch with Sarah","day":5,"time":"13:00"}
      const parsed = JSON.parse(rawText);
      onEventParsed(parsed);
    } catch (err) {
      console.error("Failed to parse event:", err);
      alert("There was an error. Check your API key or input.");
    } finally {
      setLoading(false);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6 w-full max-w-3xl mx-auto">
  <input
    type="text"
    className="flex-1 p-2 rounded border"
    placeholder="e.g., Coffee with Jess on Wednesday at 2pm"
    value={text}
    onChange={(e) => setText(e.target.value)}
    disabled={loading}
  />
  <button
    type="submit"
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    disabled={loading}
  >
    {loading ? "Adding..." : "Add Event"}
  </button>
</form>

  );
};

export default EventInput; */

// src/components/EventInput.jsx
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function EventInput() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !date) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      await addDoc(collection(db, "events"), {
        name: title,
        category,
        dateTime: Timestamp.fromDate(new Date(date)),
        endDate: endDate ? Timestamp.fromDate(new Date(endDate)) : Timestamp.fromDate(new Date(date)),
      });

      // Reset fields
      setTitle("");
      setCategory("");
      setDate("");
      setEndDate("");

      //alert("Event added!");
    } catch (err) {
      console.error("Error adding event:", err);
      alert("Failed to add event");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="Optional End Date"
      />
      <button type="submit">Add Event</button>
    </form>
  );
}
