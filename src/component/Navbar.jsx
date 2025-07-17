import { ChevronDown, Lock, Menu, Search } from "lucide-react";
import logo from "../assets/Group 33.jpg"

function Navbar() {
    return (
        <>
            <header className="w-full p-2 bg-[#1a2116]">
                <nav className="flex justify-between items-center text-[#C6C7C5] p-2" >
                    {/* nav logo */}
                    <div className="flex mt-4">
                        <img className="h-14 w-16 mt-1" style={{ backgroundColor: "transparent" }} src={logo} alt="logo" />
                        <h1 className="text-xl mr-10 z-10">Planto</h1>
                    </div>
                    {/* nav items */}
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li className="flex">Plants Type <ChevronDown /></li>
                        <li>More</li>
                        <li>Contact</li>
                    </ul>
                    {/* nav icon */}
                    <div className="flex gap-4">
                        <Search className="w-5 h-5" />
                        <Lock className="w-5 h-5" />
                        <Menu className="w-6 h-6" />
                    </div>


                </nav>
            </header>

        </>
    )
}

export default Navbar;