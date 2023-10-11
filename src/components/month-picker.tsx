import React from 'react';
import { monthByNumber_EN, monthByNumber_CN, monthByNumber_BM } from './utils';

export interface IMonthPicker {
  /** Required. Callback for month change: Format: MM */
  onMonthChange: (month: number) => void;
  /** Default year: Format: MM */
  selectedMonth?: number;
  /** Placeholder for <select/> input */
  placeholder?: string;
  /** ClassName */
  className?: {
    select?: string;
    option?: string;
  };
  /** Styles */
  styles?: {
    select?: React.CSSProperties;
    option?: React.CSSProperties;
  };
  language?: 'EN' | 'CN' | 'BM';
  arrayMonthList?: string[];
}

const MonthPicker: React.FC<IMonthPicker> = ({
  selectedMonth,
  onMonthChange,
  placeholder = 'MM',
  className,
  styles,
  language = 'EN',
  arrayMonthList,
}) => {
  const renderMonthOptions = () => {
    let months: string[] = [];
    let month = 12;

    let monthList;

    if (arrayMonthList && arrayMonthList.length === 12) {
      monthList = arrayMonthList;
    } else {
      switch (language) {
        case 'EN':
          monthList = monthByNumber_EN;
          break;
        case 'CN':
          monthList = monthByNumber_CN;
          break;
        case 'BM':
          monthList = monthByNumber_BM;
          break;
        default:
          monthList = monthByNumber_EN;
          break;
      }
    }

    for (let i = 0; i <= month; ++i) {
      months.push(monthList[i]);
    }

    const monthOptions: JSX.Element[] = [];
    monthOptions.push(
      <option
        value={-1}
        key={-1}
        disabled
        selected
        className={className?.option}
        style={styles?.option}
      >
        {placeholder ? placeholder : ''}
      </option>
    );
    months.forEach((month, index) => {
      monthOptions.push(
        <option
          value={index + 1}
          key={index}
          className={className?.option}
          style={styles?.option}
        >
          {month}
        </option>
      );
    });
    return monthOptions;
  };

  return (
    <select
      className={className?.select}
      style={styles?.select}
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
