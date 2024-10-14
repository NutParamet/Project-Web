import Link from 'next/link';

const products = [
    {
        id: 1,
        name: 'NIKE',
        href: '/allstores/Nike',
        imageSrc: '/images/Nike-Logo.png',
        imageAlt: "Nike logo.",
    },
    {
        id: 2,
        name: 'Adidas',
        href: '/allstores/Adidas',
        imageSrc: '/images/Adidas-Logo.png', 
        imageAlt: "Adidas logo.",
    },
];

export default function allstores() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Stores</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} href={product.href} passHref>
                            <div className="group relative rounded-md overflow-hidden shadow-md border border-gray-300 cursor-pointer">
                                <div className="aspect-w-1 aspect-h-1 w-full bg-white">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
