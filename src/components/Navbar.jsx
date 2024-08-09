import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";


const Navbar = () => {
    const navlinks = <>
        <Navlinks  text='Outdoor' address='/cart'/>
        <Navlinks  text='Indoor' address='/'/>
    </>

    return (
        <div className="max-w-[1440px] w-full sm:w-[96%] mx-auto pl-2 sm:px-4  py-4 flex justify-between items-center">
            {/* logo */}
            <div className="w-24" >
                <Link to={"/"}><img src="../../src/assets/vintage_vines_logo.png" alt="Vingtage Vines" className=""/></Link>
            </div>
            <div className="flex justify-center items-center gap-2">
                {navlinks}
            </div>
            <div className="flex justify-center items-center gap-1">
                <div className="rounded-full p-2 hover:mb-1 hover:bg-secondary border-transparent border hover:border-black">
                    <HiOutlineSearch size={22}/>
                </div>
                <div className="rounded-full p-2 hover:mb-1 hover:bg-secondary border-transparent border hover:border-black">
                    <BsBoxSeam size={22}/>
                </div>
                <div className="rounded-full p-2 hover:mb-1 hover:bg-secondary border-transparent border hover:border-black">
                    <HiOutlineUser size={24} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;