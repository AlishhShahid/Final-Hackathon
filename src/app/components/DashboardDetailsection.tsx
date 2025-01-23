"use client";

import React, { useState } from "react";
import Image from "next/image";

const DashboardDetailsection = () => {
  const [pickupLocation, setPickupLocation] = useState("Saddar-Town");
  const [pickupDate, setPickupDate] = useState("2022-07-20");
  const [pickupTime, setPickupTime] = useState("07:00");
  const [dropoffLocation, setDropoffLocation] = useState("Saddar-Town");
  const [dropoffDate, setDropoffDate] = useState("2025-01-21");
  const [dropoffTime, setDropoffTime] = useState("01:00");

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 space-y-6">
      {/* Title */}
      <h2 className="text-lg font-semibold">Details Rental</h2>

      {/* Map Section */}
      <div className="relative w-full h-64 bg-gray-200 rounded-lg">
        {/* Placeholder for map */}
        <div className="absolute inset-0 flex items-center justify-center">
        <Image
            src="/Maps.png" // Replace with actual car image URL
            alt="Map"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500">Map Placeholder</p>
        </div>
      </div>

      {/* Car Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-56  ">
          <Image
            src="/03.png" // Replace with actual car image URL
            alt="Rolls-Royce"
            layout="fill"
            // objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h3 className="text-sm ">Rolls-Royce</h3>
          <p className="text-sm text-gray-500">Sedan</p>
        </div>
        <p className="text-sm  text-gray-500">#9761</p>
      </div>

      {/* Pick-Up Details */}
      <div>
        <h4 className="text-sm font-medium mb-2">Pick - Up</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Location</label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            >
              <option value="Defence">Defence</option>
              <option value="Saddar-Town">Saddar-Town</option>
              <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Time</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Drop-Off Details */}
      <div>
        <h4 className="text-sm font-medium mb-2">Drop - Off</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Location</label>
            <select
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            >
              

              <option value="Defence">Defence</option>
              <option value="Saddar-Town">Saddar-Town</option>
              <option value="Clifton">Clifton</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Date</label>
            <input
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Time</label>
            <input
              type="time"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center font-semibold text-lg">
          <span>Total Rental Price</span>
          <span>$96.00</span>
        </div>
        <p className="text-sm text-gray-500">
          Overall price and includes rental discount
        </p>
      </div>
    </div>
  );
};

export default DashboardDetailsection;
