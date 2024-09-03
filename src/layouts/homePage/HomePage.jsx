import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navlinks from "../../components/Navlinks";

const HomePage = () => {
    const plantType = <>
        <Navlinks  text='Indoor' address='/indoorPlant' classname="hover:rounded-none text-2xl" activeclass="bg-action border-black border-b-2" isDefault/>
        <Navlinks  text='Outdoor' address='/outdoorPlant' classname="hover:rounded-none text-2xl" activeclass="bg-action border-black border-b-2"/>
    </>
    return (
        <div className="relative">
            {/* Navbar */}
            <div className="fixed w-full bg-primary opacity-90 z-[100]">
                <Navbar />
            </div>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-screen bg-gray-100"><img src="../../../src/assets/image.jpg" alt="" className="object-cover w-full h-full  max-h-screen contrast-[.7] brightness-[.4] "/>
                <div className="absolute w-full max-w-4xl text-white items-center">
                    <h2 className="mx-2 sm:my-2 text-xl sm:text-2xl">Welcome the Nature to your space with</h2>
                    <h1 className="my-4 text-6xl sm:text-8xl font-['Fugaz_One']"><span className="text-[#035A0D]">Vintage</span> <span className="text-[#D00C4D]">Vines</span></h1>
                    <h2 className=" mx-2 text-2xl sm:text-3xl font-semibold">Explore Our Wide Variety of Plants & Expertly Crafted Plant Decor Solutions for office space and home.</h2>
                </div>
            </div>
            {/* feature section */}
            <div className="w-full py-24 px-4 ">
                <div className="">
                    {plantType}
                </div>
                <div className="w-full px-8 my-6 lg:my-10 h-[420px]">
                    <Outlet/>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default HomePage;