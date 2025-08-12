import bgHeroImg from "../assets/heroimg.jpg"



function Hero() {
    return (
        <>


            <section style={{
                backgroundImage: `url(${bgHeroImg})`, backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} className="  min-h-screen p-10 text-white">
               
            </section>



        </>
    )
}

export default Hero;