import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/ChatGPT Image 17 janv. 2026, 16_21_36.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Accueil', href: '#', type: 'link' },
        { name: 'Services', href: '#services', type: 'link' },
        { name: 'Réalisations', href: '#realisations', type: 'button-primary' },
        { name: 'Contact', href: '#contact', type: 'button-secondary' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center">
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="h-20 w-auto object-contain"
                            />
                            <span className="ml-3 text-xl font-bold text-gray-900 tracking-tight">Pub Vidéo Boost</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => {
                            if (link.type === 'button-secondary') {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="px-6 py-2.5 bg-secondary text-white rounded-full font-medium hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        {link.name}
                                    </a>
                                );
                            }
                            if (link.type === 'button-primary') {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-blue-800 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        {link.name}
                                    </a>
                                );
                            }
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 font-medium hover:text-primary transition-colors duration-300 relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="text-xl font-bold text-primary">Menu</span>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-500 hover:text-primary transition-colors p-2 bg-gray-50 rounded-full"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">
                        {navLinks.map((link) => {
                            if (link.type === 'button-secondary') {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="w-full text-center py-3 px-4 bg-secondary text-white rounded-xl font-medium shadow-md active:scale-95 transition-transform"
                                    >
                                        {link.name}
                                    </a>
                                )
                            }
                            if (link.type === 'button-primary') {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="w-full text-center py-3 px-4 bg-primary text-white rounded-xl font-medium shadow-md active:scale-95 transition-transform"
                                    >
                                        {link.name}
                                    </a>
                                )
                            }
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-lg font-medium text-gray-700 hover:text-primary py-2 border-b border-gray-50 hover:pl-2 transition-all"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    <div className="p-6 bg-gray-50">
                        <p className="text-center text-xs text-gray-400">© 2026 Brand Portfolio</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
