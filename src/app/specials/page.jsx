const products = [
    {
        id: 1,
        name: 'COMMART',
        href: '#',
        imageSrc: '/images/commart-voucher.jpg',
        imageAlt: "COMMART 50% Discount",
        price: '50% discount',
        date: '32-33 Oct 2024',
    },
]

export default function Special() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Special Deals</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative rounded-md overflow-hidden shadow-md">
                            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover" // This ensures the image fills the card properly
                                />
                            </div>
                            <div className="mt-4 flex justify-between p-4">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.date}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}