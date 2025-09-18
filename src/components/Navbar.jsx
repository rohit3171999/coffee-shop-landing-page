/*
* Description: Top navigation bar for quick scrolling to sections.
Purpose: Helps users quickly access Menu, Hours, Contact, etc.
* */
export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300">
            <nav className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-2">
                    {/* Placeholder Logo - you can replace this with your own <img> or <svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-900" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3.5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM5.5 4.5a.75.75 0 01.75.75v10a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75zM14.5 4.5a.75.75 0 01.75.75v10a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75z" />
                        <path fillRule="evenodd" d="M2.25 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M3 15.25a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl font-bold text-gray-800">The Coffee Spot</span>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center space-x-8">
                    <li><a href="#menu" className="text-gray-700 font-semibold hover:text-amber-800 transition-colors duration-200">Menu</a></li>
                    <li><a href="#hours" className="text-gray-700 font-semibold hover:text-amber-800 transition-colors duration-200">Hours</a></li>
                    <li><a href="#about" className="text-gray-700 font-semibold hover:text-amber-800 transition-colors duration-200">About</a></li>
                    <li><a href="#contact" className="text-gray-700 font-semibold hover:text-amber-800 transition-colors duration-200">Contact</a></li>
                </ul>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <div className="md:hidden">

                </div>
            </nav>
        </header>
    );
}