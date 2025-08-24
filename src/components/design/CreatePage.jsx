import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [bestSeason, setBestSeason] = useState("");
  const [visited, setVisited] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !country) {
      toast.error("Please fill all required fields!");
    }
    const destinationData = {
      name,
      country,
      img,
      estimatedCost,
      bestSeason,
      visited,
    };
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5555/api/destinations/", {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(destinationData),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      toast.success("Successfully created new destination");
      await delay(2000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      navigate("/home");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center space-x-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-700 font-medium">Creating your destination...</span>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✈️</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Add New Destination
          </h2>
          <p className="text-gray-600 text-lg">Add an amazing place to your travel bucket list</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center text-gray-700 font-medium">
                <span className="text-xl mr-2">🏛️</span>
                Destination Name *
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                type="text"
                id="name"
                placeholder="e.g., Eiffel Tower, Machu Picchu"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Country Field */}
            <div className="space-y-2">
              <label htmlFor="country" className="flex items-center text-gray-700 font-medium">
                <span className="text-xl mr-2">🌍</span>
                Country *
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                type="text"
                id="country"
                placeholder="e.g., France, Peru"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            {/* Image Field */}
            <div className="space-y-2">
              <label htmlFor="img" className="flex items-center text-gray-700 font-medium">
                <span className="text-xl mr-2">📸</span>
                Picture URL
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                type="text"
                id="img"
                placeholder="https://example.com/image.jpg"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>

            {/* Estimated Cost Field */}
            <div className="space-y-2">
              <label
                htmlFor="estimatedCost"
                className="flex items-center text-gray-700 font-medium"
              >
                <span className="text-xl mr-2">💰</span>
                Estimated Cost (EUR)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                type="number"
                id="estimatedCost"
                placeholder="e.g., 1500"
                value={estimatedCost}
                onChange={(e) => setEstimatedCost(e.target.value)}
              />
            </div>

            {/* Best Season Field */}
            <div className="space-y-2">
              <label htmlFor="bestSeason" className="flex items-center text-gray-700 font-medium">
                <span className="text-xl mr-2">🌟</span>
                Best Season to Visit
              </label>
              <select
                id="bestSeason"
                value={bestSeason}
                onChange={(e) => setBestSeason(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="">Select a season</option>
                <option value="Spring">🌸 Spring</option>
                <option value="Summer">☀️ Summer</option>
                <option value="Autumn">🍂 Autumn</option>
                <option value="Winter">❄️ Winter</option>
              </select>
            </div>

            {/* Visited Checkbox */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <span className="text-xl mr-2">✅</span>
                Already Visited?
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="visited"
                  checked={visited}
                  onChange={(b) => setVisited(b.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="visited" className="text-gray-700 cursor-pointer">
                  {visited ? "Yes, I've been there! 🎉" : "Not yet, it's on my bucket list 🎯"}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
                  !name || !country
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                }`}
                disabled={!name || !country}
                type="submit"
              >
                {!name || !country ? (
                  <span className="flex items-center justify-center">
                    <span className="text-xl mr-2">⚠️</span>
                    Please fill required fields
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="text-xl mr-2">🚀</span>
                    Add to Bucket List
                  </span>
                )}
              </button>
            </div>

            {/* Required Fields Note */}
            <div className="text-center text-sm text-gray-500">
              <span className="text-red-500">*</span> Required fields
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
