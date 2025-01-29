import React from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import SideBar from "@/app/components/SideBar";
import QueryDetailPopular from "@/app/queryDetailPopular/page";
import QueryDetailRecommended from "@/app/queryDetailRecommended/page";

const sanity = sanityClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

export interface CarDetail {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  price: number;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
}

export default async function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const carDetails: CarDetail[] = await sanity.fetch(`*[_id == "${id}"]{
                _id,
                name,
                brand,
                type,
                fuelCapacity,
                transmission,
                seatingCapacity,
                "price": pricePerDay,
                originalPrice,
                tags,
                "imageUrl": image.asset->url
              }`);

  console.log(carDetails);

  if (!carDetails.length) {
    notFound();
  }

  const car: CarDetail = carDetails[0];

  return (
    <div>
      <div className="w-full flex">
        <div className="first hidden sm:flex w-[25%]">
          <SideBar />
        </div>

        <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
          <section className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex flex-col w-full lg:max-w-[492px] lg:max-h-[700px] bg-white justify-between rounded-xl shadow-md">
              <div>
                <h3 className="text-2xl p-7 font-semibold text-slate-900 mb-2">
                  Drive Your Way, On Your Terms.
                </h3>
              </div>
              <div className="items-center p-4 justify-between gap-2 lg:gap-2">
                <div className="mt-16 mb-16 relative w-full h-28">
                  <Image
                    src={car.imageUrl || "/default-image.png"}
                    alt={car.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Image
                    src={"/View 2.png"}
                    alt=""
                    width={200}
                    height={124}
                    className="w-[150px] lg:w-[200px]"
                  />
                  <Image
                    src={"/View 3.png"}
                    alt=""
                    width={200}
                    height={124}
                    className="w-[150px] lg:w-[200px]"
                  />
                </div>
              </div>
            </div>

            <div className="first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]">
              <div>
                <div className="max-w-md lg:max-h-[700px] p-6 bg-white lg:-mt-3 rounded-xl shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-4xl font-semibold mb-2">
                        {car.name}
                      </h3>
                      <p className="text-xl text-gray-500">{car.type}</p>
                    </div>
                  </div>

                  <div className="mt-16 mb-16 relative w-full h-40">
                    <Image
                      src={car.imageUrl || "/default-image.png"}
                      alt={car.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center space-x-3 lg:space-x-10">
                      <div className="flex items-center space-x-2">
                        <span className="icon-placeholder w-5 h-6 lg:w-8 lg:h-9">
                          <BsFillFuelPumpFill className="text-2xl lg:text-4xl text-slate-500" />
                        </span>
                        <p className="text-lg text-slate-500">
                          {car.fuelCapacity}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="icon-placeholder w-5 h-6 lg:w-8 lg:h-9">
                          <FiSettings className="text-2xl lg:text-4xl text-slate-500" />
                        </span>
                        <p className="text-lg text-slate-500">
                          {car.transmission}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="icon-placeholder w-5 h-6 lg:w-8 lg:h-9">
                          <GoPeople className="text-2xl lg:text-4xl text-slate-500" />
                        </span>
                        <p className="text-lg text-slate-500">
                          {car.seatingCapacity}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-10">
                      <div>
                        <p className="lg:text-3xl text-2xl font-semibold mt-3">
                          {car.price}
                        </p>
                        <p className="lg:text-xl text-lg text-slate-500 line-through">
                          {car.originalPrice}
                        </p>
                      </div>

                      <Link href={`/payment/${id}`}>
                        <button className="lg:px-10 lg:py-4 px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex items-center justify-center mt-5">
            <Image
              src={"/Reviews.png"}
              alt=""
              width={1010}
              height={452}
              className="hidden md:flex"
            />
            <Image
              src={"/Reviews (1).png"}
              alt=""
              width={492}
              height={384}
              className="md:hidden"
            />
          </section>

          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-16px font-semibold text-[#90A3BF]">
                Recent Car
              </h2>

              <Link href={"/category"}>
                <button className="text-16px font-medium text-[#3563E9] hover:underline">
                  View All
                </button>
              </Link>
            </div>

            <div>
              <QueryDetailPopular />
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-16px font-semibold text-[#90A3BF]">
                Recommendation Car
              </h2>

              <Link href={"/category"}>
                <button className="text-16px font-medium text-[#3563E9] hover:underline">
                  View All
                </button>
              </Link>
            </div>
            <div>
              <QueryDetailRecommended />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
