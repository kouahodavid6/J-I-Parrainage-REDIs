import { MapPin, Heart, Users, ExternalLink } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ 
  showQuickLinks = true,           // Afficher/cacher les liens rapides
  variant = 'default'              // 'default' (3 colonnes) ou 'compact' (2 colonnes)
}) => {
    const columnLayout = variant === 'compact' ? 'md:grid-cols-2' : 'md:grid-cols-3';
    
    return (
        <footer className="bg-gradient-to-b from-blue-950 to-black text-white pt-16 pb-8 border-t-2 border-blue-500/30">
            <div className="container mx-auto px-4">
                {/* Section principale */}
                <div className={`grid ${columnLayout} gap-12 mb-12`}>
                    {/* Logo et description (toujours présent) */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                        <img 
                            src="/LogoParainageREDIs.jpg" 
                            alt="Logo REDIs"
                            className="w-16 h-16 rounded-full object-cover shadow-xl ring-2 ring-blue-500/30"
                        />
                        <div>
                            <h1 className='text-xl font-bold text-white'>REDIs</h1>
                            <p className="text-blue-300 text-sm">Réseau Estudiantin Des Informaticiens</p>
                        </div>
                        </div>
                        <p className="text-blue-200/80 leading-relaxed mb-6">
                        Le programme de parrainage qui connecte les étudiants en informatique L1 et L2 pour une intégration réussie et un accompagnement personnalisé.
                        </p>
                        <div className="flex gap-3">
                        <a 
                            href="https://www.tiktok.com/@redis_iua?_r=1&_t=ZM-928wXAggUIK" 
                            className="bg-blue-600/80 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaTiktok className="w-5 h-5 text-white" />
                        </a>
                        
                        <a 
                            href="https://www.instagram.com/redis.iua?igsh=MXVpbWQ2M2s3cXc3NQ==" 
                            className="bg-blue-600/80 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                        </div>
                    </div>

                    {/* Liens rapides (conditionnel) */}
                    {showQuickLinks && (
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                <a href="#accueil" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group">
                                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                                    Accueil
                                </a>
                                </li>
                                <li>
                                <a href="#about" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group">
                                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                                    À propos
                                </a>
                                </li>
                                <li>
                                    <a href="#programme" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                                        Programme
                                    </a>
                                </li>
                                <li>
                                    <a href="#processus" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                                        Comment ça marche
                                    </a>
                                </li>
                                <li>
                                    <a href="/parrainage" className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group font-semibold">
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                                        Système de Parrainage
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Contact (toujours présent) */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Localisation
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-blue-200 group-hover:text-cyan-300 transition-colors duration-300">
                                Département d'Informatique<br />
                                Université: IUA Campus Corniche
                                </span>
                            </li>
                            <li className="flex items-start gap-3 group mt-6">
                                <Heart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1 animate-pulse" />
                                <span className="text-blue-200 italic">
                                "La force du réseau, la chaleur de l'entraide"
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Reste du footer (toujours identique) */}
                <div className="border-t border-blue-800/50 pt-8 mb-8">
                    <div className="relative h-1 w-full mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                    </div>

                    <div className="text-center mb-8">
                        <h5 className="text-lg font-semibold text-white mb-4">Site développé avec 💙 par :</h5>
                        <button
                            onClick={() => window.open('https://equipe-redis-devs.vercel.app/', '_blank')}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40 group"
                        >
                            <Users className="w-5 h-5" />
                            Découvrir l'Équipe de Développement
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div>
                            <p className="text-blue-300/80 text-sm">
                                © {new Date().getFullYear()} REDIs - Réseau Estudiantin Des Informaticiens
                            </p>
                            <p className="text-blue-400/60 text-xs mt-1">
                                Programme de parrainage officiel du Département d'Informatique
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <a 
                                href="https://wa.me/2250171136261" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-300/70 hover:text-cyan-300 text-sm transition-colors duration-300 hover:underline flex items-center gap-1"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                Contact admin (WhatsApp)
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-900/30">
                    <div className="flex items-center justify-center gap-4 text-center">
                        <div className="bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-700/30">
                            <p className="text-blue-300 text-sm">
                                <span className="text-cyan-300 font-medium">L1</span> ↔ <span className="text-cyan-300 font-medium">L2</span>
                                <span className="mx-2">•</span>
                                Solidarité étudiante active
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;