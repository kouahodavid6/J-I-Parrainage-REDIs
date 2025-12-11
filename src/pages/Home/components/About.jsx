import { Users } from "lucide-react";
import { valuesAbout } from "../../../data/data";

const About = () => {
    return(
        <section id="about" className="py-20 px-6 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm mb-6">
                        <Users className="w-4 h-4" />
                        <span>À Propos</span>
                    </div>
                    <h2 className="text-xl md:text-4xl font-bold text-white mb-6">
                        REDIs
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                            Réseau Estudiantin Des Informaticiens
                        </span>
                    </h2>
                    <p className="text-lg text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
                        Le département informatique REDIs est une communauté dynamique d'étudiants de l'IUA passionnés par les technologies et l'innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {valuesAbout.map((value, index) => {
                        const Icon = value.icon;
                        return (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-blue-950/50 to-slate-900/50 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500" />

                            <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-blue-300" />
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-blue-200/60 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                        );
                    })}
                </div>

                <div className="mt-20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Notre Vision</h3>
                    <p className="text-lg text-blue-200/70 max-w-4xl mx-auto leading-relaxed">
                        Notre mission est de créer le département informatique de référence de l'université, un environnement d'apprentissage collaboratif où chaque étudiant peut s'épanouir. Nous allions excellence académique et innovation pratique, avec un accompagnement personnalisé pour assurer la réussite de chaque parcours universitaire et professionnel.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;