import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/1.Home/home";
import SidebarNav from "./components/1.SideBarNavigation/SidebarNav";
import Mst from "./Pages/2.MST/MST";
import Phd from "./Pages/3.PHD/PHD";
import Search from "./Pages/4.Search/Search";
import Settings from "./Pages/5.Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SidebarNav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/mst" element={<Mst />} />
          <Route path="/phd" element={<Phd />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
