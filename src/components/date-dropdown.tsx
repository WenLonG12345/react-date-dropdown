import React, { useEffect, useState } from "react";
import DayPicker from "./day-picker";
import { zeroPad } from "./utils";
import MonthPicker from "./month-picker";
import YearPicker from "./year-picker";

export interface IDateDropdown {
  /** Required. Callback for date change: Format: YYYY-MM-DD */
  onDateChange: (date: string) => void;
  /** Default date: Format: YYYY-MM-DD */
  defaultDate?: string;

  /** styles for container */
  containerClass?: string;
  /** className for <option/> */
  optionClass?: string;
  /** className for <select/> */
  selectClass?: string;

  /** Placeholder for <select/> input */
  selectPlaceholder?: {
    year: string;
    month: string;
    day: string;
  };
  /** Starting year: Format: YYYY */
  yearStart?: number;
  /** Ending year: Format: YYYY */
  yearEnd?: number;
}


const DateDropdown: React.FC<IDateDropdown> = ({
  onDateChange,
  defaultDate,
  optionClass,
  selectClass,
  containerClass,
  selectPlaceholder,
  yearStart,
  yearEnd,
}) => {
  const selDate = defaultDate ? new Date(defaultDate) : null;

  const [selectedDay, setSelectedDay] = useState<number>(
    selDate ? selDate.getDate() : -1
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    selDate ? selDate.getMonth() + 1 : -1
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    selDate ? selDate.getFullYear() : -1
  );

  useEffect(() => {
    if (selectedYear !== -1 && selectedMonth !== -1 && selectedDay !== -1) {
      setSelectedYear(selectedYear);
      setSelectedMonth(selectedMonth);
      setSelectedDay(selectedDay);

      onDateChange(
        `${selectedYear}-${zeroPad(selectedMonth, 2)}-${zeroPad(
          selectedDay,
          2
        )}`
      );
    }
  }, [selectedDay, selectedMonth, selectedYear]);

  return (
    <div className={containerClass}>
      <YearPicker
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        selectClass={selectClass}
        optionClass={optionClass}
        placeholder={selectPlaceholder?.year}
        start={yearStart}
        end={yearEnd}
      />
      <MonthPicker
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        selectClass={selectClass}
        optionClass={optionClass}
        placeholder={selectPlaceholder?.month}
      />
      <DayPicker
        year={selectedYear}
        month={selectedMonth}
        day={selectedDay}
        onDayChange={setSelectedDay}
        selectClass={selectClass}
        optionClass={optionClass}
        placeholder={selectPlaceholder?.day}
      />
    </div>
  );
};

export default DateDropdown;
