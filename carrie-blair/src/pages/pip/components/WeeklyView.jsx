const WeeklyView = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
    return (
      <div className="flex gap-2 px-4 py-6">
        {days.map(day => (
          <div
            key={day}
            className="flex-1 h-48 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center"
          >
            <div className="text-sm text-gray-500">{day}</div>
            <div className="text-xl font-bold">No Events</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeeklyView;
  