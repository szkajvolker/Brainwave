import { useEffect } from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination, onDelete, isDetailsOn }) => {
  useEffect(() => {}, []);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      {isDetailsOn ? (
        <div className="p-6">
          {/* Header with visited status */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{destination.name}</h2>
              <div className="flex items-center text-gray-600">
                <span className="text-lg">📍</span>
                <h3 className="ml-1 text-lg font-semibold">{destination.country}</h3>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">{destination.visited === true ? "✅" : "❌"}</span>
            </div>
          </div>

          {/* Image */}
          <div className="mb-4 relative overflow-hidden rounded-lg">
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
              <span className="text-gray-700 font-medium">💰 Estimated Cost:</span>
              <span className="text-green-600 font-bold text-lg">
                {destination.estimatedCost} EUR
              </span>
            </div>
            <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
              <span className="text-gray-700 font-medium">🌟 Best Season:</span>
              <span className="text-blue-600 font-semibold">{destination.bestSeason}</span>
            </div>
            <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
              <span className="text-gray-700 font-medium">Status:</span>
              <span
                className={`font-semibold ${
                  destination.visited ? "text-green-600" : "text-orange-600"
                }`}
              >
                {destination.visited === true ? "Visited" : "Not Visited"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              <span className="text-2xl bg-white/80 backdrop-blur-sm rounded-full p-1">
                {destination.visited === true ? "✅" : "🎯"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">{destination.name}</h2>
              <div className="flex items-center text-gray-600">
                <span className="text-sm">📍</span>
                <h3 className="ml-1 text-sm font-medium truncate">{destination.country}</h3>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-2 rounded-lg">
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-600 mr-1">💰</span>
                  <span className="text-green-700 font-bold">{destination.estimatedCost} EUR</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <Link
                to={`/${destination._id}`}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                📋 Details
              </Link>
              <button
                onClick={() => onDelete(destination._id)}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
