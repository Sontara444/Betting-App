import "./App.css";
import Batting from "./Components/Batting/Batting";
import Login from "./Components/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/batting" element={<Batting/>} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
