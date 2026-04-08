import { motion, AnimatePresence } from "framer-motion";
import { MONTH_IMAGES } from "@/lib/calendarUtils";

interface CalendarHeroProps {
  month: number;
  direction: number;
}

const CalendarHero = ({ month, direction }: CalendarHeroProps) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1024/680" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={month}
          src={MONTH_IMAGES[month]}
          alt="Month landscape"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* Diagonal blue overlay like in the reference */}
      <div
        className="absolute bottom-0 right-0 w-full h-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, hsl(207 90% 54% / 0.85) 100%)",
        }}
      />
    </div>
  );
};

export default CalendarHero;
