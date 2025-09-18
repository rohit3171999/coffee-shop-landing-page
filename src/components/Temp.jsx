/*
* Description: Storytelling block about the café’s history and vibe.
Purpose: Builds emotional connection with visitors.
* */
export default function AboutSection(){
    return (
        <section id="about" className="py-16 md:py-24 bg-stone-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className="wow animate__animated animate__fadeInLeft">
                        <img
                            // You can replace this with your own image URL
                            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1974&auto=format&fit=crop"
                            alt="Cozy interior of The Coffee Spot"
                            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                        />
                    </div>
                    {/* Text Content Column */}
                    <div className="wow animate__animated animate__fadeInRight">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 tracking-tight">
                            Our Story
                        </h2>
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            Founded in 2023, The Coffee Spot was born from a simple idea: to create a warm, inviting space where the community can gather over an exceptional cup of coffee. We believe that coffee is more than just a drink; it's a way to connect, to create, and to take a quiet moment for yourself.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We partner with local roasters who share our passion for quality and sustainability. Every bean is ethically sourced and expertly roasted to bring out its unique flavors. From our classic espresso to our seasonal specialties, every sip tells a story of dedication and craft.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}