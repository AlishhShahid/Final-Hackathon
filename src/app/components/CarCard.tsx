// // components/CarCard.tsx
// import React from "react";
// import Image from "next/image";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { GoPeople } from "react-icons/go";
// import { FiSettings } from "react-icons/fi";

// interface CarCardProps {
//   name: string;
//   type: string;
//   imageUrl: string;
//   fuelCapacity: string;
//   transmission: string;
//   seatingCapacity: string;
//   price: number;
//   originalPrice: string;
// }

// const CarCard: React.FC<CarCardProps> = ({
//   name,
//   type,
//   imageUrl,
//   fuelCapacity,
//   transmission,
//   seatingCapacity,
//   price,
//   originalPrice,
// }) => {
//   return (
//     <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-lg font-semibold">{name}</h3>
//           <p className="text-sm text-gray-500">{type}</p>
//         </div>
//         <button className="text-gray-400 hover:text-red-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="mt-4 relative w-full h-40">
//         <Image
//           src={imageUrl || "/default-image.png"}
//           alt={name}
//           layout="fill"
//           objectFit="contain"
//         />
//       </div>

//       <div className="mt-4">
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <span className="icon-placeholder w-5 h-6">
//               <BsFillFuelPumpFill className="text-2xl text-slate-500" />
//             </span>
//             <p className="text-xs text-slate-500">{fuelCapacity}</p>
//           </div>

//           <div className="flex items-center space-x-2">
//             <span className="icon-placeholder w-5 h-6">
//               <FiSettings className="text-2xl text-slate-500" />
//             </span>
//             <p className="text-xs text-slate-500">{transmission}</p>
//           </div>

//           <div className="flex items-center space-x-2">
//             <span className="icon-placeholder w-5 h-6">
//               <GoPeople className="text-2xl text-slate-500" />
//             </span>
//             <p className="text-xs text-slate-500">{seatingCapacity}</p>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <p className="text-lg font-semibold mt-2">{price}</p>
//             <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
//           </div>

//           <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//             Rent Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCard;





"use client"

import React from "react";
import Image from "next/image";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import Link from "next/link"; // Add Link to redirect to Detail page

interface CarCardProps {
  name: string;
  type: string;
  imageUrl: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  price: number;
  originalPrice: string;
  id: string; // Adding the car ID to navigate
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  imageUrl,
  fuelCapacity,
  transmission,
  seatingCapacity,
  price,
  originalPrice,
  id, // id prop
}) => {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>

      <div className="mt-4 relative w-full h-40">
        <Image
          src={imageUrl || "/default-image.png"}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="icon-placeholder w-4 h-6">
              <BsFillFuelPumpFill className="text-xl text-slate-500" />
            </span>
            <p className="text-xs text-slate-500">{fuelCapacity}</p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="icon-placeholder w-4 h-6">
              <FiSettings className="text-xl text-slate-500" />
            </span>
            <p className="text-xs text-slate-500">{transmission}</p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="icon-placeholder w-4 h-6">
              <GoPeople className="text-xl text-slate-500" />
            </span>
            <p className="text-xs text-slate-500">{seatingCapacity}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-semibold mt-2">{price}</p>
            <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
          </div>

          {/* Modify Rent Now button with a Link to the detail page */}
          <Link href={`/detail/${id}`}> {/* Dynamic URL for car details */}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

