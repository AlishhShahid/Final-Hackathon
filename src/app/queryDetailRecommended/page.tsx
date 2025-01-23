
"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { Product } from "../../../types/carData";
import CarCard from "../components/CarCard";
import {forDetailRecommended } from "@/sanity/lib/queries";




const sanity = sanityClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

const QueryDetailRecommended: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await sanity.fetch(forDetailRecommended);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <CarCard
            key={product._id}
            id={product._id}
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

export default QueryDetailRecommended;

