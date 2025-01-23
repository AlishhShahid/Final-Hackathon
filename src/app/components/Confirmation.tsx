"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmationForm(): JSX.Element {
  const [isMarketingChecked, setIsMarketingChecked] = useState<boolean>(false);
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isTermsChecked) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    alert("Thank you! Your rental is confirmed.");
  };

  return (
    <div className="p-6 max-w-3xl bg-white shadow-md rounded-lg relative">
      <div className="absolute top-4 right-6 text-gray-400">Step 4 of 4</div>
      <h2 className=" mb-2 text-2xl font-bold text-gray-900">Confirmation</h2>
      <p className=" text-gray-400 mb-4">
        We are getting to the end. Just a few clicks and your rental is ready!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Marketing Checkbox */}
        <label className="border border-gray-300 flex items-center space-x-2 w-full p-3  bg-gray-50 rounded-lg ">
          <input
            type="checkbox"
            checked={isMarketingChecked}
            onChange={() => setIsMarketingChecked(!isMarketingChecked)}
            className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">
            I agree with sending Marketing and newsletter emails. No spam,
            promised!
          </span>
        </label>

        {/* Terms and Conditions Checkbox */}
        <label className="flex items-center space-x-2 border border-gray-300 w-full p-3  bg-gray-50 rounded-lg ">
          <input
            type="checkbox"
            checked={isTermsChecked}
            onChange={() => setIsTermsChecked(!isTermsChecked)}
            className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">
            I agree with our terms and conditions and privacy policy.
          </span>
        </label>

        <Link href={"/dashboard"}>
        <button
          type="submit"
          className="px-4 mt-8 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2"
        >
          Rent Now
        </button>
        </Link>
      </form>

      <div className="mt-8 text-sm text-gray-500  items-start space-x-2">
        <Image src="/ic.png" alt="Secure Icon" width={32} height={32} className="w-8 h-8 m-2" />
        <div>
          <p className="font-medium text-gray-900">All your data are safe</p>
          <p>
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
}
