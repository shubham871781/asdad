import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Data from "./Data"

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/data" element={<Data />}></Route>      
      </Routes>
    </div>
  );
}

export default App;
