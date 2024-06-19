import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-slate-400">
      <Header></Header>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
