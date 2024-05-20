/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import search_light from "../assets/NavbarAssets/search-w.png";
import search_dark from "../assets/NavbarAssets/search-b.png";
import light from "../assets/NavbarAssets/night.png";
import dark from "../assets/NavbarAssets/day.png";


const Navbar = ({ theme, setTheme }) => {
  
  const toggle_mode = () => {
  theme == "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <>
      {/* nav bar starts here */}
      <nav className="w-full h-14 bg-indigo-300  flex justify-between items-center p-2 md:pr-20 md:pl-20">
        <div className="flex items-center mr-1 md:mr-24 ">
          <div className="text-xs md:text-xl text-indigo-800 font-bold mr-1 md:mr-4 bg-yellow-400 p-1 rounded-md cursor-pointer m-">
            <a href="#" className="no-underline">
              MovieHive
            </a>
          </div>

          <div className="md:block hidden text-xl text-indigo-800  font-bold mr-auto cursor-pointer">
            &#8801; Menu
          </div>
        </div>

        <div className="flex items-center mx-auto rounded-xl bg-black flex-grow">
          <input
            type="text"
            placeholder="Search Movies"
            className=" bg-transparent py-[5px] outline-none md:px-2 md:py-1 flex-grow"
          />

          <div className="flex w-[20px]">
            <img src={search_light} alt="search" className="w-3" />
          </div>
        </div>

        <div className="flex items-center ml-5 md:ml-24">
          <div className="hidden md:block px-4 py-1 text-xl text-white font-bold  mr-4 cursor-pointer rounded-md bg-indigo-700">
            <button>Sign In</button>
          </div>
          <div className="w-12 cursor-pointer hidden md:block">
            <img onClick={()=>{toggle_mode()}} src={theme == "light" ? light : dark} alt="" />
          </div>
          <div className="md:hidden flex text-xl">
            <a href="#">&#8801;</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
