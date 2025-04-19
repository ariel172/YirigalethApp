import { ClassGroup } from '@/types';

// Données de démonstration pour les classes
export const mockClasses: ClassGroup[] = [
  {
    id: '1',
    name: 'Terminale A',
    students: Array(25).fill(0).map((_, i) => ({
      id: `1-${i}`,
      firstName: `Élève${i+1}`,
      lastName: `Nom${i+1}`,
      isPresent: false
    }))
  },
  {
    id: '2',
    name: 'Terminale B',
    students: Array(30).fill(0).map((_, i) => ({
      id: `2-${i}`,
      firstName: `Élève${i+1}`,
      lastName: `Nom${i+1}`,
      isPresent: false
    }))
  },
  {
    id: '3',
    name: 'Première C',
    students: Array(28).fill(0).map((_, i) => ({
      id: `3-${i}`,
      firstName: `Élève${i+1}`,
      lastName: `Nom${i+1}`,
      isPresent: false
    }))
  }
];

// Fonction pour obtenir une classe par son ID
export const getClassById = (id: string): ClassGroup | undefined => {
  return mockClasses.find(c => c.id === id);
};
