export default function ContactUsLayeredImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Main image */}
      <div className="main-image absolute z-20">
        <img
          src="/src/assets/mainimg.png"
          alt="Main Img"
          className="object-contain scale-75 relative z-20"
        />
      </div>

      {/* Layered background images */}
      <div className="absolute inset-0 flex justify-center items-center blur-sm z-10">
        <img
          src="/src/assets/contact-uslayer1.png"
          alt="Layer 1"
          className="absolute w-20 rotate-30 -top-40 left-20 opacity-80"
        />
        <img
          src="/src/assets/contact-uslayer2.png"
          alt="Layer 2"
          className="absolute w-20 -rotate-6 opacity-70 -right-3"
        />
        <img
          src="/src/assets/contactus-layer3.png"
          alt="Layer 3"
          className="absolute w-20 -rotate-6 opacity-70 right-30"
        />
        <img
          src="/src/assets/contact-uslayer4.png"
          alt="Layer 4"
          className="absolute w-20 -rotate-6 opacity-70 -top-28 right-44"
        />
        {/* <img
          src="/src/assets/contact-uslayer5.png"
          alt="Layer 5"
          className="absolute w-20 -rotate-6 opacity-70 left-80 top-20"
        /> */}
        {/* <img
          src="/src/assets/contact-uslayer6.png"
          alt="Layer 6"
          className="absolute w-20 -rotate-6 opacity-70 -left-28 top-28"
        /> */}
      </div>
    </div>
  )
}