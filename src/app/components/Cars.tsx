
import QueryCategory from "../queryCategory/page";
// import CarRentalCard from "./CarRentalCard";

function Cars() {
  return (
    <div className="p-6 bg-gray-100">
      <div>
      {/* <div className="grid sm:grid-cols-3 grid-cols-1 gap-4"> */}

      <QueryCategory/>
        {/* <CarRentalCard
          name="Koenigsegg"
          type="Sport"
          image1="/01.png"
          image2="/Spesification1.png"
          price="$99.00"
          cutPrice=""
        />

        <CarRentalCard
          name="Nissan GT - R"
          type="Sport"
          image1="/02.png"
          image2="/Spesification2.png"
          price="$80.00"
          cutPrice="$100.00"
        />

        <CarRentalCard
          name="Rolls - Royce"
          type="Sport"
          image1="/03.png"
          image2="/Spesification3.png"
          price="$96.00"
          cutPrice=""
        />

        <CarRentalCard
          name="All New Rush"
          type="SUV"
          image1="/05.png"
          image2="/Spesification4.png"
          price="$72.00"
          cutPrice="$80.00"
        />

        <CarRentalCard
          name="CR  - V"
          type="SUV"
          image1="/06.png"
          image2="/Spesification5.png"
          price="$80.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="All New Terios"
          type="SUV"
          image1="/07.png"
          image2="/Spesification6.png"
          price="$74.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="MG ZX Exclusice"
          type="Hatchback"
          image1="/09.png"
          image2="/Spesification8.png"
          price="$76.00"
          cutPrice="$80.00"
        />

        <CarRentalCard
          name="New MG ZS"
          type="SUV"
          image1="/10.png"
          image2="/Spesification5.png"
          price="$80.00"
          cutPrice=" "
        />

        <CarRentalCard
          name="MG ZX Excite"
          type="Hatchback"
          image1="/11.png"
          image2="/Spesification9.png"
          price="$74.00"
          cutPrice=" "
        /> */}
      </div>

      <div className="flex justify-center py-28">
      <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Show more cars
        </button>
        <p className="absolute right-8 text-[#90A3BF] text-14px font-medium">
          120 Car
        </p>
      </div>
    </div>
  );
}

export default Cars;
