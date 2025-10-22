import ContactUsForm from "./ContactUsForm";
import ContactUsLayeredImage from "./ContactUsLayerImg";

export default function ContactUs() {
  return (
   <section className="contactus-section w-full mt-6 bg-gradient-to-r from-secondaryLight from-[70%] to-offWhite to-[30%] h-full p-6">
        <h1 className="text-h1 text-white text-center">Contact Us</h1>
        <div className="flex justify-between items-center h-[70vh] w-full">
            <ContactUsForm />
            <div className="w-1/2 md:block hidden">
                <ContactUsLayeredImage />
            </div>
        </div>
   </section>
  )
}
