import React from "react";
import { IMonthPicker } from "../types";
import { monthByNumber } from "./utils";

const MonthPicker: React.FC<IMonthPicker> = ({
  selectedMonth,
  onMonthChange,
  placeholder = "MM",
  selectClass,
  optionClass,
}) => {
  const renderMonthOptions = () => {
    let months: string[] = [];
    let month = 12;
    for (let i = 0; i <= month; ++i) {
      months.push(monthByNumber[i]);
    }

    const monthOptions: JSX.Element[] = [];
    monthOptions.push(
      <option value={-1} key={-1} disabled className={optionClass}>
        {placeholder ? placeholder : ""}
      </option>
    );
    months.forEach((month, index) => {
      monthOptions.push(
        <option value={index + 1} key={index} className={optionClass}>
          {month}
        </option>
      );
    });
    return monthOptions;
  };

  return (
    <select
      className={selectClass}
      onChange={(e: any) => {
        onMonthChange(e.target.value);
      }}
      value={selectedMonth}
    >
      {renderMonthOptions()}
    </select>
  );
};

export default MonthPicker;
