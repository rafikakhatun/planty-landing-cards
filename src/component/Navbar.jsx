import { ChevronDown, Lock, Menu, Search, X } from "lucide-react";
import logo from "../assets/Group 33.jpg"
import { useState } from "react";

function Navbar() {

    // responsive navbar useState
    const [isOpen, SetIsOpen] = useState(false)





    return (
        <>
            <header className="w-full p-2 bg-[#1a2116]">
                <nav className="flex justify-between items-center text-[#C6C7C5] p-2" >
                    {/* nav logo */}
                    <div className="relative w-20 h-20">
                        <img src={logo} className="w-full h-full object-cover mt-6" alt="logo" />
                        <h1 className="absolute top-6 left-10 text-white text-xl font-bold z-10">
                            Planto
                        </h1>
                    </div>

                    {/* desktop Menu */}
                    <ul className=" hidden md:flex gap-5 px-4">
                        <li className=" hover:underline">Home</li>
                        <li className="flex  hover:underline">Plants Type <ChevronDown /></li>
                        <li className=" hover:underline">More</li>
                        <li className=" hover:underline">Contact</li>
                    </ul>


                    {/* Hamburger Menu Button for Small Devices */}
                    <button onClick={() => SetIsOpen(!isOpen)} className="flex md:hidden">
                        {isOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-10 h-10" />)}

                    </button>
                </nav>
            </header>
            

        </>
    )
}

export default Navbar;