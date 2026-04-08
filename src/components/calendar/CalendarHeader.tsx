import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { MONTH_NAMES } from "@/lib/calendarUtils";
import { motion } from "framer-motion";

interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

const CalendarHeader = ({ year, month, onPrev, onNext, onToday }: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 pt-4 pb-2">
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToday}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Go to today"
        >
          <CalendarDays className="w-4 h-4 text-muted-foreground" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </motion.button>
      </div>
      <div className="text-right">
        <span className="text-muted-foreground font-body text-sm mr-3">{year}</span>
        <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-foreground">
          {MONTH_NAMES[month]}
        </span>
      </div>
    </div>
  );
};

export default CalendarHeader;
