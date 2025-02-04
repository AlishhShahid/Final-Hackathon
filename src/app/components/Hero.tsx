
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full lg:p-7 p-5 flex justify-between items-center ">
      <div className="flex flex-col sm:flex-row sm:space-x-8 max-w-4xl">
        <div className="bg-[#54A6FF] text-white lg:p-8 p-5 rounded-2xl lg:max-w-[580px] lg:h-[330px] max-w-[350px] h-[320px] mx-auto relative">
          <h1 className="lg:text-4xl text-2xl font-medium">The Best Platform <br /> for <span className="text-blue-200">Car Rental</span></h1>
          <p className="mt-4 text-base">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <button className="mt-4 bg-[#3563E9] hover:bg-blue-700 text-white font-bold lg:py-2 lg:px-4 py-2 px-3 rounded-lg">
            Rental Car
          </button>
          <div className="relative lg:w-[600px] lg:h-[100px] w-[400px] h-[80px] mt-2 lg:mt-0">
            <Image 
              src="/01.png" 
              alt="Car Image"
              layout="fill"
              objectFit="contain"
              className="absolute bottom-0"
            />
          </div>
        </div>

        <div className="hidden sm:block bg-[#3563E9] text-white p-8 rounded-2xl max-w-[580px] h-[330px] mx-auto relative">
          <h1 className="text-4xl font-medium">Easy way to rent a <br /> car at a low price</h1>
          <p className="mt-4 text-base">Providing cheap car rental services<br />  and safe and comfortable facilities.</p>
          <button className="mt-4 bg-[#54A6FF] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Rental Car
          </button>
          <div className="relative w-[590px] h-[90px]">
            <Image 
              src="/02.png" 
              alt="Car Image"
              layout="fill"
              objectFit="contain"
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
