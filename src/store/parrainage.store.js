import { create } from "zustand";
import { parrainageService } from "../service/parrainage.service";

const useParrainageStore = create((set, get) => ({
    // État initial
    data: null,
    loading: false,
    error: null,
    success: false,
    matricule: '',
    
    // Actions
    searchByMatricule: async (matricule) => {
        const trimmedMatricule = matricule.trim().toUpperCase();
        
        if (!trimmedMatricule) {
            set({ 
                error: 'Veuillez entrer un numéro de matricule',
                loading: false 
            });
            return;
        }

        set({ 
            matricule: trimmedMatricule,
            loading: true, 
            error: null,
            success: false,
            data: null
        });
        
        try {
            const response = await parrainageService.getParrainageByMatricule(trimmedMatricule);

            if (response.success) {
                set({ 
                    data: response,
                    loading: false,
                    success: true
                });
            } else {
                // Message spécifique pour "Matricule introuvable"
                let errorMessage = response.message;
                
                if (response.message?.includes('introuvable') || response.message?.includes('non trouvé')) {
                    errorMessage = `Le matricule ${trimmedMatricule} n'est pas enregistré dans le système de parrainage.\n\nSi tu es en L1 ou L2 en informatique, contacte l'administration du département pour t'inscrire au programme.`;
                }
                
                set({ 
                    error: errorMessage,
                    loading: false,
                    success: false
                });
            }

            return response;
        } catch (error) {
            console.error('Erreur parrainage:', error);
            
            // Messages d'erreur user-friendly
            let errorMessage = 'Une erreur est survenue. Réessaie plus tard.';
            
            if (error.message?.includes('indisponible')) {
                errorMessage = error.message;
            } else if (error.message?.includes('connexion')) {
                errorMessage = error.message;
            } else if (error.message) {
                errorMessage = error.message;
            }

            set({ 
                error: errorMessage, 
                loading: false,
                success: false
            });

            throw error;
        }
    },

    // ... reste des fonctions inchangées
    formatName: (fullName) => {
        if (!fullName) return { first_name: '', last_name: '' };
        const nameParts = fullName.trim().split(' ');
        
        if (nameParts.length === 1) {
            return { first_name: nameParts[0], last_name: '' };
        }
        
        const last_name = nameParts.pop();
        const first_name = nameParts.join(' ');
        return { first_name, last_name };
    },

    generateAvatarUrl: (name, color = '1e3a8a') => {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color}&color=ffffff&size=400`;
    },

    getFormattedData: () => {
        const { data, formatName, generateAvatarUrl } = get();
        
        if (!data || !data.etudiant) return null;

        const student = {
            ...formatName(data.etudiant.nom),
            matricule: data.etudiant.matricule,
            email: data.etudiant.email,
            phone: data.etudiant.telephone,
            photo_url: generateAvatarUrl(data.etudiant.nom, '1e3a8a')
        };

        const sponsor = data.parrain ? {
            ...formatName(data.parrain.nom),
            matricule: data.parrain.matricule,
            email: data.parrain.email,
            phone: data.parrain.telephone,
            photo_url: generateAvatarUrl(data.parrain.nom, '3b82f6')
        } : null;

        const mentees = data.filleuls?.map(filleul => ({
            ...formatName(filleul.nom),
            matricule: filleul.matricule,
            email: filleul.email,
            phone: filleul.telephone,
            photo_url: generateAvatarUrl(filleul.nom, '1e40af')
        })) || [];

        return {
            student,
            sponsor,
            mentees,
            type: data.type,
            filiere: data.filiere,
            rawData: data
        };
    },

    resetSearch: () => set({ 
        data: null,
        loading: false, 
        error: null, 
        success: false 
    }),

    clearError: () => set({ error: null }),

    clearSuccess: () => set({ success: false }),

    setMatricule: (matricule) => set({ matricule }),
}));

export default useParrainageStore;