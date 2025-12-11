import { ArrowRight, Code2, Network, ChevronsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <header id='accueil' className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
            {/* Arrière-plan avec dégradé et particules */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            animationDelay: `${particle.delay}s`,
                            opacity: 0.4,
                        }}
                    />
                ))}
            </div>

            {/* Overlay pour effet de profondeur */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            <div className="container mx-auto px-4 py-20 relative z-10 w-full text-center">
                {/* Badge département */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm mb-8 animate-fade-in">
                    <Network className="w-4 h-4" />
                    <span>Département Informatique</span>
                </div>

                {/* Titre principal */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
                    REDIs
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 mt-2">
                        Journée d'Intégration
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-200">
                    Journée d'Intégration REDIs : vos parrains L2 vous accueillent, vos aînés L3 vous guident, nos diplômés M1-M2 vous inspirent. Toute la communauté étudiante unie pour votre épanouissement !
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400 mb-6">
                    {/* Bouton "Découvrir le Département" avec react-scroll */}
                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80} // Ajuste selon la hauteur de ta navbar
                        duration={500}
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-2 cursor-pointer"
                    >
                        Découvrir le Département
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </ScrollLink>
                    
                    <Link
                        to="/parrainage"
                        className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-blue-400/30 hover:border-blue-300 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                        <Code2 className="w-5 h-5" />
                        Système de Parrainage
                    </Link>
                </div>

                {/* Flèche pour scroller */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    {/* Flèche avec react-scroll */}
                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="text-blue-300 hover:text-blue-200 transition-colors cursor-pointer"
                    >
                        <ChevronsDown className='w-10 h-10' />
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
}

export default Hero;