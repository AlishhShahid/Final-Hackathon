import React, { useState } from "react";

export default function RentalInfo() {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffLocation: "",
    dropOffDate: "",
    dropOffTime: "",
    selectedOption: "pick-up",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className=" bg-gray-100 flex p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Rental Info</h1>
            <p className="text-gray-400">Please select your rental date</p>
          </div>
          <div className="text-gray-400 font-medium">Step 2 of 4</div>
        </div>

        {/* Pick-Up Section */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pick-up"
              name="selectedOption"
              value="pick-up"
              checked={formData.selectedOption === "pick-up"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="pick-up" className="text-gray-900 font-medium">
              Pick - Up
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Locations
              </label>
              <select
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              >
                <option value="">Select your city</option>
                <option value="City A">City A</option>
                <option value="City B">City B</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Date
              </label>
              <input
                type="date"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Time
              </label>
              <select
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              >
                <option value="">Select your time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="drop-off"
              name="selectedOption"
              value="drop-off"
              checked={formData.selectedOption === "drop-off"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="drop-off" className="text-gray-900 font-medium">
              Drop - Off
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Locations
              </label>
              <select
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              >
                <option value="">Select your city</option>
                <option value="City A">City A</option>
                <option value="City B">City B</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Date
              </label>
              <input
                type="date"
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-900">
                Time
              </label>
              <select
                name="dropOffTime"
                value={formData.dropOffTime}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-400"
              >
                <option value="">Select your time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
