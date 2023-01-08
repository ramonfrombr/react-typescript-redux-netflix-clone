import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <HomeScreen />
    </div>
  );
}

export default App;
