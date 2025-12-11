// components/Navbar.jsx (version simplifiée)
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav 
            className={`
                fixed top-0 left-0 w-full py-2 z-50 transition-all duration-300
                ${isScrolled 
                    ? 'bg-blue-900/30 backdrop-blur-xl shadow-lg border-b border-blue-500/20' 
                    : 'bg-transparent backdrop-blur-md'
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo REDIs */}
                    <div 
                        className="flex items-center gap-2 cursor-pointer" 
                        onClick={handleLogoClick}
                    >
                        <img 
                            src="/LogoParainageREDIs.jpg" 
                            alt="Logo ParainageREDIs" 
                            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {/* Texte caché sur mobile, visible à partir de sm */}
                        <div className="hidden sm:flex flex-col">
                            <h1 className='text-white font-bold text-lg sm:text-xl tracking-tight'>REDIs</h1>
                            <p className="text-blue-200 text-xs opacity-80">Réseau Estudiantin Des Informaticiens</p>
                        </div>
                    </div>

                    {/* Bouton Retour à l'accueil */}
                    <Link
                        to="/"
                        className="flex items-center justify-center group"
                    >
                        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 hover:from-blue-800/40 hover:to-blue-700/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 rounded-xl px-4 py-3 sm:px-5 sm:py-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 active:scale-95">
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 group-hover:text-blue-200 group-hover:-translate-x-0.5 transition-all duration-300" />
                            <span className="text-sm sm:text-base font-medium text-blue-200 group-hover:text-white">
                                Retour à l'accueil
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Effet de glow en bas de la navbar au scroll */}
            {isScrolled && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            )}
        </nav>
    );
};

export default Navbar2;