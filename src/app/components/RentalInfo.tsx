
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

  const [dropoffTime, setDropoffTime] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [errors, setErrors] = useState({
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user changes the input
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate Pick-Up Date
    if (!formData.pickUpDate) {
      newErrors.pickUpDate = "Pick-Up Date is required";
      isValid = false;
    }

    // Validate Pick-Up Time
    if (!formData.pickUpTime) {
      newErrors.pickUpTime = "Pick-Up Time is required";
      isValid = false;
    }

    // Validate Drop-Off Date
    if (!formData.dropOffDate) {
      newErrors.dropOffDate = "Drop-Off Date is required";
      isValid = false;
    } else if (formData.dropOffDate < formData.pickUpDate) {
      newErrors.dropOffDate = "Drop-Off Date cannot be before Pick-Up Date";
      isValid = false;
    }

    // Validate Drop-Off Time
    if (!formData.dropOffTime) {
      newErrors.dropOffTime = "Drop-Off Time is required";
      isValid = false;
    } else if (
      formData.dropOffDate === formData.pickUpDate &&
      formData.dropOffTime <= formData.pickUpTime
    ) {
      newErrors.dropOffTime = "Drop-Off Time cannot be before Pick-Up Time";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Form has errors");
    }
  };

  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickupTime(e.target.value);
  };

  const handleDropoffTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropoffTime(e.target.value);
  };

  const getMinDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const getMinTime = (date: string) => {
    if (date === new Date().toISOString().split("T")[0]) {
      return new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return "00:00";
  };

  return (
    <div className="bg-gray-100 flex p-4">
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
              <label className="block font-semibold mb-1 ">Locations</label>
              <select
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-500"
              >
                <option value="">Select your city</option>
                <option value="Defence">Defence</option>
                <option value="Saddar-Town">Saddar-Town</option>
                <option value="Clifton">Clifton</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-900 font-medium ">
                Date
              </label>
              <input
                type="date"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                min={getMinDate()}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-500"
              />
              {errors.pickUpDate && (
                <p className="text-red-500 text-sm">{errors.pickUpDate}</p>
              )}
            </div>

            <div>
              <div className="flex-1">
                <label className="text-gray-900 font-medium ">Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={handlePickupTimeChange}
                  className="w-full border rounded-md text-gray-500 p-2 mt-1"
                />
              </div>
            </div>
          </div>
        </div>

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
              <label className="block mb-1 text-gray-900 font-medium">
                Locations
              </label>
              <select
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-500"
              >
                <option value="">Select your city</option>
                <option value="Defence">Defence</option>
                <option value="Saddar-Town">Saddar-Town</option>
                <option value="Clifton">Clifton</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-900 font-medium ">
                Date
              </label>
              <input
                type="date"
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
                min={formData.pickUpDate || getMinDate()}
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-500"
              />
              {errors.dropOffDate && (
                <p className="text-red-500 text-sm">{errors.dropOffDate}</p>
              )}
            </div>
            <div>
              <div className="flex-1">
                <label className="text-gray-900 font-medium">Time</label>
                <input
                  type="time"
                  value={dropoffTime}
                  onChange={handleDropoffTimeChange}
                  className="w-full border text-gray-500 rounded-md p-2 mt-1"
                  disabled={!pickupTime}
                />
              </div>
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

// function setPickupTime(value: string) {
//   throw new Error("Function not implemented.");
// }
