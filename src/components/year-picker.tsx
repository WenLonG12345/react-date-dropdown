import React from 'react';

export interface IYearPicker {
  /** Required. Callback for year change: Format: YYYY */
  onYearChange: (year: number) => void;
  /** Default year: Format: YYYY */
  selectedYear?: number;
  /** Placeholder for <select/> input */
  placeholder?: string;
  /** Starting year: Format: YYYY */
  start?: number;
  /** Ending year: Format: YYYY */
  end?: number;
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
}

const YearPicker: React.FC<IYearPicker> = ({
  selectedYear,
  onYearChange,
  placeholder = 'YY',
  start,
  end,
  className,
  styles,
}) => {
  const renderYearOptions = () => {
    const startYear = start || 1900;
    const endYear = end || new Date().getFullYear();

    const years: number[] = [];
    if (startYear <= endYear) {
      for (let i = startYear; i <= endYear; ++i) {
        years.push(i);
      }
    } else {
      for (let i = endYear; i >= startYear; --i) {
        years.push(i);
      }
    }

    // show latest year first
    years.reverse();

    const yearOptions: JSX.Element[] = [];
    yearOptions.push(
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
    years.forEach((year, index) => {
      yearOptions.push(
        <option
          value={year}
          key={index}
          className={className?.option}
          style={styles?.option}
        >
          {year}
        </option>
      );
    });
    return yearOptions;
  };

  return (
    <select
      className={className?.select}
      style={styles?.select}
      onChange={(e: any) => onYearChange(e.target.value)}
      value={selectedYear}
    >
      {renderYearOptions()}
    </select>
  );
};

export default YearPicker;
