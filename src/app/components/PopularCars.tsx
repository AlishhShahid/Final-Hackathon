
import Link from "next/link";
// import CarRentalCard from "./CarRentalCard";
import QueryPopular from "../queryPopular/page";

function PopularCars() {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-16px font-semibold text-[#90A3BF]">Popular Car</h2>

        <Link href={"/category"}>
          <button className="text-16px font-medium text-[#3563E9] hover:underline">
            View All
          </button>
        </Link>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-4 gap-6"> */}
      <div>

      <QueryPopular />
        
      </div>
    </div>
  );
}

export default PopularCars;
