import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  city: string;
}

interface Errors {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
}

export default function BillingInfo() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!name) {
      console.error("Input element is missing a name attribute");
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
      // Further functionality can be added here, like API calls
    }
  };

  return (
    <div className="  bg-gray-100 flex  p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl"
      >
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Billing Info</h1>
            <p className="text-gray-400">Please enter your billing info</p>
          </div>
          <div className="text-gray-400 font-medium">Step 1 of 4</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1 text-gray-900">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full p-2 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-900">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={`w-full p-2 border rounded-lg ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-900">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className={`w-full p-2 border rounded-lg ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-900">
              Town / City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Town or city"
              className={`w-full p-2 border rounded-lg ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
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
