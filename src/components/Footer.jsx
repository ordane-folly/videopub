import { Facebook, Instagram, Twitter } from 'lucide-react';
import logoImage from '../assets/ChatGPT Image 17 janv. 2026, 16_21_36.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-bold tracking-tight"><span className="text-primary">Pub Vidéo</span> <span className="text-secondary">Boost</span></span>
                            <p className="text-gray-400 text-xs">
                                Création de vidéos publicitaires qui vendent.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Accueil</a>
                        <a href="#services" className="hover:text-primary transition-colors">Services</a>
                        <a href="#realisations" className="hover:text-primary transition-colors">Réalisations</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    {/* Socials & Copyright */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex items-center gap-6">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <div className="text-white font-bold text-lg">
                                +229 0142000700
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs text-center md:text-right">
                            © 2026 Pub Vidéo Boost. Tous droits réservés.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
