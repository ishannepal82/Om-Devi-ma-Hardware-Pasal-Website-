

export default function HeroSection() {
  return (
    <section className="bg-primary w-full">
      <div className="hero-img h-[70vh] sm:h-[60vh] overflow-hidden relative ">
        <div className="bg-black/50 absolute w-full h-full z-10"/>
        <div className="absolute text-white z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full sm:w-1/2 px-4">
          <h1 className="text-h3 md:text-h1 ">Welcome to Om Devi Ma Hardware Pasal</h1>
          <p className="text-sm md:text-body">Om Devi Ma Hardware Pasal is a physical store that has wide varities of goods and Services availible to Customers.</p>
          <button className="w-fit bg-accentLight text-white px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-accentLight transition-colors duration-300 text-body">
            <span>Contact Us</span>
          </button>
        </div>
        <img src="/src/assets/hero1.jpg" alt="Hero Image" className="object-cover w-full h-full" />
      </div>
    </section>
  )
}
