import './App.css';
import {Overall_settings_context_Provider} from './context/Overall_settings';
import Entry from './Entry'

import {useContext} from 'react'
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes, Link,Navigate} from 'react-router-dom';
import overall_settings_context from './context/Overall_settings';

type user={
  id:Number;
  name:String;
}|null;
function App() {


  return (
    <Overall_settings_context_Provider>
      <>
      <button className="btn btn-active">Button</button>
        <button className="btn btn-active btn-primary">Button</button>
        <button className="btn btn-active btn-secondary">Button</button>
        <button className="btn btn-active btn-accent">Button</button>
        <button className="btn btn-active btn-ghost">Button</button>
        <button className="btn btn-active btn-link">Button</button>

      <Entry/>
      </>
    </Overall_settings_context_Provider>
  );
}

export default App;
