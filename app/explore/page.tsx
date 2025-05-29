"use client"
import type { Property } from "@/types"
import Image from "next/image"

const properties: Property[] = [
  {
    id: 1,
    name: "Luxury Villa",
    location: "Malibu, CA",
    price: 12000000,
    image: "/villa.jpg",
  },
  {
    id: 2,
    name: "Modern Apartment",
    location: "New York, NY",
    price: 3500000,
    image: "/apartment.jpg",
  },
  {
    id: 3,
    name: "Cozy Cottage",
    location: "Aspen, CO",
    price: 5000000,
    image: "/cottage.jpg",
  },
]

const ExplorePage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Explore Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((property) => (
          <div key={property.id} className="border rounded-lg shadow-md">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.name}
              className="object-cover"
              width={600}
              height={300}
              style={{ height: "300px", width: "100%" }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-lg font-bold">${property.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExplorePage
