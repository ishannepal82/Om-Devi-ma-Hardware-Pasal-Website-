export default function Header() {
  return (
    <header className="p-6 flex justify-between items-cente bg-white shadow-sm">
        <div className="Content flex items-center">
            <h1 className='text-primary font-poppins text-header '> Om Devi ma Hardware Store</h1>
        </div>
        <nav className="hidden sm:block">
            <ul className="flex items-center gap-8">
                <li>Home</li>
                <li>Products</li>
                <li>Partners</li>
            </ul>
        </nav>
    </header>
  )
}
