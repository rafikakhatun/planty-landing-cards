import logo from "../assets/Group 33.jpg"

function Navbar(){
    return(
        <>
       <header className="w-full p-8 bg-[#1a2116]">
        <nav className="flex justify-center items-center" >
          {/* nav logo */}
          <div>
            <img style={{backgroundColor:"transparent"}} src={logo} alt="logo" />
            <h1>Planto</h1>
          </div>
           {/* nav items */}
            {/* nav icon */}
        </nav>
       </header>
        
        </>
    )
}

export default Navbar;