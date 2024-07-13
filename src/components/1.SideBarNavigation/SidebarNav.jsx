import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo/Logo.png";
import HomeIcon from "../../assets/Icons/Vector23.png";
import FolderIcon from "../../assets/Icons/folder.png";
import SearchIcon from "../../assets/Icons/search.png";
import SettingsIcon from "../../assets/Icons/settings.png";

const MenuItemData = [
  { to: "/", icon: HomeIcon, label: "Home" },
  { to: "/mst", icon: FolderIcon, label: "MST" },
  { to: "/phd", icon: FolderIcon, label: "PHD" },
  { to: "/search", icon: SearchIcon, label: "Search" },
  { to: "/settings", icon: SettingsIcon, label: "Settings" },
];

const SidebarNav = () => {
  return (
    <div className="fixed w-[72px] h-screen bg-[#1A1A24] flex flex-col items-center gap-8">
      <img src={Logo} alt="Logo" className="w-[50px] h-[50px] mt-5" />
      <div className="text-[#D4D4D6] flex flex-col gap-4">
        {MenuItemData.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "bg-[#15151D] w-[40px] h-[55px] flex flex-col items-center justify-center rounded-lg text-[#D4D4D6]"
                : "w-[40px] h-[55px] flex flex-col items-center justify-center rounded-lg text-[#D4D4D6] bg-[#3A3A43] hover:bg-[#15151D] transition-colors duration-300"
            }
            activeClassName="active-link"
            exact={item.to === '/'}
          >
            <img src={item.icon} alt={item.label || "Icon"} className="w-5 h-5" />
            {item.label && <span className="text-[9px] font-inter mt-1">{item.label}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
