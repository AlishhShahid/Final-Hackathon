import { Search, Settings2 } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 bg-white shadow-md">
      {/* Logo and Profile Section */}
      <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
      <Link href={"/"}>
        <h1 className="font-bold text-[#3563E9] text-[24px]">MORENT</h1>
        </Link>
        <Image className="w-8 h-8 rounded-full sm:hidden" src="/one.png" alt="Profile" width={32} height={32}/>
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center w-full sm:w-[450px]">
        <Search className="absolute left-4 w-5 h-5 text-[#596780]" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full py-2 pl-10 pr-10 text-sm border text-[#596780] rounded-lg sm:rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Settings2 className="absolute right-4 w-5 h-5 text-[#596780] cursor-pointer hover:text-blue-500" />
      </div>

      {/* Icons Section */}
      <div className="hidden sm:flex items-center space-x-6">
        <Image
          src="/Like.png"
          alt="Heart Icon"
          width={24} 
          height={24} 
          className="cursor-pointer"
        />
        <Image
          src="/Notification.png"
          alt="Notification Icon"
          width={24} 
          height={24} 
          className="cursor-pointer"
        />
        <Image
          src="/Settings.png"
          alt="Settings Icon"
          width={24} 
          height={24} 
          className="cursor-pointer"
        />
        <Image
          src="/one.png"
          alt="Profile"
          width={32}  
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
