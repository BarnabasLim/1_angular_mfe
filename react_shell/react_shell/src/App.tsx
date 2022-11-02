import './App.css';
import {Overall_settings_context_Provider} from './context/Overall_settings';
import Entry from './Entry'



function App() {


  return (
    <Overall_settings_context_Provider>
      <Entry/>
    </Overall_settings_context_Provider>
  );
}



export default App;
