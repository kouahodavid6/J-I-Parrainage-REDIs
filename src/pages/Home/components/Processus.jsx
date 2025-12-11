import { steps } from "../../../data/data";
import { Users2 } from "lucide-react";

const Processus = () => {
    return(
        <section id="processus" className="py-20 px-6 bg-gradient-to-b from-blue-950 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm mb-6">
                        <Users2 className="w-4 h-4" />
                        <span>Processus</span>
                    </div>
                    <h2 className="text-xl md:text-4xl font-bold text-white mb-6">
                        Comment ça marche ?
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                            Simple et Efficace
                        </span>
                    </h2>
                    <p className="text-lg text-blue-200/70 max-w-3xl mx-auto">
                        Trois étapes pour découvrir ton parrain ou tes filleuls et commencer cette expérience enrichissante
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 -translate-x-4" />
                                )}

                                <div className="relative bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-10 hover:border-blue-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
                                    <div className="absolute -top-4 -right-4 text-8xl font-bold text-blue-500/10 group-hover:text-blue-400/20 transition-colors">
                                        {step.number}
                                    </div>

                                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                                            <Icon className="w-10 h-10 text-blue-300" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-blue-200/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-10 max-w-3xl">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                            <p className="text-xl text-blue-200 font-medium">
                                Règle du Processus
                            </p>
                        </div>
                        <p className="text-lg text-blue-200/80 leading-relaxed">
                            Chaque étudiant de <span className="font-bold text-blue-300">Licence 1</span> est accompagné par un parrain de <span className="font-bold text-cyan-300">Licence 2</span>.
                            Les étudiants de L2 peuvent accompagner plusieurs filleuls pour maximiser l'entraide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Processus;