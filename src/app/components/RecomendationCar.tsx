import Link from "next/link";
// import CarRentalCard from "./CarRentalCard";
import QueryRecommended from "../queryRecommended/page";

function RecomendationCar() {
  return (
    <div className="px-8 py-8 bg-white relative">
      <h2 className="text-[16px] font-semibold text-[#90A3BF] mb-6">
        Recommendation Car
      </h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8 mb-12"> */}
      <div>


        <QueryRecommended/>

       
      </div>

      <div className="flex justify-center py-20 lg:py-28">
        <Link href={"/category"}>
          <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Show more cars
          </button>
        </Link>

        <p className="absolute right-8 text-[#90A3BF] text-14px font-medium">
          120 Car
        </p>
      </div>
    </div>
  );
}

export default RecomendationCar;
