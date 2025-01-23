import Image from "next/image";

function Hero() {
  return (
    <div className="w-full p-10 flex flex-col sm:flex-row justify-between">
      {/* Images Container */}
      <div className="flex flex-col sm:flex-row sm:space-x-8 max-w-4xl">
        {/* Ad 1 for small and large screens */}
        <Image
          src="/Ads 1.png"
          alt="Ad Image 1"
          width={610}
          height={325} 
          className="w-full sm:w-[610px] h-auto sm:h-[325px] object-cover"
        />
        {/* Ad 2 visible only on large screens */}
        <Image
          src="/Ads 2.png"
          alt="Ad Image 2"
          width={610}
          height={325} 
          className="hidden sm:block w-[610px] h-[325px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;



 