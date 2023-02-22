import React from "react";
import { getDaysInMonth } from "./helpers";

interface IDayPicker {
  year: number;
  month: number;
  day: number;
  onDayChange: (day: number) => void;
  placeholder?: string;
  selectClass?: string;
  optionClass?: string;
}

const DayPicker: React.FC<IDayPicker> = ({
  day,
  onDayChange,
  month = 1,
  year = 1991,
  placeholder = "DD",
  selectClass,
  optionClass,
}) => {
  const renderDayOptions = () => {
    let days = month ? getDaysInMonth(year, month) : 31;

    const dayOptions = [];
    dayOptions.push(
      <option value={-1} key={-1} disabled selected className={optionClass}>
        {placeholder ? placeholder : ""}
      </option>
    );
    for (let i = 1; i <= days; ++i) {
      dayOptions.push(
        <option value={i} key={i} className={optionClass}>
          {i}
        </option>
      );
    }
    return dayOptions;
  };

  return (
    <select
      className={selectClass}
      onChange={(e: any) => onDayChange(e.target.value)}
      value={day}
    >
      {renderDayOptions()}
    </select>
  );
};

export default DayPicker;
