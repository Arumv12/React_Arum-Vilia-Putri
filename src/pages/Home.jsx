import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f3f1e7]">
      {/* Logo Section */}
      <div className="relative w-full h-auto mb-8 flex flex-col items-center">
        {/* Logo */}
        <div className="w-40 h-40">
          <img
            src=""
            alt="Coffee Shop Logo"
            className="w-auto h-auto max-w-full max-h-full rounded-full border-4 border-[#7f5539] shadow-md bg-white"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center mt-6"> {/* Tambahkan margin top di teks */}
        <h1 className="text-5xl font-bold text-[#7f5539] mb-2">
          Welcome to Vivi Coffee
        </h1>
        <p className="text-[#4a4a4a] text-lg">
          Your perfect spot for coffee and relaxation.
        </p>
      </div>

      {/* View Menu Button */}
      <div className="mb-8 mt-6">
        <Link to="/">
          <button className="px-8 py-4 bg-[#7f5539] text-white rounded-lg hover:bg-[#5f3e2b] transition duration-300 transform hover:scale-105">
            View Menu
          </button>
        </Link>
      </div>

      {/* Description */}
      <p className="text-lg text-[#4a4a4a] mb-8 text-center px-6 max-w-lg">
        Explore our delightful collection of freshly brewed coffee, homemade
        pastries, and cozy atmosphere. Enjoy every sip and bite at Vivi Coffee.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <img
            src="assets/images/cappucino.png"
            alt="Fresh Coffee"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#7f5539] mb-2">
            Fresh Coffee
          </h2>
          <p className="text-center text-[#4a4a4a]">
            Savor the rich flavors of our expertly brewed coffee, crafted to
            perfection.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <img
            src="assets/images/CheseeCake.png"
            alt="Pastries"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-[#7f5539] mb-2">
            Delicious Pastries
          </h2>
          <p className="text-center text-[#4a4a4a]">
            Indulge in our freshly baked pastries, the perfect pairing with your
            cup of coffee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
