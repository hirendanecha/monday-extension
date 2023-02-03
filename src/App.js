import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDeal from "./components/google/AddDeal";
import SaveContact from "./components/google/SaveContact";
import SaveGmailScreen from "./components/google/SaveGmailScreen";
import Home from "./components/Home";
import InstallPage from "./components/InstallPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InstallPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/googleSaveContact" element={<SaveContact />} />
        <Route path="/googleAddDeal" element={<AddDeal />} />
        <Route path="/saveGmail" element={<SaveGmailScreen />} />
      </Routes>
    </div>
  );
};

export default App;
