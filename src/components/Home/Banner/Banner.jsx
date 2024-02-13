

const Banner = () => {
  return (
    <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center px-10 mt-10">
      {/* banner text */}
      <div className="text-gray-700">
        <h2 className="text-5xl font-bold">
          Conquer your 
          <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent"> To-Dos</span>
        </h2>
        <p className="text-xl font-semibold mt-2">
          Your journey to productivity begins here
        </p>
        <button className="border-2 rounded-lg border-orange-500 py-2 px-4 mt-4 text-orange-500 hover:text-white font-bold hover:bg-gradient-to-r from-orange-300 to-orange-600 hover:border-transparent">
          Let's Explore
        </button>
      </div>
      {/* banner image */}
      <div>
        <img src="/src/assets/tm-banner-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
