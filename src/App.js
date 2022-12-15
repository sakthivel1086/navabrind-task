import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HOME from './pages/Home';
import PROFILE from './pages/Profile';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/home" element={<HOME />} />
          <Route path="/profile/:id" element={<PROFILE />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
