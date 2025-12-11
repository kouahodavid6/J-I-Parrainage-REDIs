import { events } from "../../../data/data";
import { Calendar, Clock } from "lucide-react";

const Programme = () => {
    return(
        <section id="programme" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        <span>Programme</span>
                    </div>
                    <h2 className="text-xl md:text-4xl font-bold text-white mb-6">
                        Journée d'Intégration
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                            Déroulement de la Journée
                        </span>
                    </h2>
                    <p className="text-lg text-blue-200/70 max-w-3xl mx-auto">
                        Une journée spéciale pour tisser des liens solides entre générations d'informaticiens
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600" />

                        {events.map((event, index) => {
                            const Icon = event.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative mb-12 md:mb-16 flex items-center ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div
                                            className={`bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group ml-20 md:ml-0 ${
                                                isEven ? 'md:text-right' : ''
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`flex items-center gap-2 ${isEven ? 'md:ml-auto' : ''}`}>
                                                    <Clock className="w-5 h-5 text-blue-400" />
                                                    <span className="text-xl font-bold text-blue-300">{event.time}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-blue-200/70 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 z-10">
                                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${event.color} p-1 animate-pulse`}>
                                            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-blue-950 transition-colors">
                                                <Icon className="w-7 h-7 text-blue-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Programme;