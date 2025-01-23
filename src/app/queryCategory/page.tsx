// "use client";
// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { GoPeople } from "react-icons/go";
// import { FiSettings } from "react-icons/fi";
// import { forCategory } from "@/sanity/lib/queries";
// import { Product } from "../../../types/carData";

// const sanity = sanityClient({
//   projectId: "a5nqv9d2",
//   dataset: "production",
//   apiVersion: "2021-08-31",
//   useCdn: true,
// });

// const QueryCategory: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const data = await sanity.fetch(forCategory);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error Fetching Products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="max-w-xs p-4 bg-white rounded-lg shadow-md"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-sm text-gray-500">{product.type}</p>
//               </div>
//               <button className="text-gray-400 hover:text-red-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="mt-4 relative w-full h-40">
//               <Image
//                 src={product.imageUrl || "/default-image.png"}
//                 alt={product.name}
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>

//             <div className="mt-4">
//               <div className="flex items-center space-x-5">
//                 <div className="flex items-center space-x-2">
//                   <span className="icon-placeholder w-5 h-6">
//                     <BsFillFuelPumpFill className="text-2xl  text-slate-500" />
//                   </span>
//                   <p className="text-xs  text-slate-500">
//                     {product.fuelCapacity}
//                   </p>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <span className="icon-placeholder w-5 h-6">
//                     <FiSettings className="text-2xl   text-slate-500" />
//                   </span>
//                   <p className="text-xs  text-slate-500">
//                     {product.transmission}
//                   </p>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <span className="icon-placeholder w-5 h-6">
//                     <GoPeople className="text-2xl   text-slate-500" />
//                   </span>
//                   <p className="text-xs  text-slate-500 ">
//                     {product.seatingCapacity}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-lg font-semibold mt-2">{`${product.price}`}</p>
//                   <p className="text-sm text-gray-400 line-through">
//                     {product.originalPrice}
//                   </p>
//                 </div>

//                 <Link href={"/detail"}>
//                   <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//                     Rent Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QueryCategory;





"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { GoPeople } from "react-icons/go";
// import { FiSettings } from "react-icons/fi";
import { forCategory } from "@/sanity/lib/queries";
import { Product } from "../../../types/carData";
import CarCard from "../components/CarCard";




const sanity = sanityClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

const QueryCategory: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await sanity.fetch(forCategory);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <CarCard
            key={product._id}
            id={product._id} // Pass the car's id to the CarCard
            name={product.name}
            type={product.type}
            imageUrl={product.imageUrl}
            fuelCapacity={product.fuelCapacity}
            transmission={product.transmission}
            seatingCapacity={product.seatingCapacity}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default QueryCategory;



