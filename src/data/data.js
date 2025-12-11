import { 
    Heart, 
    Lightbulb, 
    Trophy, 
    Users, 
    Presentation, 
    Handshake, 
    Coffee, 
    Zap ,
    Search,
    UserCheck,
    Users2
} from 'lucide-react';

export const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'programme', label: 'Programme' },
    { id: 'processus', label: 'Processus' },
];

export const valuesAbout = [
    {
        icon: Heart,
        title: 'Entraide',
        description: 'Favoriser la solidarité entre étudiants pour créer une communauté soudée et bienveillante',
        color: 'from-blue-500 to-cyan-400',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Encourager la créativité et l\'adoption des nouvelles technologies dans nos projets',
        color: 'from-cyan-500 to-blue-400',
    },
    {
        icon: Trophy,
        title: 'Excellence',
        description: 'Viser l\'excellence académique et professionnelle dans tous nos domaines d\'activité',
        color: 'from-blue-600 to-blue-400',
    },
    {
        icon: Users,
        title: 'Communauté',
        description: 'Construire un réseau fort d\'informaticiens qui s\'entraident et grandissent ensemble',
        color: 'from-blue-400 to-cyan-500',
    },
];

export const events = [
    {
        time: '08:00',
        title: 'Accueil des Participants',
        description: 'Arrivée des étudiants L1 et L2, distribution des badges et kits de bienvenue',
        icon: Users,
        color: 'from-blue-500 to-cyan-400',
    },
    {
        time: '09:00',
        title: 'Mot d\'Ouverture',
        description: 'Présentation du département REDIs et des objectifs du programme de parrainage',
        icon: Presentation,
        color: 'from-cyan-500 to-blue-400',
    },
    {
        time: '09:30',
        title: 'Présentation des Parrains',
        description: 'Les étudiants L2 se présentent et partagent leur expérience universitaire',
        icon: Handshake,
        color: 'from-blue-600 to-blue-400',
    },
    {
        time: '10:30',
        title: 'Pause Café & Networking',
        description: 'Moment convivial pour faire connaissance et échanger informellement',
        icon: Coffee,
        color: 'from-blue-400 to-cyan-500',
    },
    {
        time: '11:00',
        title: 'Ateliers Thématiques',
        description: 'Sessions pratiques sur la méthodologie de travail, les ressources et outils',
        icon: Zap,
        color: 'from-cyan-400 to-blue-500',
    },
    {
        time: '14:00',
        title: 'Rencontre Parrains-Filleuls',
        description: 'Premier contact officiel entre les parrains et leurs filleuls assignés',
        icon: Handshake,
        color: 'from-blue-500 to-blue-600',
    },
];

export const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Saisis ton Matricule',
        description: 'Entre ton numéro de matricule universitaire dans le système de parrainage pour commencer',
        color: 'from-blue-500 to-cyan-400',
    },
    {
        number: '02',
        icon: UserCheck,
        title: 'Découvre ton Jumelage',
        description: 'Le système identifie automatiquement ton parrain (si tu es en L1) ou tes filleuls (si tu es en L2)',
        color: 'from-cyan-500 to-blue-400',
    },
    {
        number: '03',
        icon: Users2,
        title: 'Connecte et Grandis',
        description: 'Prends contact avec ton parrain ou tes filleuls et commence cette belle aventure d\'entraide',
        color: 'from-blue-600 to-blue-400',
    },
];