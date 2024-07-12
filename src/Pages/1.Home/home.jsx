import React from 'react';
import SideBarNav from '../../components/1.SideBarNavigation/SidebarNav';
import SearchIcon from '../../assets/Icons/icon.png';
import AdvancedSearchIcon from '../../assets/Icons/search.png';
import profile from '../../assets/Images/profile pic.png';
import Upload from '../../assets/Icons/upload-file.png';
import ViewReports from '../../assets/Icons/Vector.png';
import FolderIcon from '../../assets/Icons/foldericon.png';
import FolderIcon2 from '../../assets/Icons/foldericon2.png';

const Home = () => {
  return (
    <section className="relative w-screen h-screen bg-[#FBFBFB] overflow-x-hidden flex">
      {/* Sidebar navigation */}
      <SideBarNav />
      {/* Main content */}
      <div className="ml-[72px] flex-1 flex flex-col">
        {/* Dashboard and profile section */}
        <div className="w-full h-[56px] bg-[#FBFBFB] flex items-center justify-between px-5">
          <h2 className="text-base font-bold">Dashboard</h2>
          <div>
            <img src={profile} alt="Profile" />
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FEF9EF]">
          <div className="text-[#333] font-bold text-lg">Find Student</div>
          <div className="flex items-center ml-6 flex-1 relative">
            <div className="relative w-full max-w-[400px]">
              <input
                type="text"
                placeholder="Search name, student registration number..."
                className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="w-5 h-5 text-[#A1A9B8]"
                />
              </div>
            </div>
            <button className="ml-4 bg-[#F7F9FC] text-[#868FA0] text-[14px] border border-gray-300 rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-gray-600">
              Search
            </button>
          </div>
          <div className="flex items-center ml-auto">
            <img
              src={AdvancedSearchIcon}
              alt="Advanced Search"
              className="w-5 h-5 mr-2"
            />
            <span className="text-[#838389] text-[12px]">Advanced search</span>
          </div>
        </div>

        {/* Shortlinks and other content */}
        <div className="flex-1 px-10 overflow-x-hidden">
          <h1 className="text-lg text-[#1A2240] font-semibold mt-8 mb-4">
            Shortlinks
          </h1>
          <div className="w-full flex flex-wrap gap-4 justify-between mb-8">
            {/* Shortlinks */}
            {[
              { img: Upload, bgColor: "#DDF5DF", label: "Submit New Report" },
              { img: ViewReports, bgColor: "#EDEEFF", label: "View Reports" },
              { img: FolderIcon, bgColor: "#FFE2D9", label: "Masters Students" },
              { img: FolderIcon2, bgColor: "#FEE2FF", label: "Ph.D Students" },
            ].map((item, index) => (
              <div key={index} className="w-[22%] h-[93px] bg-[#FFFFFF] rounded-xl flex flex-row items-center justify-center gap-4 px-4">
                <div className={`w-[35px] h-[35px] bg-[${item.bgColor}] flex items-center justify-center rounded-md`}>
                  <img src={item.img} alt="" className="w-[14px] h-[17px]" />
                </div>
                <label className="text-sm font-medium">{item.label}</label>
              </div>
            ))}
          </div>

          {/* Additional content */}
          <div className="w-full flex flex-wrap gap-4 justify-between">
            {[
              { title: "Overall Reports", count: 234, desc: "Overall reports submitted 2024" },
              { title: "Reports Submitted", count: 32, desc: "These are reports submitted this month" },
              { title: "Overall Masters 2024", count: 4, desc: "Overall Masters 2024" },
              { title: "Overall PhD 2024", count: 17, desc: "Overall PhD 2024" },
            ].map((item, index) => (
              <div key={index} className="w-[22%] h-[150px] bg-[#FFFFFF] rounded-xl flex flex-col items-center justify-center gap-4 px-4">
                <div className="text-start">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-[40px] font-bold">{item.count}</p>
                  <p className="text-[10px] text-[#868FA0]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
