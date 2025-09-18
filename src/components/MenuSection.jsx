/*
* Description: Displays menu items in categories with prices.
Purpose: Show available drinks, snacks, and daily specials.
* */
export default function MenuSection(){
    return (
        <section id="menu" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-tight">
                        Our Menu
                    </h2>
                    <p className="text-gray-600 mt-2">Handcrafted with passion, just for you.</p>
                </div>

                {/* Menu Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {/* Category: Classic Coffee */}
                    <div className="wow animate__animated animate__fadeInUp">
                        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-800 pb-2 mb-4">Classic Coffee</h3>
                        <ul className="space-y-3 text-gray-700">
                            <MenuItem name="Espresso" price="$3.00" />
                            <MenuItem name="Americano" price="$3.50" />
                            <MenuItem name="Latte" price="$4.50" />
                            <MenuItem name="Cappuccino" price="$4.50" />
                            <MenuItem name="Drip Coffee" price="$3.00" />
                        </ul>
                    </div>

                    {/* Category: Specialty Drinks */}
                    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-800 pb-2 mb-4">Specialty Drinks</h3>
                        <ul className="space-y-3 text-gray-700">
                            <MenuItem name="Caramel Macchiato" price="$5.00" />
                            <MenuItem name="Mocha" price="$5.00" />
                            <MenuItem name="Vanilla Bean Frappé" price="$5.50" />
                            <MenuItem name="Chai Tea Latte" price="$4.75" />
                            <MenuItem name="Matcha Latte" price="$5.25" />
                        </ul>
                    </div>

                    {/* Category: Pastries & Snacks */}
                    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-800 pb-2 mb-4">Pastries & Snacks</h3>
                        <ul className="space-y-3 text-gray-700">
                            <MenuItem name="Croissant" price="$3.50" />
                            <MenuItem name="Blueberry Muffin" price="$3.25" />
                            <MenuItem name="Avocado Toast" price="$8.00" />
                            <MenuItem name="Coffee Cake Slice" price="$4.00" />
                            <MenuItem name="Granola Parfait" price="$6.50" />
                        </ul>
                    </div>
                </div>

                {/* Specials Card */}
                <div className="mt-16 md:mt-24">
                    <SpecialsCard />
                </div>
            </div>
        </section>
    );
}

// Subcomponent for a single menu item for reusability
function MenuItem({ name, price }) {
    return (
        <li className="flex justify-between">
            <span>{name}</span>
            <span className="font-semibold">{price}</span>
        </li>
    );
}

// Subcomponent for the Daily Specials card
function SpecialsCard() {
    return (
        <div className="bg-amber-50 border-l-4 border-amber-800 p-6 rounded-r-lg shadow-lg wow animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Daily Specials</h3>
            <p className="text-gray-700">Ask our baristas about today's featured single-origin roast and seasonal pastry!</p>
        </div>
    );
}