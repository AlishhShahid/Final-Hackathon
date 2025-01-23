import PickupSection from "./PickupSection";
import DropoffSection from "./DropoffSection";
import Image from "next/image";

function Third() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-1 py-2 sm:ml-20 bg-white rounded-lg shadow-md w-fit ml-5 ">

      <div className="flex-shrink-0">
        <PickupSection />
      </div>

      <div className="mx-8">
        <Image src="/Switch.png" alt="icon" width={160} height={80}/>
      </div>

      <div className="flex-shrink-0">
        <DropoffSection />
      </div>
    </div>
  );
}

export default Third;
