import TestimonialsCard from './TestimonialsCard'

export default function Testimonials() {
  return (
    <section className = "testimonials-section p-6 w-full relative h-full">
        <h2 className='text-center text-header text-white'>Hear it From the In-Store Personnels</h2>
        <div className=' border-b  border-4 border-accentLight my-4'></div>
        <div className="testimonials-container mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            <TestimonialsCard img='/src/assets/testimonials1.png' isAdmin={false}/>
            <TestimonialsCard img='/src/assets/testimonials1.png' isAdmin={true}/>
            <TestimonialsCard img='/src/assets/testimonials1.png' isAdmin={false}/>
        </div>
        <div className="flex justify-center">
          <button className='bg-white text-accentLight border-2 border-accentLight text-btn px-6 py-2 rounded-md shadow-md hover:bg-accentLight hover:text-white transition-all duration-150'>
            <span>Write Your Own Testimonials</span>
          </button>
        </div>
    </section>
  )
}
