import "./App.css";
import DateDropdownPicker, {
  YearPicker,
  MonthPicker,
  DayPicker,
} from "react-date-dropdown";

function App() {
  return (
    <div className="main-container">
      <div className="pageTitle">Welcome To</div>
      <div className="pageTitle" style={{ marginBottom: "20px" }}>
        react-date-dropdown-picker
      </div>
      <div className="date-container">
        <div className="row">
          <div>Date Dropdown Picker</div>
          <DateDropdownPicker
            onDateChange={() => {}}
            defaultDate="1997-01-30"
            yearStart={1996}
            yearEnd={2000}
          />
        </div>
        <div className="row">
          <div>Year Picker</div>
          <YearPicker onYearChange={() => {}} />
        </div>
        <div className="row">
          <div>Month Picker</div>
          <MonthPicker onMonthChange={() => {}} />
        </div>
        <div className="row">
          <div>Day Picker</div>
          <DayPicker onDayChange={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default App;
