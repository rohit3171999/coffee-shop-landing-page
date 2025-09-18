/*
* Description: First impression area with café name, tagline, and CTA.
Purpose: Immediately grab attention and invite users to explore.
* */
export default function HeroSection(){
    return(
        <section
            id="home"
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            // You can replace this with your own image URL
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white p-8">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
                    The Coffee Spot
                </h1>
                <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                    Where every cup is a delightful journey.
                </p>
                <a href="#menu" className="mt-8 inline-block bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    View Our Menu
                </a>
            </div>
        </section>
    )
}