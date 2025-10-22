import ProductCard from './ProductCard'

export default function ProductsSection() {
  return (
    <section className="products-section p-6 w-full relative h-full">
      {/* Section title */}
      <h2 className="text-center text-h2 text-white z-20 relative">
        Our Products
      </h2>

      {/* Background decorative images */}
      <div className="absolute inset-0 z-10 blur-sm  pointer-events-none">
        <img
          src="/src/assets/layer1.png"
          alt="layer img"
          className="absolute object-contain w-[130px] top-40 left-[45vw]"
        />
        <img
          src="/src/assets/layer3.png"
          alt="layer img"
          className="absolute object-contain w-[130px] top-40 left-10"
        />
        <img
          src="/src/assets/layer4.png"
          alt="layer img"
          className="absolute object-contain w-[130px] top-20 right-40"
        />
        <img
          src="/src/assets/layer6.png"
          alt="layer img"
          className="absolute object-contain w-[130px] top-100 right-00"
        />
        <img
          src="/src/assets/layer8.png"
          alt="layer img"
          className="absolute object-contain w-[130px] top-40 right-0"
        />
      </div>

      {/* Product grid */}
      <div className="flex justify-center mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <ProductCard img="/src/assets/plumbing goods.jpg" />
          <ProductCard img="/src/assets/agroproducts.jpg" />
          <ProductCard img="/src/assets/hardwaregoods.jpg" />
        </div>
      </div>
     <div className="btn flex justify-center mt-6">
       <button className='bg-accentLight text-white shadow-sm hover:shadow-md hover:scale-105 cursor-pointer text-btn transition-all duration-300 p-2 rounded-md'>
          <span>See all Products</span>
       </button>
     </div>
    </section>
  )
}
