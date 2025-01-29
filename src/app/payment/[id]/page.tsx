
"use client";
import React, { useState, useEffect } from "react";
import BillingInfo from "@/app/components/BillingInfo";
import RentalInfo from "@/app/components/RentalInfo";
import Payment from "@/app/components/Payment";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "@sanity/client";
import { notFound } from "next/navigation";

const sanity = sanityClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

interface CarDetail {
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

export default function PaymentPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [car, setCar] = useState<CarDetail | null>(null);
  const [isMarketingChecked, setIsMarketingChecked] = useState<boolean>(false);
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCarDetails() {
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

      if (!carDetails.length) {
        notFound();
      } else {
        setCar(carDetails[0]);
      }
    }

    fetchCarDetails();
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isTermsChecked) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    if (car) {
      alert(`Thank you! Your rental for ${car.name} is confirmed.`);
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center lg:justify-start mb-16 sm:p-6 flex-col lg:flex-row">
      <div className="w-full lg:w-7/12 mx-auto lg:mx-0 p-4">
        <div className="space-y-8">
          <BillingInfo />
          <RentalInfo />
          <Payment />

          <div className="p-6 max-w-3xl bg-white shadow-md rounded-lg relative">
            <div className="absolute top-4 right-6 text-gray-400">
              Step 4 of 4
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Confirmation
            </h2>
            <p className="text-gray-400 mb-4">
              We are getting to the end. Just a few clicks and your rental is
              ready!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="border border-gray-300 flex items-center space-x-2 w-full p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  checked={isMarketingChecked}
                  onChange={() => setIsMarketingChecked(!isMarketingChecked)}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  I agree with sending Marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-300 w-full p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  checked={isTermsChecked}
                  onChange={() => setIsTermsChecked(!isTermsChecked)}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
              <Link href={`/dashboard/${id}`}>
                <button
                  type="submit"
                  className="px-4 mt-8 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2"
                >
                  Rent Now
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <RentalSummary car={car} />
    </div>
  );
}

function RentalSummary({ car }: { car: CarDetail }) {
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromo = () => {
    alert(`Promo code applied: ${promoCode}`);
  };

  return (
    <div className="rental-summary mt-5 w-full lg:w-1/3 lg:ml-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-lg font-semibold">Rental Summary</h2>
        <p className="text-sm text-gray-500">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className="flex items-center gap-4">
          <div className="mt-4 relative w-full h-40">
            <Image
              src={car.imageUrl || "/default-image.png"}
              alt={car.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold">{car.name}</h3>
            <div className="flex items-center text-yellow-500 space-x-1">
              <span className="text-sm">★★★★★</span>
              <span className="text-slate-500 text-xs">440+ Reviewer</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{car.price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>$0</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Apply promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-grow border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleApplyPromo}
            className="text-white bg-blue-500 rounded-lg hover:bg-blue-600 text-sm font-medium py-2 px-4 transition"
          >
            Apply now
          </button>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total Rental Price</span>
            <span>{car.price}</span>
          </div>
          <p className="text-sm text-slate-500">
            Overall price and includes rental discount
          </p>
        </div>
      </div>
    </div>
  );
}
