import './App.css';
import ClockWithHook from '../../ClockWithHoks/ClockWithHook';
import Pomodoro from '../../pomodoro/Pomodoro';
import Second from '../second/Second';

function App() {
  return (
    <div className="App">
     {/* <ClockWithHook text={"Clock"} /> */}
     <Second />
    <Pomodoro /> 
    </div>
  );
}

export default App;
