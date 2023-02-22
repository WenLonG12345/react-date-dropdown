import "./App.css";
import DateDropdownPicker, {YearPicker, MonthPicker, DayPicker} from "react-date-dropdown-picker";

function App() {
  return (
    <div className="App">
      <DateDropdownPicker
        onDateChange={() => {}}
        defaultDate="1997-01-30"
        yearStart={1996}
        yearEnd={2000}
      />
      <YearPicker
        onYearChange={() => {}}
      />
    </div>
  );
}

export default App;
