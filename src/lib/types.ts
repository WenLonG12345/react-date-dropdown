export enum DropdownComponent {
  year = "year",
  month = "month",
  day = "day",
}

export interface IDateDropdown {
  /** Required. Callback for date change: Format: YYYY-MM-DD */
  onDateChange: (date: string) => void;
  /** Default date: Format: YYYY-MM-DD */
  defaultDate?: string;

  /** className for container */
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
  /** className for <select/> */
  selectClass?: string;
  /** className for <option/> */
  optionClass?: string;
}

export interface IMonthPicker {
  /** Required. Callback for month change: Format: MM */
  onMonthChange: (month: number) => void;
  /** Default year: Format: MM */
  selectedMonth?: number;
  /** Placeholder for <select/> input */
  placeholder?: string;
  /** className for <select/> */
  selectClass?: string;
  /** className for <option/> */
  optionClass?: string;
}

export interface IDayPicker {
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
