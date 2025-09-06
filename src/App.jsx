import React from 'react';

// --- Sample Data (as specified in the PRD) ---

const menu = {
    coffee: [
        { name: 'Espresso', price: '₹150' },
        { name: 'Americano', price: '₹180' },
        { name: 'Cappuccino', price: '₹200' },
        { name: 'Latte', price: '₹220' },
    ],
    beverages: [
        { name: 'Herbal Tea', price: '₹160' },
        { name: 'Hot Chocolate', price: '₹250' },
        { name: 'Iced Lemon Tea', price: '₹180' },
    ],
    snacks: [
        { name: 'Croissant', price: '₹120' },
        { name: 'Avocado Toast', price: '₹280' },
        { name: 'Samosa', price: '₹90' },
    ],
    desserts: [
        { name: 'Cheesecake Slice', price: '₹300' },
        { name: 'Chocolate Brownie', price: '₹220' },
    ],
};

const specials = [
    { name: 'Pumpkin Spice Latte', price: '₹280' },
    { name: 'Caramel Macchiato', price: '₹260' },
];

const operatingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Public Holidays', hours: 'Closed' },
];


function App() {
    // Helper function to render a menu category
    const renderMenuCategory = (title, items) => (
        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 border-b-2 border-amber-200 pb-2 mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map(item => (
                    <li key={item.name} className="flex justify-between">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-mono text-gray-900">{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="bg-stone-100 font-sans">
            {/* ===== Header & Hero Section ===== */}
            <header id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=2071')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wider">Brew Haven</h1>
                    <p className="mt-4 text-xl md:text-2xl font-light">Fresh Brews, Cozy Vibes</p>
                    <a href="#menu" className="mt-8 px-8 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300">
                        View Menu
                    </a>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 md:py-24 space-y-20">

                {/* ===== About Section ===== */}
                <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in 2025, Brew Haven was born from a passion for exceptional coffee and a love for community. We believe a coffee shop should be more than just a place to get a drink; it should be a sanctuary—a place to connect, create, and relax.
                        </p>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            We source our beans ethically from the best growers and roast them in-house to bring out their unique flavors. Welcome to your home away from home.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        {/* Replace with an actual image of the cafe's interior */}
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" alt="Cozy interior of Brew Haven coffee shop" className="w-full h-full object-cover"/>
                    </div>
                </section>

                {/* ===== Menu Section ===== */}
                <section id="menu">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Our Menu</h2>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        {/* Specials */}
                        <div className="mb-10 text-center bg-amber-100 p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold text-amber-900 mb-4">✨ Specials of the Day ✨</h3>
                            <ul className="space-y-2">
                                {specials.map(item => (
                                    <li key={item.name} className="flex justify-center gap-4">
                                        <span className="text-gray-800 text-lg">{item.name}</span>
                                        <span className="font-mono font-bold text-amber-800 text-lg">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Menu Categories */}
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {renderMenuCategory('Coffee', menu.coffee)}
                            {renderMenuCategory('Beverages', menu.beverages)}
                            {renderMenuCategory('Snacks', menu.snacks)}
                            {renderMenuCategory('Desserts', menu.desserts)}
                        </div>
                    </div>
                </section>

                {/* ===== Hours & Location Section ===== */}
                <section id="location" className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Hours of Operation */}
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">Hours & Location</h2>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Hours of Operation</h3>
                            <table className="w-full text-left">
                                <tbody>
                                {operatingHours.map(timing => (
                                    <tr key={timing.day} className="border-b border-gray-200">
                                        <td className="py-2 text-gray-700">{timing.day}</td>
                                        <td className="py-2 text-gray-900 font-medium">{timing.hours}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Find Us</h3>
                            <p className="text-gray-700">123 Coffee Lane, Bharthia, Uttar Pradesh</p>
                            <a href="tel:+911234567890" className="text-amber-700 hover:underline mt-2 block">
                                +91 12345 67890
                            </a>
                            <a href="#location" className="mt-4 inline-block px-6 py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300">
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
                        <iframe
                            title="Brew Haven Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.882414841961!2d81.18731057520038!3d26.84379967668706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b3243932e5%3A0x33f4a928424564a9!2sBharthia%2C%20Uttar%20Pradesh%20227107!5e0!3m2!1sen!2sin!4v1725624773123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

            </main>

            {/* ===== Footer / Contact Section ===== */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="mb-2">
                        <a href="tel:+911234567890" className="hover:text-amber-400">+91 12345 67890</a>
                    </p>
                    <p className="mb-4">
                        <a href="mailto:hello@brewhaven.com" className="hover:text-amber-400">hello@brewhaven.com</a>
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="hover:text-amber-400">Instagram</a>
                        <a href="#" className="hover:text-amber-400">Facebook</a>
                        <a href="#" className="hover:text-amber-400">Twitter</a>
                    </div>
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Brew Haven. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;