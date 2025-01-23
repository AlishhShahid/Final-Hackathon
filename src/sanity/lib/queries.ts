import { groq } from "next-sanity";

export const popular = groq`*[_type == "car" && "popular" in tags]{
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
}`;

export const recommended = groq`*[_type == "car" && "recommended" in tags]{
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
}`;

export const forCategory = groq`*[_type == "car"][0..8]{
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
}`;

export const forDetailPopular = groq`*[_type == "car" && "popular" in tags][0..2]{
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
}`;

export const forDetailRecommended = groq`*[_type == "car" && "recommended" in tags][0..2]{
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
}`;

export const rentalSummary = groq`*[_type == "car"]{
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
}`;
