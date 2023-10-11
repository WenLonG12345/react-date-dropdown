import React, { useEffect, useState } from 'react';
import DayPicker from './day-picker';
import { zeroPad } from './utils';
import MonthPicker from './month-picker';
import YearPicker from './year-picker';

export interface IDateDropdown {
  /** Required. Callback for date change: Format: YYYY-MM-DD */
  onDateChange: (date: string) => void;
  /** Default date: Format: YYYY-MM-DD */
  defaultDate?: string;

  /** ClassName */
  className?: {
    container?: string;
    select?: string;
    option?: string;
  };
  /** Styles */
  styles?: {
    container?: React.CSSProperties;
    select?: React.CSSProperties;
    option?: React.CSSProperties;
  };

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

  /** Language for Month Strings. Default: EN */
  language?: 'EN' | 'CN' | 'BM';
  /** array of Month Strings, starting from Jan to Dec. limited to 12 string only */
  arrayMonthList?: string[];
}

const DateDropdown: React.FC<IDateDropdown> = ({
  onDateChange,
  defaultDate,
  className,
  styles,
  selectPlaceholder,
  yearStart,
  yearEnd,
  language,
  arrayMonthList,
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
    <div className={className?.container}>
      <YearPicker
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        className={className}
        styles={styles}
        placeholder={selectPlaceholder?.year}
        start={yearStart}
        end={yearEnd}
      />
      <MonthPicker
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        className={className}
        styles={styles}
        placeholder={selectPlaceholder?.month}
        language={language}
        arrayMonthList={arrayMonthList}
      />
      <DayPicker
        year={selectedYear}
        month={selectedMonth}
        day={selectedDay}
        onDayChange={setSelectedDay}
        className={className}
        styles={styles}
        placeholder={selectPlaceholder?.day}
      />
    </div>
  );
};

export default DateDropdown;
