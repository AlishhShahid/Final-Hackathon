import Image from 'next/image';
import Link from "next/link";


export default function CarRentalCard({name, type, image1, image2, price, cutPrice} : {name:string; type:string; image1:string; image2:string; price:string; cutPrice:string;}) {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      <div className="mt-4 relative w-full h-40">
        <Image
          src={image1}
          alt="All New Rush Car"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div>
            <Image 
              src={image2} 
              alt="Specifications" 
              width={305} 
              height={0} 
            />
        
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-lg font-semibold">{price}<span className="text-sm font-normal">/ day</span></p>
          <p className="text-gray-400 line-through text-sm">{cutPrice}</p>
        </div>
        {/* github pr update krna h ye link */}
        <Link href={"/detail"}> 
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Rent Now
        </button>
        </Link>
      </div>
    </div>
  );
}







