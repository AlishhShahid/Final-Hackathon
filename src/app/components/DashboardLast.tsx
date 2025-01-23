
import React from "react";
import Image from "next/image";

const DashboardLast = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Title */}
        <h2 className="text-lg font-semibold">Top 5 Car Rental</h2>

        {/* Map Section */}
        <div className="relative w-full h-56 bg-gray-200 rounded-lg">
          <div className="absolute w-80 h-56 lg:w-96 inset-0 flex items-center justify-center">
            <Image
              src="/Top 5 Car Rental.png"
              alt="Top 5 Car Rental"
              layout="fill"
              className="rounded-lg"
            />
            {/* <p className="text-sm text-gray-500"></p> */}
          </div>
        </div>

        {/* Recent Transaction Section */}
        <div className="relative mx-auto w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 ">
          <Image
            src="/Recent Transaction.png" // Replace with actual car image URL
            alt="Recent Transaction"
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLast;

