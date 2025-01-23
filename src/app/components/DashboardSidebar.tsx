
"use client";

import { useState } from "react";
import {
  FiHome,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiMail,
  FiCalendar,
  FiMoon,
  FiMenu,
} from "react-icons/fi";

const DashboardSidebar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        <FiMenu className="text-gray-700 dark:text-gray-300 w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg p-4 transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="space-y-8 flex flex-col h-full">
         
          <div>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4 mt-14 lg:mt-0 text-blue-500">
                <FiHome />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span>Car Rent</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <FiBarChart2 />
                <span>Insight</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <FiMail />
                <span>Inbox</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <FiCalendar />
                <span>Calendar</span>
              </li>
            </ul>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-6">
              Preferences
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <FiSettings />
                <span>Settings</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <FiHelpCircle />
                <span>Help & Center</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <FiMoon />
                  <span>Dark Mode</span>
                </div>
                
              </li>
            </ul>
          </div>

         
          
        </div>
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardSidebar;
