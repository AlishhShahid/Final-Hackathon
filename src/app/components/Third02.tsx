
'use client';

import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

export default function BookingSection() {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 w-[90%] md:w-[70%]">
      <div className="bg-white shadow-md p-4 ml-8 md:ml-0 md:p-6 rounded-xl w-full max-w-[600px]">
        <label className="font-bold text-xs md:text-base flex items-center space-x-2">
          <input type="radio" name="trip" defaultChecked={!isSwapped} /> <span>Pick – Up</span>
        </label>
        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm">
          <div className="flex-1">
            <label className="font-bold">Locations</label>
            <select className="w-full border rounded-md p-1 md:p-2 mt-1">
              <option>city</option>
              <option value="Defence">Defence</option>
                  <option value="Saddar-Town">Saddar-Town</option>
                  <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="font-bold">Date</label>
            <input type="date" className="w-full border rounded-md p-1 md:p-2 mt-1" />
          </div>
          <div className="flex-1">
            <label className="font-bold">Time</label>
            <input type="time" className="w-full border rounded-md p-1 md:p-2 mt-1" />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setIsSwapped(!isSwapped)} 
        className="bg-blue-600 text-white p-3 md:p-4 rounded-full md:ml-0 ml-8 shadow-lg flex items-center justify-center w-12 md:w-14 h-12 md:h-14 self-center">
        <FaExchangeAlt size={24} />
      </button>
      
      <div className="bg-white shadow-md ml-8 md:ml-0 p-4 md:p-6 rounded-xl w-full max-w-[600px]">
        <label className="font-bold text-xs md:text-base flex items-center space-x-2">
          <input type="radio" name="trip" defaultChecked={isSwapped} /> <span>Drop – Off</span>
        </label>
        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm">
          <div className="flex-1">
            <label className="font-bold">Locations</label>
            <select className="w-full border rounded-md p-1 md:p-2 mt-1">
              <option>city</option>
              <option value="Defence">Defence</option>
                  <option value="Saddar-Town">Saddar-Town</option>
                  <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="font-bold">Date</label>
            <input type="date" className="w-full border rounded-md p-1 md:p-2 mt-1" />
          </div>
          <div className="flex-1">
            <label className="font-bold">Time</label>
            <input type="time" className="w-full border rounded-md p-1 md:p-2 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
