import './App.css';
import {Guests} from "./components/Guests";
import {AddGuest} from "./components/AddGuest";

function App() {
  return (
    <div className="App">
      <AddGuest/>
      <Guests/>
    </div>
  );
}


export default App;
