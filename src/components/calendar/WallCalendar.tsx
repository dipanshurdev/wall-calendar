import { useRef, useState } from "react";
import { useCalendar } from "@/hooks/useCalendar";
import SpiralBinding from "./SpiralBinding";
import CalendarHero from "./CalendarHero";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";

const WallCalendar = () => {
  const {
    year, month, rangeStart, rangeEnd,
    goNext, goPrev, goToday, selectDay, clearRange,
    currentNote, setCurrentNote,
  } = useCalendar();

  const [direction, setDirection] = useState(0);
  const prevMonth = useRef(month);

  if (month !== prevMonth.current) {
    setDirection(month > prevMonth.current || (prevMonth.current === 11 && month === 0) ? 1 : -1);
    prevMonth.current = month;
  }

  const handlePrev = () => {
    setDirection(-1);
    goPrev();
  };

  const handleNext = () => {
    setDirection(1);
    goNext();
  };

  return (
    <div className="calendar-paper rounded-xl overflow-hidden max-w-md w-full mx-auto" style={{ perspective: "1200px" }}>
      {/* Spiral binding */}
      <SpiralBinding />

      {/* Hero image */}
      <CalendarHero month={month} direction={direction} />

      {/* Month header with nav */}
      <CalendarHeader
        year={year}
        month={month}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={goToday}
      />

      {/* Separator */}
      <div className="mx-4 sm:mx-6 h-px bg-border" />

      {/* Date grid */}
      <CalendarGrid
        year={year}
        month={month}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        onSelectDay={selectDay}
      />

      {/* Separator */}
      <div className="mx-4 sm:mx-6 h-px bg-border" />

      {/* Notes */}
      <NotesPanel
        note={currentNote}
        onChange={setCurrentNote}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        onClearRange={clearRange}
      />
    </div>
  );
};

export default WallCalendar;
