"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { GoPeople } from "react-icons/go";
// import { FiSettings } from "react-icons/fi";
import { recommended } from "@/sanity/lib/queries";
import { Product } from "../../../types/carData";
import CarCard from "../components/CarCard";




const sanity = sanityClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

const QueryRecommended: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await sanity.fetch(recommended);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <CarCard
            key={product._id}
            id={product._id} // Pass the car's id to the CarCard
            name={product.name}
            type={product.type}
            imageUrl={product.imageUrl}
            fuelCapacity={product.fuelCapacity}
            transmission={product.transmission}
            seatingCapacity={product.seatingCapacity}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default QueryRecommended;



