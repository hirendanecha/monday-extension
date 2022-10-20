import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import InstallPage from "./components/InstallPage";
import MyTask from "./components/MyTask";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InstallPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mytask" element={<MyTask />} />
      </Routes>
    </div>
  );
};

export default App;
