function Navbar() {
  return (
    <div className="h-20 bg-black text-gray-400 flex flex-wrap justify-between items-center content-center  shadow-xl px-3 mb-10">
      <h2>
        <img className="w-12 h-12" src="icon2.png" alt="icon" />
      </h2>
      <h1 className="flex-grow text-center font-light text-2xl ">
        MovieSearch
      </h1>
      <button className="bg-green-700 hover:bg-green-600 px-10 py-2 rounded-3xl font-semibold">
        Login
      </button>
    </div>
  );
}

export default Navbar;
