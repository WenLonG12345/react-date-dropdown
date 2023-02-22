import "./App.css";
import DateDropdownPicker from "../date-dropdown-picker";

function App() {
  return (
    <div className="App">
      <DateDropdownPicker
        onDateChange={() => {}}
        defaultDate="1997-01-30"
        yearStart={1996}
        yearEnd={2000}
      />
    </div>
  );
}

export default App;
