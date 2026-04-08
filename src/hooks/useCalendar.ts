import { useState, useCallback, useEffect } from "react";

export interface CalendarState {
  year: number;
  month: number;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  notes: Record<string, string>; // "YYYY-MM" -> text
}

const STORAGE_KEY = "wall-calendar-state";

function loadState(): Partial<CalendarState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return {
      ...parsed,
      rangeStart: parsed.rangeStart ? new Date(parsed.rangeStart) : null,
      rangeEnd: parsed.rangeEnd ? new Date(parsed.rangeEnd) : null,
    };
  } catch {
    return {};
  }
}

function saveState(state: CalendarState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useCalendar() {
  const now = new Date();
  const saved = loadState();

  const [year, setYear] = useState(saved.year ?? now.getFullYear());
  const [month, setMonth] = useState(saved.month ?? now.getMonth());
  const [rangeStart, setRangeStart] = useState<Date | null>(saved.rangeStart ?? null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(saved.rangeEnd ?? null);
  const [notes, setNotes] = useState<Record<string, string>>(saved.notes ?? {});

  useEffect(() => {
    saveState({ year, month, rangeStart, rangeEnd, notes });
  }, [year, month, rangeStart, rangeEnd, notes]);

  const goNext = useCallback(() => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }, [month]);

  const goPrev = useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }, [month]);

  const goToday = useCallback(() => {
    setYear(now.getFullYear());
    setMonth(now.getMonth());
  }, []);

  const selectDay = useCallback(
    (day: number) => {
      const clicked = new Date(year, month, day);
      if (!rangeStart || rangeEnd) {
        setRangeStart(clicked);
        setRangeEnd(null);
      } else {
        if (clicked < rangeStart) {
          setRangeEnd(rangeStart);
          setRangeStart(clicked);
        } else {
          setRangeEnd(clicked);
        }
      }
    },
    [year, month, rangeStart, rangeEnd]
  );

  const clearRange = useCallback(() => {
    setRangeStart(null);
    setRangeEnd(null);
  }, []);

  const noteKey = `${year}-${month}`;
  const currentNote = notes[noteKey] ?? "";

  const setCurrentNote = useCallback(
    (text: string) => {
      setNotes((prev) => ({ ...prev, [noteKey]: text }));
    },
    [noteKey]
  );

  return {
    year, month, rangeStart, rangeEnd,
    goNext, goPrev, goToday, selectDay, clearRange,
    currentNote, setCurrentNote,
  };
}
