import { Link } from 'react-router-dom';
import { Users, UserPlus, Gift, Trophy, Share2, Home, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 text-blue-900 px-4 relative overflow-hidden py-2">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-indigo-300/30 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-400/20 rounded-full blur-lg"></div>

            <motion.div 
                className="max-w-2xl text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Icône parrainage */}
                <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-5 rounded-2xl border border-blue-300 shadow-lg">
                        <Users className="h-16 w-16 text-blue-600" />
                    </div>
                </motion.div>

                {/* Code erreur */}
                <motion.h1 
                    className="text-8xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                >
                    404
                </motion.h1>

                {/* Titre */}
                <motion.h2 
                    className="text-3xl font-bold mb-3 text-blue-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Page non trouvée
                </motion.h2>

                {/* Message */}
                <motion.p 
                    className="mb-8 text-blue-700/80 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Oups ! Cette page n'existe pas ou a été déplacée.  
                    "Revenons à l'essentiel : Trouve ton parrain ou tes filleuls et renforce la communauté REDIs !"
                </motion.p>

                {/* Bouton de retour */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-400/30 transform hover:-translate-y-1"
                    >
                        <Home className="h-5 w-5" />
                        Retour à l'accueil
                    </Link>
                </motion.div>

                {/* Message secondaire avec logo */}
                <motion.div 
                    className="mt-6 text-sm text-blue-700/70 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <img 
                        src="/LogoParainageREDIs.jpg" 
                        alt="Logo ParainageREDIs" 
                        className="h-6 w-6 rounded-full object-cover"
                    />
                    Rejoignez le Réseau Estudiantin Des Informaticiens !
                </motion.div>
            </motion.div>

            {/* Décorations bas de page - Icônes parrainage */}
            <div className="absolute bottom-10 left-10 opacity-20">
                <UserPlus className="h-8 w-8 text-blue-500" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20">
                <Gift className="h-8 w-8 text-indigo-500" />
            </div>

            {/* Éléments décoratifs supplémentaires */}
            <div className="absolute top-10 right-16 opacity-15">
                <Users className="h-10 w-10 text-blue-400" />
            </div>
            
            <div className="absolute top-20 left-16 opacity-15">
                <Share2 className="h-8 w-8 text-blue-400" />
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-15">
                <Trophy className="h-8 w-8 text-blue-500" />
            </div>
            
            <div className="absolute top-32 right-20 opacity-15">
                <Star className="h-9 w-9 text-blue-500" />
            </div>

            {/* Logo supplémentaire en décoratif */}
            <div className="absolute bottom-10 right-20 opacity-10">
                <img 
                    src="/LogoParainageREDIs.jpg" 
                    alt="Logo ParainageREDIs" 
                    className="h-12 w-12 rounded-full object-cover"
                />
            </div>

            {/* Élément de fond décoratif supplémentaire */}
            <div className="absolute top-40 left-32 opacity-5">
                <div className="w-24 h-24 border-4 border-blue-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-40 right-32 opacity-5">
                <div className="w-20 h-20 border-4 border-indigo-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default NotFound;