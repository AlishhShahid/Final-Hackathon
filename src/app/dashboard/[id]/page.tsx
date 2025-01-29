"use client";
import DashboardSidebar from "@/app/components/DashboardSidebar";
import DashboardLast from "@/app/components/DashboardLast";
import { rentalSummary } from "@/sanity/lib/queries";
import { Product } from "../../../../types/carData";
import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { notFound } from "next/navigation";
import Image from "next/image";

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

interface PaymentPageProps {
  params: { id: string };
}

const PaymentPage: React.FC<PaymentPageProps> = ({ params }) => {
  const { id } = params;

  const [carDetails, setCarDetails] = useState<CarDetail | null>(null);
  const [setProducts] = useState<Product[]>([]);
  const [pickupLocation, setPickupLocation] = useState("Saddar-Town");
  const [pickupDate, setPickupDate] = useState("2022-07-20");
  const [pickupTime, setPickupTime] = useState("07:00");
  const [dropoffLocation, setDropoffLocation] = useState("Saddar-Town");
  const [dropoffDate, setDropoffDate] = useState("2025-01-21");
  const [dropoffTime, setDropoffTime] = useState("01:00");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData: CarDetail[] = await sanity.fetch(`
          *[_id == "${id}"]{
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
          }
        `);

        if (!carData.length) {
          notFound();
        } else {
          setCarDetails(carData[0]);
        }

        const productData: Product[] = await sanity.fetch(rentalSummary);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full bg-gray-100 border-r pb-6 border-gray-200">
        <DashboardSidebar />
      </div>
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 space-y-6">
          <h2 className="text-lg font-semibold">Details Rental</h2>

          <div className="relative w-full h-64 bg-gray-200 rounded-lg">
            <Image
              src="/Maps.png"
              alt="Map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="mt-4 relative h-20 w-56">
              <Image
                src={carDetails.imageUrl}
                alt={carDetails.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold  text-ellipsis whitespace-nowrap">
                {carDetails.name}
              </h3>
              <p className="text-xs  text-slate-500">{carDetails.type}</p>
              <p className="text-xs mt-3  text-slate-500">#{carDetails._id}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Pick - Up</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Location
                </label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                >
                  <option value="Defence">Defence</option>
                  <option value="Saddar-Town">Saddar-Town</option>
                  <option value="Clifton">Clifton</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Date</label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Drop - Off</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Location
                </label>
                <select
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                >
                  <option value="Defence">Defence</option>
                  <option value="Saddar-Town">Saddar-Town</option>
                  <option value="Clifton">Clifton</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Date</label>
                <input
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Time</label>
                <input
                  type="time"
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total Rental Price</span>
              <span>{carDetails.price}</span>
            </div>
            <p className="text-sm  text-slate-500">
              Overall price and includes rental discount
            </p>
          </div>
        </div>
      </main>

      <div className="min-h-screen border-gray-200 bg-gray-50 p-6">
        <DashboardLast />
      </div>
    </div>
  );
};

export default PaymentPage;
