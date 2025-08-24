import { useState, useEffect } from "react";
import { toast } from "sonner";
import DestinationCard from "../components/DestinationCard";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/destinations");
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const destinationData = await response.json();
        setDestinations(destinationData.destinations);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDestinations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5555/api/destinations/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        toast.error("Failed to delete");
      }
      setDestinations((prev) => prev.filter((d) => d._id !== id));
    } catch (error) {
      console.error("Error deleting destination", error);
      toast.error("Failed deleting destination");
    }
  };

  const filteredByEstimatedCost = [...destinations].sort(
    (a, b) => a.estimatedCost - b.estimatedCost
  );

  const visitedDestinations = destinations.filter((destination) => destination.visited === true);

  const cheapestUnvisitedDestination = destinations
    .filter((destination) => !destination.visited)
    .sort((a, b) => a.estimatedCost - b.estimatedCost)[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            ✈️ My Travel Bucket List ✈️
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing destinations and plan your next adventure
          </p>
        </div>

        {/* Destinations by Cost Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-1 h-8 mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">💰 Destinations by Cost</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {filteredByEstimatedCost.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏝️</div>
                <p className="text-gray-500 text-lg">No destinations yet</p>
                <p className="text-gray-400">Start planning your next adventure!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredByEstimatedCost.map((item) => (
                  <DestinationCard
                    key={item._id}
                    destination={item}
                    onDelete={handleDelete}
                    isDetailsOn={false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Visited Destinations Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-1 h-8 mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">✅ Visited Destinations</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {visitedDestinations.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-500 text-lg">No visited destinations yet</p>
                <p className="text-gray-400">Time to start exploring!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visitedDestinations.map((item) => (
                  <DestinationCard
                    key={item._id}
                    destination={item}
                    onDelete={handleDelete}
                    isDetailsOn={false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cheapest Unvisited Destination Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-1 h-8 mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">🎯 Next Budget-Friendly Adventure</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {!cheapestUnvisitedDestination ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No unvisited destinations</p>
                <p className="text-gray-400">Add some new places to explore!</p>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                    Best Deal! 🏆
                  </div>
                  <DestinationCard
                    key={cheapestUnvisitedDestination._id}
                    destination={cheapestUnvisitedDestination}
                    onDelete={handleDelete}
                    isDetailsOn={false}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
