const stores = [
    {
        slug: 'Nike',
        name: 'NIKE',
        description: 'The leading brand for sportswear and athletic gear.',
        imageSrc: '/images/Nike-Logo.png',
        imageAlt: "Nike logo.",
        deals: [ // Nike-specific deals
            {
                id: 1,
                name: 'Nike 20% Off',
                href: '#',
                imageSrc: '/images/nike-deal1.jpg',
                imageAlt: "Nike 20% Off",
                price: '20% Off',
                date: 'Oct 15 - Oct 30, 2024',
                promoCode: 'NIKE20OFF', // Promo code for this deal
            },
            {
                id: 2,
                name: 'Nike 60% Off',
                href: '#',
                imageSrc: '/images/nike-deal2.png',
                imageAlt: "Nike BOGO Offer",
                price: '60% Off',
                date: 'Nov 1 - Nov 15, 2024',
                promoCode: 'BOGO', // Promo code for this deal
            },
        ],
    },
    {
        slug: 'Adidas',
        name: 'Adidas',
        description: 'The leading brand for sportswear and athletic gear.',
        imageSrc: '/images/Adidas-Logo.png',
        imageAlt: "Adidas logo.",
        deals: [ // Adidas-specific deals
            {
                id: 1,
                name: 'Adidas 30% Off',
                href: '#',
                imageSrc: '/images/adidas-deal1.png',
                imageAlt: "Adidas 30% Discount",
                price: '30% off',
                date: 'Oct 20 - Oct 31, 2024',
                promoCode: 'AD30OFF', // Promo code for this deal
            },
            {
                id: 2,
                name: 'Adidas Clearance Sale',
                href: '#',
                imageSrc: '/images/adidas-deal2.jpg',
                imageAlt: "Adidas Clearance Sale",
                price: 'Up to 60% off',
                date: 'Nov 1 - Nov 30, 2024',
                promoCode: 'AD60OFF', // Promo code for this deal
            },
        ],
    },
];

export async function generateStaticParams() {
    return stores.map((store) => ({
        slug: store.slug,
    }));
}

const StorePage = ({ params }) => {
    const { slug } = params;

    // Find the store data based on the slug
    const store = stores.find((s) => s.slug === slug);

    if (!store) {
        return <div>Store not found.</div>; // Handle cases where the store doesn't exist
    }

    return (
        <div className="bg-white">
            {/* Store Details Section */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{store.name}</h1>
                <div className="mt-6 flex flex-col items-center">
                    <div className="relative aspect-w-1 aspect-h-1 w-full max-w-md">
                        <img
                            alt={store.imageAlt}
                            src={store.imageSrc}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <p className="mt-4 text-lg text-gray-700">{store.description}</p>
                </div>
            </div>

            {/* Special Deals Section */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Special Deals</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {store.deals.map((deal) => (
                        <div key={deal.id} className="group relative rounded-md overflow-hidden shadow-md">
                            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
                                <img
                                    alt={deal.imageAlt}
                                    src={deal.imageSrc}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="mt-4 flex justify-between p-4">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={deal.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {deal.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{deal.date}</p>
                                    <p className="mt-1 text-sm text-green-600">Promo Code: <strong>{deal.promoCode}</strong></p> {/* Promo Code Display */}
                                </div>
                                <p className="text-sm font-medium text-gray-900">{deal.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
