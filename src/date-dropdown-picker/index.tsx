// export * from './day';
// export * from './month';
// export * from './year';

import React, { useEffect, useState } from "react";
import DayPicker from "./day";
import { zeroPad } from "./helpers";
import MonthPicker from "./month";
import YearPicker from "./year";

interface IDateDropdownPicker {
  onDateChange: (date: string) => void;
  defaultDate?: string;
  optionClass?: string;
  selectClass?: string;
  containerClass?: string;
  selectPlaceholder?: {
    year: string;
    month: string;
    day: string;
  };
  yearStart?: number;
  yearEnd?: number;
}

const DateDropdownPicker: React.FC<IDateDropdownPicker> = ({
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

export default DateDropdownPicker;

export {
  YearPicker,
  MonthPicker,
  DayPicker
};
