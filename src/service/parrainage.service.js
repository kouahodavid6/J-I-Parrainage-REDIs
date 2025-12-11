import axiosInstance from "../api/axiosInstance";

// parrainage.service.js - CORRECTION
export const parrainageService = {
    getParrainageByMatricule: async (matricule) => {
        try {
            const response = await axiosInstance.get(`/api/parrainage/matricule/${matricule}`);
            return response.data;
        } catch (error) {
            // Gestion spécifique des erreurs 404
            if (error.response?.status === 404) {
                // NE PAS écraser le message du backend.
                // Si le backend a renvoyé une réponse structurée, on la lance directement.
                if (error.response?.data) {
                    throw error.response.data; // Ceci contiendra le bon message.
                }
                
                // Cas de secours si le backend ne renvoie pas de body pour un 404
                throw { 
                    success: false,
                    message: 'Matricule introuvable.'
                };
            }
            
            // Si le back-end renvoie une autre erreur structurée (ex: 400, 500...)
            if (error.response?.data) {
                throw error.response.data;
            }
            
            // Erreur réseau ou serveur
            throw { 
                success: false,
                message: 'Erreur de connexion au serveur. Vérifiez votre connexion internet.'
            };
        }
    }
};