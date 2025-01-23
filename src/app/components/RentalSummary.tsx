// import Image from 'next/image';
// import { useState } from 'react';

// const RentalSummary = () => {
//   const [promoCode, setPromoCode] = useState('');

//   const handleApplyPromo = () => {
//     // Handle promo code logic here
//     alert(`Promo code applied: ${promoCode}`);
    
//   };

//   interface RentalSummaryProp {
//     name: string;
//     type: string;
//     imageUrl: string;
//     fuelCapacity: string;
//     transmission: string;
//     seatingCapacity: string;
//     price: number;
//     originalPrice: string;
//     id: string; // Adding the car ID to navigate
//   }
  
//   const RentalSummary: React.FC<RentalSummaryProp> = ({
//     name,
//     type,
//     imageUrl,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     price,
//     originalPrice,
//     id, // id prop
//   }) => {

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
//       <h2 className="text-lg font-semibold">Rental Summary</h2>
//       <p className="text-sm text-gray-500">
//         Prices may change depending on the length of the rental and the price of your rental car.
//       </p>

//       <div className="flex items-center gap-4">
//         <div className="mt-4 relative w-full h-40">
//                 <Image
//                   src={imageUrl || "/default-image.png"}
//                   alt={name}
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//         <div className="w-20 h-14 relative">
//           <Image
//             src="/car-image.png" // Replace with your image path
//             alt="Nissan GT - R"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>

//         <div>
//           <h3 className="text-base font-medium">Nissan GT – R</h3>
//           <div className="flex items-center text-yellow-500 space-x-1">
//             <span className="text-sm">★★★★★</span>
//             <span className="text-gray-400 text-xs">440+ Reviewer</span>
//           </div>
//         </div>
//       </div>

//       <div className="border-t pt-4">
//         <div className="flex justify-between text-sm">
//           <span>Subtotal</span>
//           <span>$80.00</span>
//         </div>
//         <div className="flex justify-between text-sm">
//           <span>Tax</span>
//           <span>$0</span>
//         </div>
//       </div>

//       <div className="flex gap-2 mt-4">
//         <input
//           type="text"
//           placeholder="Apply promo code"
//           value={promoCode}
//           onChange={(e) => setPromoCode(e.target.value)}
//           className="flex-grow border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={handleApplyPromo}
//           className="bg-indigo-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
//         >
//           Apply now
//         </button>
//       </div>

//       <div className="border-t pt-4">
//         <div className="flex justify-between items-center font-semibold text-lg">
//           <span>Total Rental Price</span>
//           <span>$80.00</span>
//         </div>
//         <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
//       </div>
//     </div>
//   );
// }
// }

// export default RentalSummary;
