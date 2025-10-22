export default function TestimonialsCard({ img, isAdmin }: { img: string; isAdmin: boolean }) {
  return (
    <div className={`"product-card rounded-md bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-4 p-2" ${
          isAdmin ? 'scale-90' : 'scale-75 bg-offWhite'
        }`}>
      <img
        src={img}
        alt="Product Image"
      />
      <div className="content px-2 py-4 flex flex-col text-center text-primary">
        <h1 className="text-h4">Santosh Nepal</h1>
        <span className="font-light">
          "Om Devi Ma Hardware is not a physical store — it is a service that satisfies customers' needs by providing the necessary goods."
        </span>
      </div>
    </div>
  )
}
