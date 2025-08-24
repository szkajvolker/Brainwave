import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl">✈️</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              TravelBucket
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              to={"/home"}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">🏠</span>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  Home
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
              to={"/create"}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">➕</span>
                <span>Add Destination</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
