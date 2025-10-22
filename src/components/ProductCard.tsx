

export default function ProductCard({img}: {img: string}) {
  return (
    <div className="product-card rounded-lg bg-secondary text-white shadow hover:shadow-lg transition-shadow flex flex-col gap-4">
        <img src={img} alt="Product Image" className="object-contain" />
        <div className="conten px-4 py-2 flex flex-col">
            <h1 className="text-h4">Plumbing Goods</h1>
            <span>
                We provide wide Varities of goods for Plumbing and other plumbing related tools. 
            </span>
            <button className="bg-accentLight text-white text-btn rounded-md shadow-md px-4 py-2 mt-4 hover:bg-white hover:text-accentLight transition-colors duration-300">
                <span>See More</span>
            </button>
        </div>
    </div>
  )
}
