import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import Navlinks from "./Navlinks";


const Navbar = () => {
    const navlinks = <>
        <Navlinks  text='Outdoor' address='/cart'/>
        <Navlinks  text='Indoor' address='/'/>
    </>
    return (
        <div className="border border-black max-w-[1440px] w-full sm:w-[96%] mx-auto px-4 py-4 flex justify-between items-center">
            {/* logo */}
            <div className="w-24">
                <img src="../../src/assets/vintage_vines_logo.png" alt="Vingtage Vines" />
            </div>
            <div className="flex justify-center items-center gap-2">
                {navlinks}
            </div>
            <div className="flex justify-center items-center gap-4">
                <div>
                    <HiOutlineSearch />
                </div>
                <div>
                    <BsBoxSeam/>
                </div>
                <div>
                    <HiOutlineUser/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;