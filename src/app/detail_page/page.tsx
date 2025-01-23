// "use client";

// import SideBar from "../components/SideBar";
// import Image from "next/image";
// import Link from "next/link";
// import QueryDetailPopular from "../queryDetailPopular/page";
// import QueryDetailRecommended from "../queryDetailRecommended/page";

// export default function Detailpage() {
//   return (
//     <div>
//       <div className="w-full flex">
//         <div className="first hidden sm:flex w-[25%]">
//           <SideBar />
//         </div>
//         <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//           <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
//             <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
//               <div>
//                 <Image src={"/View.png"} alt="" width={492} height={360} />
//               </div>
//               <div className=" flex items-center justify-between gap-2 lg:gap-2">
//                 <Image src={"/View 1.png"} alt="" width={148} height={124} />
//                 <Image src={"/View 2.png"} alt="" width={148} height={124} />
//                 <Image src={"/View 3.png"} alt="" width={148} height={124} />
//               </div>
//             </div>
//             <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
//               <Image
//                 src={"/Detail Car (1).png"}
//                 alt="Detail Car"
//                 width={492}
//                 height={508}
//                 className="w-full h-auto rounded-t-xl object-cover"
//               />

//               <div className="p-4 flex  items-center gap-4">
//                 <div className="flex items-center justify-between w-full">
//                   <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
//                     $80.00 /{" "}
//                     <span className="text-gray-500 text-sm lg:text-base">
//                       day $100.00
//                     </span>
//                   </h1>
//                 </div>
//                 <Link href={"/payment"}>
//                   <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
//                     Rent Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </section>
//           <section className=" w-full flex items-center justify-center">
//             <Image
//               src={"/Reviews.png"}
//               alt=""
//               width={1010}
//               height={452}
//               className=" hidden md:flex"
//             />
//             <Image
//               src={"/Reviews (1).png"}
//               alt=""
//               width={492}
//               height={384}
//               className=" md:hidden"
//             />
//           </section>

//           <div className="px-8 py-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-16px font-semibold text-[#90A3BF]">
//                 Recent Car
//               </h2>

//               <Link href={"/category"}>
//                 <button className="text-16px font-medium text-[#3563E9] hover:underline">
//                   View All
//                 </button>
//               </Link>
//             </div>

//             <div>
//               <QueryDetailPopular />
//             </div>
//           </div>

//           <div className="px-8 py-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-16px font-semibold text-[#90A3BF]">
//                 Recommendation Car
//               </h2>

//               <Link href={"/category"}>
//                 <button className="text-16px font-medium text-[#3563E9] hover:underline">
//                   View All
//                 </button>
//               </Link>
//             </div>
//             <div>
//               <QueryDetailRecommended />

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// // pages/detail/[id].tsx

// // import { GetServerSideProps } from "next";
// // import sanityClient from "@sanity/client";
// // import Image from "next/image";
// // import Link from "next/link";
// // // import { CarDetail } from "../../types/carData"; // Define CarDetail type

// // // Set up Sanity client
// // const sanity = sanityClient({
// //   projectId: "a5nqv9d2",
// //   dataset: "production",
// //   apiVersion: "2021-08-31",
// //   useCdn: true,
// // });

// // export interface CarDetail {
// //   _id: string;
// //   name: string;
// //   type: string;
// //   imageUrl: string;
// //   fuelCapacity: string;
// //   transmission: string;
// //   seatingCapacity: string;
// //   price: number;
// //   originalPrice: string;
// // }

// // // Fetch data server-side based on the dynamic [id] route
// // export const getServerSideProps: GetServerSideProps = async ({ params }) => {
// //   const { id } = params as { id: string };

// //   // Fetch the car details using Sanity client
// //   const carDetails: CarDetail[] = await sanity.fetch(`*[_id == "${id}"]`);
  
// //   // Check if car data is available
// //   if (!carDetails.length) {
// //     return { notFound: true }; // If not found, show 404
// //   }

// //   return {
// //     props: { carDetails: carDetails[0] }, // Passing car details as props
// //   };
// // };

// // const DetailPage = ({ carDetails }: { carDetails: CarDetail }) => {
// //   return (
// //     <div>
// //       <div className="w-full flex">
// //         <div className="first hidden sm:flex w-[25%]">
// //           {/* Sidebar Component */}
// //         </div>
// //         <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
// //           <section className="w-full flex flex-col md:flex-row gap-5 items-center justify-around">
// //             <div className="first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]">
// //               <div>
// //                 <Image
// //                   src={carDetails.imageUrl || "/default-image.png"}
// //                   alt={carDetails.name}
// //                   width={492}
// //                   height={360}
// //                 />
// //               </div>
// //               <div className="flex items-center justify-between gap-2 lg:gap-2">
// //                 <Image src={"/View 1.png"} alt="" width={148} height={124} />
// //                 <Image src={"/View 2.png"} alt="" width={148} height={124} />
// //                 <Image src={"/View 3.png"} alt="" width={148} height={124} />
// //               </div>
// //             </div>
// //             <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
// //               <Image
// //                 src={carDetails.imageUrl || "/default-image.png"}
// //                 alt="Detail Car"
// //                 width={492}
// //                 height={508}
// //                 className="w-full h-auto rounded-t-xl object-cover"
// //               />

// //               <div className="p-4 flex items-center gap-4">
// //                 <div className="flex items-center justify-between w-full">
// //                   <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
// //                     ${carDetails.price} /{" "}
// //                     <span className="text-gray-500 text-sm lg:text-base">
// //                       day ${carDetails.originalPrice}
// //                     </span>
// //                   </h1>
// //                 </div>
// //                 <Link href={"/payment"}>
// //                   <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white rounded-md w-full max-w-[180px] text-center">
// //                     Rent Now
// //                   </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           </section>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DetailPage;
