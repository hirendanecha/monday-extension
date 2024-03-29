import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDeal from "./components/google/AddDeal";
import AddDealNew from "./components/google/AddDealNew";
import MyTask from "./components/google/MyTask";
import MyTasks from "./components/google/MyTasks";
import Pricing from "./components/google/Pricing";
import SaveContact from "./components/google/SaveContact";
import SaveContactNew from "./components/google/SaveContactNew";
import SaveGmailScreen from "./components/google/SaveGmailScreen";
import Home from "./components/Home";
import InstallPage from "./components/InstallPage";
import ContactDetail from "./components/google/ContactDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InstallPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/googleSaveContact" element={<SaveContact />} />
        <Route path="/googleSaveContactNew" element={<SaveContactNew />} />
        <Route path="/googleAddDeal" element={<AddDeal />} />
        <Route path="/googleAddDealNew" element={<AddDealNew />} />
        <Route path="/saveGmail" element={<SaveGmailScreen />} />
        <Route path="/MyTask" element={<MyTask />} />
        <Route path="/MyTasks" element={<MyTasks />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactDetail" element={<ContactDetail />} />
      </Routes>
    </div>
  );
};

export default App;
