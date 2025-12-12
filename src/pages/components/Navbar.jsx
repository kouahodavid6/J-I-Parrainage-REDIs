import { navItems } from '../../data/data';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navbar = ({ 
    variant = 'default', // 'default' (navigation complète) ou 'simple' (bouton retour)
    showOnScroll = true, // Afficher seulement après scroll (pour certaines pages)
    showLogo = true,
}) => {
    const [isScrolled, setIsScrolled] = useState(!showOnScroll); // Si showOnScroll=false, navbar visible
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        // Mesurer la hauteur réelle de la navbar
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        // Initialiser les événements de react-scroll
        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});

        // Gestion du scroll pour le background de la navbar
        const handleScroll = () => {
            if (showOnScroll) {
                setIsScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, [showOnScroll]);

    // Fermer le menu mobile lorsqu'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && 
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Fonction pour mettre à jour la section active
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    const handleLogoClick = () => {
        if (window.location.pathname === '/') {
            scroll.scrollToTop();
            setActiveSection('accueil');
        } else {
            navigate('/');
        }
    };

    // Calculer l'offset dynamiquement
    const getScrollOffset = () => {
        return navbarHeight > 0 ? -navbarHeight : -80;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Navbar simple avec bouton retour
    if (variant === 'simple') {
        return (
            <nav 
                ref={navbarRef}
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
                        {showLogo && (
                            <div 
                                className="flex items-center gap-2 cursor-pointer" 
                                onClick={handleLogoClick}
                            >
                                <img 
                                    src="/LogoParainageREDIs.jpg" 
                                    alt="Logo ParainageREDIs" 
                                    className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="hidden sm:flex flex-col">
                                    <h1 className='text-white font-bold text-lg sm:text-xl tracking-tight'>REDIs</h1>
                                    <p className="text-blue-200 text-xs opacity-80">Réseau Estudiantin Des Informaticiens</p>
                                </div>
                            </div>
                        )}

                        {/* Bouton Retour à l'accueil */}
                        <RouterLink
                            to="/"
                            className="flex items-center justify-center group ml-auto"
                        >
                            <button className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 hover:from-blue-800/40 hover:to-blue-700/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 active:scale-95">
                                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-300 group-hover:text-blue-200 group-hover:-translate-x-0.5 transition-all duration-300" />
                                <span className="text-xs sm:text-sm md:text-base font-medium text-blue-200 group-hover:text-white whitespace-nowrap">
                                    Retour à l'accueil
                                </span>
                            </button>
                        </RouterLink>
                    </div>
                </div>

                {/* Effet de glow en bas de la navbar au scroll */}
                {isScrolled && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                )}
            </nav>
        );
    }

    // Navbar par défaut (navigation complète)
    return (
        <nav 
            ref={navbarRef}
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
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
                        <img 
                            src="/LogoParainageREDIs.jpg" 
                            alt="Logo ParainageREDIs" 
                            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="hidden sm:flex flex-col">
                            <h1 className='text-white font-bold text-lg sm:text-xl tracking-tight'>REDIs</h1>
                            <p className="text-blue-200 text-xs opacity-80">Réseau Estudiantin Des Informaticiens</p>
                        </div>
                    </div>

                    {/* Navigation desktop avec react-scroll */}
                    <div className="hidden lg:block">
                        <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    className={`
                                        relative text-blue-100 font-medium px-2 xl:px-3 py-2 transition-all duration-300
                                        hover:text-white group text-sm xl:text-base cursor-pointer
                                        ${activeSection === item.id ? 'text-white font-semibold' : ''}
                                    `}
                                >
                                    {item.label}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-[3px] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
                                            : 'w-0 group-hover:w-full bg-gradient-to-r from-cyan-300 to-blue-400 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.3)]'
                                        }
                                    `} />
                                    {activeSection === item.id && (
                                        <span className="absolute -bottom-1 left-1/2 w-3/4 h-1 transform -translate-x-1/2 bg-blue-400/30 blur-sm rounded-full" />
                                    )}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>

                    {/* Navigation tablette avec react-scroll */}
                    <div className="hidden md:block lg:hidden">
                        <div className="flex items-center space-x-3">
                            {navItems.slice(0, 4).map((item) => (
                                <ScrollLink
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    className={`
                                        relative text-blue-100 font-medium px-2 py-2 transition-all duration-300
                                        hover:text-white group text-xs cursor-pointer
                                        ${activeSection === item.id ? 'text-white font-semibold' : ''}
                                    `}
                                >
                                    {item.label.split(' ')[0]}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-[2px] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full bg-gradient-to-r from-cyan-400 to-blue-500' 
                                            : 'w-0 group-hover:w-full bg-gradient-to-r from-cyan-300 to-blue-400'
                                        }
                                    `} />
                                </ScrollLink>
                            ))}
                            <div className="relative group">
                                <button className="text-blue-100 font-medium px-2 py-2 hover:text-white transition-colors duration-300 text-xs flex items-center gap-1 cursor-pointer">
                                    Plus
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-48 bg-blue-900/95 backdrop-blur-xl rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-blue-500/30">
                                    {navItems.slice(4).map((item) => (
                                        <ScrollLink
                                            key={item.id}
                                            to={item.id}
                                            spy={true}
                                            smooth={true}
                                            offset={getScrollOffset()}
                                            duration={500}
                                            onSetActive={handleSetActive}
                                            className={`
                                                w-full text-left text-blue-100 font-medium px-4 py-3 transition-all duration-300
                                                hover:text-white hover:bg-blue-800/50 text-sm cursor-pointer
                                                ${activeSection === item.id ? 'text-white bg-blue-800/50' : ''}
                                                first:rounded-t-lg last:rounded-b-lg border-b border-blue-700/30 last:border-b-0
                                            `}
                                            onClick={() => {
                                                document.querySelector('.relative.group')?.classList.remove('group');
                                                setTimeout(() => {
                                                    document.querySelector('.relative')?.classList.add('group');
                                                }, 100);
                                            }}
                                        >
                                            {item.label}
                                        </ScrollLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-blue-100 p-2 hover:text-white transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-800/30"
                            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile avec react-scroll */}
                {isMobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        className="md:hidden mt-4 pb-4 border-t border-blue-500/20 pt-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    offset={getScrollOffset()}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        w-full text-blue-100 font-medium px-4 py-3 text-left transition-all duration-300
                                        hover:text-white hover:bg-blue-800/40 rounded-lg group relative cursor-pointer
                                        ${activeSection === item.id ? 'text-white bg-blue-800/40' : ''}
                                        flex items-center justify-between
                                    `}
                                >
                                    <span className="flex-1">{item.label}</span>
                                    {activeSection === item.id ? (
                                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full ml-2 shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
                                    ) : (
                                        <div className="w-6 h-1 bg-blue-700/50 rounded-full ml-2 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300" />
                                    )}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Effet de glow en bas de la navbar au scroll */}
            {isScrolled && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            )}
        </nav>
    );
};

export default Navbar;