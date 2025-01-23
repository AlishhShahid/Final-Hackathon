import React from "react";

const SideBar = () => {
  return (
    <div className="w-64 p-6 bg-gray-50 border-r border-gray-200 h-screen hidden sm:block ">
      <div>
        <h3 className="text-xs font-semibold text-[#90A3BF] mb-6 uppercase">
          Type
        </h3>
        <ul className="space-y-4">
          {[
            { label: "Sport", count: 10 },
            { label: "SUV", count: 12 },
            { label: "MPV", count: 16 },
            { label: "Sedan", count: 20 },
            { label: "Coupe", count: 14 },
            { label: "Hatchback", count: 14 },
          ].map((type, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <span className="ml-2 text-sm text-gray-700 font-medium">
                  {type.label}{" "}
                  <span className="text-[#90A3BF]">({type.count})</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-xs font-semibold text-[#90A3BF] mb-6 uppercase">
          Capacity
        </h3>
        <ul className="space-y-4">
          {[
            { label: "2 Person", count: 10 },
            { label: "4 Person", count: 14 },
            { label: "6 Person", count: 12 },
            { label: "8 or More", count: 16 },
          ].map((capacity, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="capacity"
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                />
                <span className="ml-2 text-sm text-gray-700 font-medium">
                  {capacity.label}{" "}
                  <span className="text-[#90A3BF]">({capacity.count})</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-xs font-semibold text-[#90A3BF] mb-6 uppercase">
          Price
        </h3>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full accent-blue-500 focus:ring-blue-400"
          />
          <p className="mt-4 text-sm text-gray-700 font-medium">
            Max: <span className="text-black">$100.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
