import { motion } from "framer-motion";
import {
  DAY_NAMES,
  getDaysInMonth,
  getFirstDayOfMonth,
  isWeekend,
  isSameDay,
  isInRange,
  isToday,
  getHoliday,
} from "@/lib/calendarUtils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CalendarGridProps {
  year: number;
  month: number;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  onSelectDay: (day: number) => void;
}

const CalendarGrid = ({ year, month, rangeStart, rangeEnd, onSelectDay }: CalendarGridProps) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="px-4 sm:px-6 pb-2">
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_NAMES.map((name, i) => (
          <div
            key={name}
            className={`text-center text-xs font-semibold font-body py-1 ${
              isWeekend(i) ? "text-calendar-weekend" : "text-muted-foreground"
            }`}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, idx) => {
          if (day === null) return <div key={`empty-${idx}`} />;

          const date = new Date(year, month, day);
          const dayOfWeek = (firstDay + day - 1) % 7;
          const today = isToday(year, month, day);
          const start = isSameDay(date, rangeStart);
          const end = isSameDay(date, rangeEnd);
          const inRange = isInRange(date, rangeStart, rangeEnd);
          const holiday = getHoliday(month, day);

          let cls = "day-cell text-sm font-body";
          if (start || end) cls += " day-start";
          else if (inRange) cls += " day-in-range";
          if (today && !start && !end) cls += " day-today";
          if (isWeekend(dayOfWeek) && !start && !end && !inRange) cls += " day-weekend";

          const cell = (
            <motion.button
              key={day}
              className={cls}
              onClick={() => onSelectDay(day)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.008 }}
            >
              {day}
              {holiday && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </motion.button>
          );

          if (holiday) {
            return (
              <Tooltip key={day}>
                <TooltipTrigger asChild>{cell}</TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {holiday}
                </TooltipContent>
              </Tooltip>
            );
          }

          return cell;
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
