import { useState } from 'react';
import { Mail, Phone, Search, UserCheck, Users, UserX, AlertCircle, User } from 'lucide-react';
import useParrainageStore from '../../../store/parrainage.store';

const Systeme = () => {
    const [localMatricule, setLocalMatricule] = useState('');
    
    const {
        data,
        loading,
        error,
        success,
        searchByMatricule,
        getFormattedData,
        resetSearch,
        clearError
    } = useParrainageStore();

    const formattedData = getFormattedData();
    const student = formattedData?.student; // L'étudiant qui a fait la recherche
    const sponsor = formattedData?.sponsor;
    const mentees = formattedData?.mentees || [];
    const type = formattedData?.type;
    const filiere = formattedData?.filiere;

    const handleSearch = async (e) => {
        e.preventDefault();
        await searchByMatricule(localMatricule);
    };

    const handleReset = () => {
        resetSearch();
        setLocalMatricule('');
        clearError();
    };

    // Vérifier si c'est une erreur "matricule non trouvé"
    const isMatriculeNotFoundError = error?.includes("n'est pas enregistré") || 
                                    error?.includes('introuvable') || 
                                    error?.includes('non trouvé');

    return (
        <div className="pt-20 px-6 relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* En-tête */}
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs sm:text-sm mb-4 sm:mb-6">
                            <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Système de Parrainage</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Trouve ton Parrain
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                ou tes Filleuls
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200/70 max-w-2xl mx-auto px-4">
                            Entre ton numéro de matricule pour découvrir ton parrain (L1) ou tes filleuls (L2)
                        </p>
                        <p className="text-blue-300/50 text-sm mt-2">
                            Seuls les étudiants de Licence 1 et Licence 2 en informatique sont enregistrés dans le système.
                        </p>
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={handleSearch} className="mb-8 sm:mb-12">
                        <div className="bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                            <label htmlFor="matricule" className="block text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                                Numéro de Matricule
                            </label>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    id="matricule"
                                    value={localMatricule}
                                    onChange={(e) => setLocalMatricule(e.target.value)}
                                    placeholder="Ex: 25INF00342S"
                                    className="flex-1 px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/50 border border-blue-400/30 rounded-lg sm:rounded-xl text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm sm:text-base"
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Recherche...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span>Valider</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Message d'erreur spécifique pour matricule non trouvé */}
                    {isMatriculeNotFoundError && (
                        <div className="bg-gradient-to-br from-amber-900/20 to-yellow-800/10 backdrop-blur-sm border border-amber-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 animate-fade-in">
                            <div className="flex items-start gap-3">
                                <div className="text-amber-400 mt-0.5">
                                    <UserX className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-amber-300 font-semibold text-sm sm:text-base mb-2">
                                        Matricule non enregistré
                                    </h4>
                                    <div className="text-amber-200/80 text-sm space-y-2">
                                        {error.split('\n\n').map((line, index) => (
                                            <p key={index} className={index === 0 ? "font-medium" : ""}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-3 bg-amber-900/20 rounded-lg border border-amber-400/20">
                                        <p className="text-amber-300 text-xs">
                                            <strong>Que faire ?</strong>
                                        </p>
                                        <ul className="text-amber-200/70 text-xs mt-1 space-y-1">
                                            <li>• Vérifie que tu es bien en L1 ou L2 en informatique</li>
                                            <li>• Contacte l'administrateur de la plateforme. Le contact est dans le footer</li>
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    onClick={clearError}
                                    className="text-amber-400 hover:text-amber-300 transition-colors text-lg p-1"
                                    aria-label="Fermer"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Message d'erreur générique */}
                    {error && !isMatriculeNotFoundError && (
                        <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm border border-red-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 animate-fade-in">
                            <div className="flex items-start gap-3">
                                <div className="text-red-400 mt-0.5">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-red-300 text-sm sm:text-base">{error}</p>
                                </div>
                                <button
                                    onClick={clearError}
                                    className="text-red-400 hover:text-red-300 transition-colors text-lg p-1"
                                    aria-label="Fermer"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Résultats */}
                    {data && success && !loading && student && (
                        <div className="animate-fade-in">
                            {/* Section Étudiant qui a recherché */}
                            <div className="mb-8 sm:mb-12">
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 sm:gap-3">
                                        <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" />
                                        <span>Ton Profil</span>
                                    </h2>
                                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 px-3 py-1 rounded-full text-xs sm:text-sm text-cyan-200">
                                        {type === 'L1' ? 'Licence 1' : 'Licence 2'} • {filiere}
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 backdrop-blur-sm border border-cyan-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-cyan-400/40 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                                        <div className="w-full md:w-auto flex justify-center">
                                            <img
                                                src={student.photo_url}
                                                alt={`${student.first_name} ${student.last_name}`}
                                                className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl object-cover border-4 border-cyan-400/30"
                                            />
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                                                {student.first_name} {student.last_name}
                                            </h3>
                                            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 sm:mb-4">
                                                <p className="text-cyan-300 text-sm sm:text-base md:text-lg">
                                                    {type === 'L1' ? 'Étudiant en Licence 1' : 'Étudiant en Licence 2'}
                                                </p>
                                                <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-200">
                                                    {student.matricule}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2 sm:gap-3">
                                                <a
                                                    href={`mailto:${student.email}`}
                                                    className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-cyan-200/80 hover:text-cyan-300 transition-colors text-sm sm:text-base"
                                                >
                                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                                    <span className="truncate">{student.email}</span>
                                                </a>
                                                <a
                                                    href={`https://wa.me/${student.phone.replace(/\D/g, '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-cyan-200/80 hover:text-cyan-300 transition-colors text-sm sm:text-base"
                                                >
                                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                                    <span>{student.phone}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-cyan-400/10">
                                        <p className="text-cyan-200/70 text-center text-sm md:text-base">
                                            {type === 'L1' 
                                                ? '✨ Tu es en première année. Ton parrain va t\'accompagner dans ton parcours !'
                                                : '🌟 Tu es en deuxième année. Tu as maintenant la responsabilité d\'aider tes filleuls !'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Parrain pour L1 */}
                            {type === 'L1' && sponsor && (
                                <div>
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                                            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400" />
                                            <span>Ton Parrain</span>
                                        </h2>
                                        <div className="bg-blue-900/30 px-3 py-1 rounded-full text-xs sm:text-sm text-blue-200">
                                            {filiere}
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                                            <div className="w-full md:w-auto flex justify-center">
                                                <img
                                                    src={sponsor.photo_url}
                                                    alt={`${sponsor.first_name} ${sponsor.last_name}`}
                                                    className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl object-cover border-4 border-blue-400/30"
                                                />
                                            </div>
                                            <div className="flex-1 text-center md:text-left">
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                                                    {sponsor.first_name} {sponsor.last_name}
                                                </h3>
                                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                                    <p className="text-blue-300 text-xs sm:text-sm">Étudiant en Licence 2</p>
                                                    <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-200">
                                                        {sponsor.matricule}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-2 sm:gap-3">
                                                    <a
                                                        href={`mailto:${sponsor.email}`}
                                                        className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-blue-200/80 hover:text-blue-300 transition-colors text-sm sm:text-base"
                                                    >
                                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                                        <span className="truncate">{sponsor.email}</span>
                                                    </a>
                                                    <a
                                                        href={`https://wa.me/${student.phone.replace(/\D/g, '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-blue-200/80 hover:text-blue-300 transition-colors text-sm sm:text-base"
                                                    >
                                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                                        <span>{sponsor.phone}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-400/10">
                                            <p className="text-blue-200/70 text-center text-sm md:text-base">
                                                🎉 Ton parrain <span className="font-bold text-blue-300">{sponsor.first_name}</span> est là pour t'aider tout au long de ton parcours !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Filleuls pour L2 */}
                            {type === 'L2' && mentees.length > 0 && (
                                <div>
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                                            <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400" />
                                            <span>Tes Filleuls ({mentees.length})</span>
                                        </h2>
                                        <div className="bg-blue-900/30 px-3 py-1 rounded-full text-xs sm:text-sm text-blue-200">
                                            {filiere}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        {mentees.map((mentee, index) => (
                                            <div
                                                key={index}
                                                className="bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                                    <img
                                                        src={mentee.photo_url}
                                                        alt={`${mentee.first_name} ${mentee.last_name}`}
                                                        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg sm:rounded-xl object-cover border-4 border-blue-400/30 flex-shrink-0"
                                                    />
                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
                                                            {mentee.first_name} {mentee.last_name}
                                                        </h3>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-blue-300 text-xs sm:text-sm">Étudiant en Licence 1</p>
                                                            <span className="text-xs px-2 py-0.5 bg-blue-500/20 rounded-full text-blue-200">
                                                                {mentee.matricule}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5 sm:space-y-2">
                                                    <a
                                                        href={`mailto:${mentee.email}`}
                                                        className="flex items-center gap-1.5 sm:gap-2 text-blue-200/80 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                                                    >
                                                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                        <span className="truncate">{mentee.email}</span>
                                                    </a>
                                                    <a
                                                        href={`https://wa.me/${student.phone.replace(/\D/g, '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 sm:gap-2 text-blue-200/80 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                                                    >
                                                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                        <span>{mentee.phone}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 sm:mt-8 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                        <p className="text-blue-200/80 text-center text-sm sm:text-base md:text-lg">
                                            💙 Prends soin de tes {mentees.length === 1 ? 'filleul' : 'filleuls'} et aide-{mentees.length === 1 ? 'le' : 'les'} à réussir {mentees.length === 1 ? 'sa' : 'leur'} première année !
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Pas de parrain (L1 sans parrain assigné) */}
                            {type === 'L1' && !sponsor && (
                                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
                                    <p className="text-yellow-300 text-sm sm:text-base md:text-lg">
                                        Tu n'as pas encore de parrain assigné. Contacte l'administrateur de la plateforme.
                                    </p>
                                </div>
                            )}

                            {/* Pas de filleuls (L2 sans filleuls assignés) */}
                            {type === 'L2' && mentees.length === 0 && (
                                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
                                    <p className="text-yellow-300 text-sm sm:text-base md:text-lg">
                                        Tu n'as pas encore de filleuls assignés. Contacte l'administrateur de la plateforme.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Bouton Nouvelle recherche */}
                    {data && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/20 hover:from-blue-500/40 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-cyan-400/40 rounded-xl px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                <span className="text-sm sm:text-base font-medium text-cyan-200 hover:text-cyan-100">
                                    Faire une nouvelle recherche
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Systeme;