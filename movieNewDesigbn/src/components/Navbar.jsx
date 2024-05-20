import search_light from "../assets/NavbarAssets/search-w.png";
import search_dark from "../assets/NavbarAssets/search-b.png";
import light from "../assets/NavbarAssets/night.png";
import dark from "../assets/NavbarAssets/day.png";
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-300 flex justify-between px-3 items-center md: px4">
        <div className="text-2xl text-indigo-900 font-bold">LOGO</div>
        <ul className="md:flex hidden  font-semibold">
          <li>Menu</li>
          <li>Watch List</li>
          <li>Sign in</li>
        </ul>
        <div>
          <input type="text" placeholder="Search" />
          <img src={search_dark} alt="" />
        </div>
        <img src={light} alt="" />
      </nav>
    </>
  );
};

export default Navbar;
