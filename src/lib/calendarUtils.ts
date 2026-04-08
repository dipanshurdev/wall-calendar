import januaryImg from "@/assets/january.jpg";
import februaryImg from "@/assets/february.jpg";
import marchImg from "@/assets/march.jpg";
import aprilImg from "@/assets/april.jpg";
import mayImg from "@/assets/may.jpg";
import juneImg from "@/assets/june.jpg";
import julyImg from "@/assets/july.jpg";
import augustImg from "@/assets/august.jpg";
import septemberImg from "@/assets/september.jpg";
import octoberImg from "@/assets/october.jpg";
import novemberImg from "@/assets/november.jpg";
import decemberImg from "@/assets/december.jpg";

export const MONTH_NAMES = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

export const DAY_NAMES = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const MONTH_IMAGES: Record<number, string> = {
  0: januaryImg,
  1: februaryImg,
  2: marchImg,
  3: aprilImg,
  4: mayImg,
  5: juneImg,
  6: julyImg,
  7: augustImg,
  8: septemberImg,
  9: octoberImg,
  10: novemberImg,
  11: decemberImg,
};

// US public holidays (month 0-indexed, day 1-indexed)
export const HOLIDAYS: Record<string, string> = {
  "0-1": "New Year's Day",
  "0-20": "MLK Day",
  "1-14": "Valentine's Day",
  "2-17": "St. Patrick's Day",
  "3-1": "April Fools",
  "4-27": "Memorial Day",
  "5-19": "Juneteenth",
  "6-4": "Independence Day",
  "8-1": "Labor Day",
  "9-31": "Halloween",
  "10-28": "Thanksgiving",
  "11-25": "Christmas",
  "11-31": "New Year's Eve",
};

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday-first
}

export function isWeekend(dayOfWeek: number): boolean {
  return dayOfWeek === 5 || dayOfWeek === 6; // Sat/Sun in Mon-first
}

export function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function isInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  return date > start && date < end;
}

export function isToday(year: number, month: number, day: number): boolean {
  const now = new Date();
  return now.getFullYear() === year && now.getMonth() === month && now.getDate() === day;
}

export function getHoliday(month: number, day: number): string | undefined {
  return HOLIDAYS[`${month}-${day}`];
}

export function formatRangeLabel(start: Date | null, end: Date | null): string {
  if (!start) return "Click a date to start selecting a range";
  const fmt = (d: Date) =>
    `${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
  if (!end) return `From ${fmt(start)} — click another date to complete range`;
  return `${fmt(start)} — ${fmt(end)}`;
}
