"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, MapPin, Moon, Users, ArrowUpDown } from "lucide-react"
import { StakeModal } from "@/components/stake-modal"
import { exploreConfig } from "@/config/app-config"

// Mock property data
const mockProperties = [
  {
    id: "property-1",
    name: "Beachfront Villa in Bali",
    location: "Bali, Indonesia",
    country: "Indonesia",
    city: "Bali",
    description:
      "Luxurious beachfront villa with private pool and stunning ocean views. Perfect for families or groups.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "125000",
    nightsBooked: 342,
    reviews: 124,
    maxGuests: 8,
    pricePerNight: "15000",
    bookingUrl: "https://example.com/book/beachfront-villa",
    tokenSymbol: "BFVB",
    tokenPrice: 1.2,
    tokenAddress: "0x1234567890123456789012345678901234567890",
    contractAddress: "0x1234567890123456789012345678901234567890",
  },
  {
    id: "property-2",
    name: "Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    country: "USA",
    city: "Aspen",
    description:
      "Cozy mountain cabin with fireplace, hot tub, and breathtaking views of the Rockies. Ideal for winter sports enthusiasts.",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "85000",
    nightsBooked: 189,
    reviews: 89,
    maxGuests: 6,
    pricePerNight: "12000",
    bookingUrl: "https://example.com/book/mountain-cabin",
    tokenSymbol: "MCR",
    tokenPrice: 0.9,
    tokenAddress: "0x2345678901234567890123456789012345678901",
    contractAddress: "0x2345678901234567890123456789012345678901",
  },
  {
    id: "property-3",
    name: "Downtown Luxury Apartment",
    location: "New York City, USA",
    country: "USA",
    city: "New York City",
    description:
      "Modern luxury apartment in the heart of Manhattan. Walking distance to major attractions, restaurants, and shopping.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "95000",
    nightsBooked: 256,
    reviews: 156,
    maxGuests: 4,
    pricePerNight: "18000",
    bookingUrl: "https://example.com/book/downtown-apartment",
    tokenSymbol: "DLA",
    tokenPrice: 1.5,
    tokenAddress: "0x3456789012345678901234567890123456789012",
    contractAddress: "0x3456789012345678901234567890123456789012",
  },
  {
    id: "property-4",
    name: "Santorini Cliffside Villa",
    location: "Santorini, Greece",
    country: "Greece",
    city: "Santorini",
    description:
      "Stunning white villa perched on the cliffs of Santorini with infinity pool and panoramic views of the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "175000",
    nightsBooked: 410,
    reviews: 210,
    maxGuests: 6,
    pricePerNight: "22000",
    bookingUrl: "https://example.com/book/santorini-villa",
    tokenSymbol: "SCV",
    tokenPrice: 2.1,
    tokenAddress: "0x4567890123456789012345678901234567890123",
    contractAddress: "0x4567890123456789012345678901234567890123",
  },
  {
    id: "property-5",
    name: "Tropical Beachfront Bungalow",
    location: "Phuket, Thailand",
    country: "Thailand",
    city: "Phuket",
    description:
      "Charming beachfront bungalow surrounded by tropical gardens. Steps away from pristine white sand beaches.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "65000",
    nightsBooked: 178,
    reviews: 78,
    maxGuests: 4,
    pricePerNight: "9000",
    bookingUrl: "https://example.com/book/tropical-bungalow",
    tokenSymbol: "TBB",
    tokenPrice: 0.8,
    tokenAddress: "0x5678901234567890123456789012345678901234",
    contractAddress: "0x5678901234567890123456789012345678901234",
  },
  {
    id: "property-6",
    name: "Alpine Ski Chalet",
    location: "Chamonix, France",
    country: "France",
    city: "Chamonix",
    description:
      "Luxurious ski-in/ski-out chalet with panoramic views of Mont Blanc. Features a sauna, hot tub, and cozy fireplace.",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "145000",
    nightsBooked: 267,
    reviews: 132,
    maxGuests: 10,
    pricePerNight: "19000",
    bookingUrl: "https://example.com/book/alpine-chalet",
    tokenSymbol: "ASC",
    tokenPrice: 1.7,
    tokenAddress: "0x6789012345678901234567890123456789012345",
    contractAddress: "0x6789012345678901234567890123456789012345",
  },
  {
    id: "property-7",
    name: "Maldives Overwater Bungalow",
    location: "Malé, Maldives",
    country: "Maldives",
    city: "Malé",
    description:
      "Exclusive overwater bungalow with direct access to crystal clear waters. Perfect for honeymoons and romantic getaways.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2673&auto=format&fit=crop",
    stakedAmount: "210000",
    nightsBooked: 389,
    reviews: 201,
    maxGuests: 2,
    pricePerNight: "28000",
    bookingUrl: "https://example.com/book/maldives-bungalow",
    tokenSymbol: "MOB",
    tokenPrice: 2.4,
    tokenAddress: "0x7890123456789012345678901234567890123456",
    contractAddress: "0x7890123456789012345678901234567890123456",
  },
  {
    id: "property-8",
    name: "Tuscan Countryside Villa",
    location: "Florence, Italy",
    country: "Italy",
    city: "Florence",
    description:
      "Historic villa surrounded by vineyards and olive groves. Features a private pool, garden, and authentic Italian charm.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "155000",
    nightsBooked: 298,
    reviews: 167,
    maxGuests: 12,
    pricePerNight: "17000",
    bookingUrl: "https://example.com/book/tuscan-villa",
    tokenSymbol: "TCV",
    tokenPrice: 1.6,
    tokenAddress: "0x8901234567890123456789012345678901234567",
    contractAddress: "0x8901234567890123456789012345678901234567",
  },
  {
    id: "property-9",
    name: "Kyoto Traditional Machiya",
    location: "Kyoto, Japan",
    country: "Japan",
    city: "Kyoto",
    description:
      "Beautifully restored traditional Japanese townhouse with garden. Experience authentic Japanese living in the heart of Kyoto.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "110000",
    nightsBooked: 245,
    reviews: 118,
    maxGuests: 6,
    pricePerNight: "14000",
    bookingUrl: "https://example.com/book/kyoto-machiya",
    tokenSymbol: "KTM",
    tokenPrice: 1.3,
    tokenAddress: "0x9012345678901234567890123456789012345678",
    contractAddress: "0x9012345678901234567890123456789012345678",
  },
  {
    id: "property-10",
    name: "Barcelona Penthouse",
    location: "Barcelona, Spain",
    country: "Spain",
    city: "Barcelona",
    description:
      "Stunning penthouse with private terrace and views of Sagrada Familia. Modern design with Spanish flair.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2340&auto=format&fit=crop",
    stakedAmount: "135000",
    nightsBooked: 276,
    reviews: 142,
    maxGuests: 8,
    pricePerNight: "16000",
    bookingUrl: "https://example.com/book/barcelona-penthouse",
    tokenSymbol: "BPH",
    tokenPrice: 1.4,
    tokenAddress: "0x0123456789012345678901234567890123456789",
    contractAddress: "0x0123456789012345678901234567890123456789",
  },
]

// Helper function to format TRVL amounts
const formatTRVL = (amount: string) => {
  const num = Number.parseFloat(amount)
  return num.toLocaleString(undefined, { maximumFractionDigits: 0 })
}

// Helper function to format address
const formatAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

// Get unique countries and cities from properties
const getUniqueCountries = (properties: any[]) => {
  return [...new Set(properties.map((property) => property.country))].sort()
}

const getUniqueCities = (properties: any[], country: string | null) => {
  if (!country) return []
  return [...new Set(properties.filter((p) => p.country === country).map((property) => property.city))].sort()
}

export function ExplorePage() {
  const [allProperties, setAllProperties] = useState<any[]>([])
  const [loadedProperties, setLoadedProperties] = useState<any[]>([])
  const [visibleProperties, setVisibleProperties] = useState<any[]>([])
  const [filteredProperties, setFilteredProperties] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  // Filter and sort states
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"stakedAmount" | "pricePerNight" | "nightsBooked" | "tokenPrice">("stakedAmount")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Ref for infinite scrolling
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null)

  // Derived values
  const countries = getUniqueCountries(allProperties)
  const cities = getUniqueCities(allProperties, selectedCountry)

  // Initial load of properties
  useEffect(() => {
    const loadProperties = async () => {
      setIsLoading(true)
      try {
        // In a real app, you would query the blockchain for properties
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setAllProperties(mockProperties)

        // Load initial properties
        const initialProperties = mockProperties.slice(0, exploreConfig.initialLoadCount)
        setLoadedProperties(initialProperties)

        // Show only the initial display count
        setVisibleProperties(initialProperties.slice(0, exploreConfig.initialDisplayCount))

        // Check if there are more properties to load
        setHasMore(exploreConfig.initialLoadCount < mockProperties.length)
      } catch (error) {
        console.error("Error loading properties:", error)
        setAllProperties([])
        setLoadedProperties([])
        setVisibleProperties([])
      } finally {
        setIsLoading(false)
      }
    }

    loadProperties()
  }, [])

  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    // Only set up observer if we have properties and there are more to load
    if (!isLoading && hasMore) {
      const observer = new IntersectionObserver(
        (entries) => {
          // If the load more trigger is visible and we're not already loading
          if (entries[0].isIntersecting && !isLoadingMore && hasMore) {
            loadMoreProperties()
          }
        },
        {
          rootMargin: "100px", // Start loading before the element is fully visible
          threshold: 0.1,
        },
      )

      // Observe the trigger element if it exists
      const currentTrigger = loadMoreTriggerRef.current
      if (currentTrigger) {
        observer.observe(currentTrigger)
      }

      return () => {
        if (currentTrigger) {
          observer.unobserve(currentTrigger)
        }
      }
    }
  }, [hasMore, isLoadingMore, isLoading, loadedProperties.length, visibleProperties.length])

  // Load more properties when scrolling
  const loadMoreProperties = async () => {
    if (isLoadingMore || !hasMore) return

    setIsLoadingMore(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Calculate how many more properties to show
      const currentlyVisible = visibleProperties.length
      const newVisibleCount = currentlyVisible + exploreConfig.additionalLoadCount

      // If we need to load more properties from the source
      if (newVisibleCount > loadedProperties.length) {
        // Load more properties from the source
        const nextBatchIndex = loadedProperties.length
        const nextBatchSize = exploreConfig.additionalLoadCount
        const nextBatch = allProperties.slice(nextBatchIndex, nextBatchIndex + nextBatchSize)

        // Add the new batch to loaded properties
        const newLoadedProperties = [...loadedProperties, ...nextBatch]
        setLoadedProperties(newLoadedProperties)

        // Update visible properties
        setVisibleProperties(newLoadedProperties.slice(0, newVisibleCount))

        // Check if we've loaded all properties
        setHasMore(newLoadedProperties.length < allProperties.length)
      } else {
        // Just show more of the already loaded properties
        setVisibleProperties(loadedProperties.slice(0, newVisibleCount))
      }
    } catch (error) {
      console.error("Error loading more properties:", error)
    } finally {
      setIsLoadingMore(false)
    }
  }

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    let result = [...visibleProperties]

    // Apply country filter
    if (selectedCountry) {
      result = result.filter((property) => property.country === selectedCountry)
    }

    // Apply city filter
    if (selectedCity) {
      result = result.filter((property) => property.city === selectedCity)
    }

    // Apply sorting
    result.sort((a, b) => {
      let valueA, valueB

      if (sortBy === "tokenPrice") {
        valueA = a.tokenPrice
        valueB = b.tokenPrice
      } else {
        valueA = Number.parseFloat(a[sortBy])
        valueB = Number.parseFloat(b[sortBy])
      }

      return sortOrder === "asc" ? valueA - valueB : valueB - valueA
    })

    setFilteredProperties(result)
  }, [visibleProperties, selectedCountry, selectedCity, sortBy, sortOrder])

  // Handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCountry(value || null)
    setSelectedCity(null) // Reset city when country changes
  }

  // Handle city change
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCity(value || null)
  }

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "stakedAmount" | "pricePerNight" | "nightsBooked" | "tokenPrice"
    setSortBy(value)
  }

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  // Open stake modal
  const openStakeModal = (property: any) => {
    setSelectedProperty(property)
    setIsStakeModalOpen(true)
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Filters and Sorting */}
      <div className="bg-white border border-[#ECF0F3] rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Country Filter */}
          <div>
            <label htmlFor="country-filter" className="block text-sm font-medium text-[#0A1B27] mb-1">
              Country
            </label>
            <select
              id="country-filter"
              value={selectedCountry || ""}
              onChange={handleCountryChange}
              className="w-full px-3 py-2 border border-[#ECF0F3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#122736]"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label htmlFor="city-filter" className="block text-sm font-medium text-[#0A1B27] mb-1">
              City
            </label>
            <select
              id="city-filter"
              value={selectedCity || ""}
              onChange={handleCityChange}
              disabled={!selectedCountry}
              className="w-full px-3 py-2 border border-[#ECF0F3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#122736] disabled:bg-[#F5F7F9] disabled:cursor-not-allowed"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-[#0A1B27] mb-1">
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={handleSortChange}
              className="w-full px-3 py-2 border border-[#ECF0F3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#122736]"
            >
              <option value="stakedAmount">TRVL Staked</option>
              <option value="pricePerNight">Price per Night</option>
              <option value="nightsBooked">Nights Booked</option>
              <option value="tokenPrice">Token Price</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="flex items-end">
            <button
              onClick={toggleSortOrder}
              className="flex items-center justify-center w-full px-3 py-2 border border-[#ECF0F3] rounded-md hover:bg-[#F5F7F9]"
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              {sortOrder === "desc" ? "Highest First" : "Lowest First"}
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white border border-[#ECF0F3] rounded-lg overflow-hidden animate-pulse">
              <div className="h-64 bg-[#E0E5E9]"></div>
              <div className="p-6">
                <div className="h-6 bg-[#E0E5E9] rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-[#E0E5E9] rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-[#E0E5E9] rounded w-full mb-4"></div>
                <div className="h-10 bg-[#E0E5E9] rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredProperties.length > 0 ? (
        <div className="space-y-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white border border-[#ECF0F3] rounded-lg overflow-hidden shadow-sm">
              <div className="md:flex">
                <div className="md:w-2/5 relative">
                  <div className="h-full">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="object-cover w-full h-full"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold mb-2 text-[#0A1B27]">{property.name}</h2>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <Moon className="h-4 w-4 text-[#122736] mr-1" />
                        <span className="font-medium">{property.nightsBooked}</span>
                        <span className="text-[#828E97] text-sm ml-1">nights booked</span>
                      </div>
                      <a
                        href={`https://etherscan.io/address/${property.contractAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#122736] text-xs hover:underline mt-1"
                      >
                        View on Etherscan
                        <ExternalLink className="ml-1 h-2 w-2 inline" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-[#253947] mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <p className="text-[#253947] mb-4">{property.description}</p>

                  {/* First row of the grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-[#828E97]">Max Guests</div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-[#253947]" />
                        <span>{property.maxGuests}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[#828E97]">Price per Night</div>
                      <div className="font-semibold text-[#0A1B27]">{formatTRVL(property.pricePerNight)} TRVL</div>
                    </div>
                    <div className="flex items-end">
                      <a
                        href={property.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#122736] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
                      >
                        Book
                      </a>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-[#ECF0F3] my-4"></div>

                  {/* Second row of the grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-[#828E97]">TRVL Staked</div>
                      <div className="font-semibold text-[#0A1B27]">{formatTRVL(property.stakedAmount)} TRVL</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#828E97]">Token Price</div>
                      <div className="font-semibold text-[#0A1B27]">
                        1 {property.tokenSymbol} = {property.tokenPrice} TRVL
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => openStakeModal(property)}
                        className="inline-flex items-center justify-center w-full px-4 py-2 border border-[#122736] text-[#122736] rounded-md font-medium hover:bg-[#F5F7F9] transition-colors"
                      >
                        Stake & Unstake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Load more trigger */}
          {hasMore && (
            <div ref={loadMoreTriggerRef} className="py-8 text-center">
              {isLoadingMore ? (
                <div className="flex justify-center items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full bg-[#122736] animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-[#122736] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-[#122736] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              ) : (
                <button
                  onClick={loadMoreProperties}
                  className="px-4 py-2 border border-[#122736] text-[#122736] rounded-md font-medium hover:bg-[#F5F7F9] transition-colors"
                >
                  Load More Properties
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-[#ECF0F3] rounded-lg">
          <h2 className="text-xl font-medium text-[#0A1B27] mb-2">No properties found</h2>
          <p className="text-[#253947] mb-6">Try adjusting your filters to see more properties</p>
        </div>
      )}

      {/* Stake Modal */}
      {selectedProperty && (
        <StakeModal isOpen={isStakeModalOpen} onClose={() => setIsStakeModalOpen(false)} property={selectedProperty} />
      )}
    </div>
  )
}
