import { Fuel, Settings, Users } from "lucide-react"; 
import Image from "next/image";

function PopularOne() {
  return (
    <div className="w-[304px] bg-white shadow-md rounded-lg p-6 space-y-4">

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-[#131313]">Koenigsegg</h3>
          <p className="text-sm text-[#90A3BF]">Sport</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-500 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/car-image.png" 
          alt="Koenigsegg"
          className="w-full h-auto"
        />
      </div>

      <div className="flex justify-between text-sm text-[#90A3BF]">
        <div className="flex items-center space-x-1">
          <Fuel className="w-5 h-5 text-[#3563E9]" />
          <span>90L</span>
        </div>
        <div className="flex items-center space-x-1">
          <Settings className="w-5 h-5 text-[#3563E9]" />
          <span>Manual</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-5 h-5 text-[#3563E9]" />
          <span>2 People</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-[#131313]">
          $99.00<span className="text-sm font-normal">/day</span>
        </p>
        <button className="px-4 py-2 bg-[#3563E9] text-white text-sm rounded-lg hover:bg-[#254bc9] transition">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default PopularOne;
