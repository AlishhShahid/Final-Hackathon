'use client';

import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

export default function Third() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');

  const handlePickupDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setPickupDate(newDate);
    setDropoffDate(newDate); // Default dropoff date same as pickup
  };

  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickupTime(e.target.value);
  };

  const handleDropoffDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value >= pickupDate) {
      setDropoffDate(e.target.value);
    } else {
      alert('Drop-off date cannot be before pickup date.');
    }
  };

  const handleDropoffTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dropoffDate === pickupDate && e.target.value < pickupTime) {
      alert('Drop-off time cannot be before pickup time.');
    } else {
      setDropoffTime(e.target.value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 p-6">
      {/* Pickup Section */}
      <div className="bg-white shadow-md p-4 md:p-6 rounded-xl w-full max-w-[600px]">
        <label className="font-bold text-sm md:text-base flex items-center space-x-2">
          <input type="radio" name="trip" defaultChecked={!isSwapped} /> <span>Pick – Up</span>
        </label>
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-xs md:text-sm">
          <div className="flex-1">
            <label className="font-bold">Locations</label>
            <select className="w-full border rounded-md p-2 mt-1">
              <option>Select your city</option>
              <option value="Defence">Defence</option>
              <option value="Saddar-Town">Saddar-Town</option>
              <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="font-bold">Date</label>
            <input type="date" value={pickupDate} onChange={handlePickupDateChange} className="w-full border rounded-md p-2 mt-1" />
          </div>
          <div className="flex-1">
            <label className="font-bold">Time</label>
            <input type="time" value={pickupTime} onChange={handlePickupTimeChange} className="w-full border rounded-md p-2 mt-1" />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button 
        onClick={() => setIsSwapped(!isSwapped)} 
        className="bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center w-12 md:w-14 h-12 md:h-14">
        <FaExchangeAlt size={24} />
      </button>

      {/* Drop-off Section */}
      <div className="bg-white shadow-md p-4 md:p-6 rounded-xl w-full max-w-[600px]">
        <label className="font-bold text-sm md:text-base flex items-center space-x-2">
          <input type="radio" name="trip" defaultChecked={isSwapped} /> <span>Drop – Off</span>
        </label>
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-xs md:text-sm">
          <div className="flex-1">
            <label className="font-bold">Locations</label>
            <select className="w-full border rounded-md p-2 mt-1">
              <option>Select your city</option>
              <option value="Defence">Defence</option>
              <option value="Saddar-Town">Saddar-Town</option>
              <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="font-bold">Date</label>
            <input type="date" value={dropoffDate} onChange={handleDropoffDateChange} className="w-full border rounded-md p-2 mt-1" disabled={!pickupDate} />
          </div>
          <div className="flex-1">
            <label className="font-bold">Time</label>
            <input type="time" value={dropoffTime} onChange={handleDropoffTimeChange} className="w-full border rounded-md p-2 mt-1" disabled={!pickupDate} />
          </div>
        </div>
      </div>
    </div>
  );
}
