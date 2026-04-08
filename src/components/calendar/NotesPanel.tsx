import { formatRangeLabel } from "@/lib/calendarUtils";
import { X } from "lucide-react";

interface NotesPanelProps {
  note: string;
  onChange: (text: string) => void;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  onClearRange: () => void;
}

const NotesPanel = ({ note, onChange, rangeStart, rangeEnd, onClearRange }: NotesPanelProps) => {
  return (
    <div className="px-4 sm:px-6 pb-5 pt-2">
      {/* Range display */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-body text-muted-foreground truncate">
          {formatRangeLabel(rangeStart, rangeEnd)}
        </p>
        {rangeStart && (
          <button
            onClick={onClearRange}
            className="ml-2 p-1 rounded hover:bg-accent transition-colors flex-shrink-0"
            aria-label="Clear selection"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Notes area */}
      <div className="relative">
        <label className="text-xs font-display font-semibold text-muted-foreground tracking-widest uppercase mb-2 block">
          Notes
        </label>
        <div className="relative">
          <textarea
            value={note}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Add notes for this month..."
            className="w-full min-h-[100px] bg-transparent text-sm font-body text-foreground resize-none focus:outline-none placeholder:text-muted-foreground/50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, hsl(var(--border)) 27px, hsl(var(--border)) 28px)",
              lineHeight: "28px",
              paddingTop: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesPanel;
