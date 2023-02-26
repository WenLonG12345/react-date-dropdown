import React from "react";
import { getDaysInMonth } from "./utils";

interface IDayPicker {
  /** Required. Callback for day change: Format: DD */
  onDayChange: (day: number) => void;
  /** Default year - 1991. Used to calculate number of days */
  year?: number;
  /** Default month - 1. Used to calculate number of days*/
  month?: number;
  /** Default day */
  day?: number;
  /** Placeholder for <select/> input */
  placeholder?: string;
  /** className for <select/> */
  selectClass?: string;
  /** className for <option/> */
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

    const dayOptions: JSX.Element[] = [];
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
