# Yirigaleth Technologie - Application Web

Ce dépôt contient une application web Next.js pour Yirigaleth Technologie, une solution de gestion de présence par reconnaissance faciale pour les établissements scolaires.

## Fonctionnalités

- Gestion des classes et des élèves
- Prise de présence manuelle
- Simulation de reconnaissance faciale
- Interface utilisateur intuitive et réactive

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React pour le développement web
- [TypeScript](https://www.typescriptlang.org/) - Pour un code plus robuste et typé
- [Tailwind CSS](https://tailwindcss.com/) - Pour le style et la mise en page

## Déploiement sur Vercel

Cette application est conçue pour être facilement déployée sur Vercel sans utiliser de lignes de commande.

### Instructions de déploiement

1. Créez un compte sur [Vercel](https://vercel.com/) si vous n'en avez pas déjà un
2. Connectez votre compte GitHub à Vercel
3. Importez ce dépôt dans votre compte GitHub
4. Dans Vercel, cliquez sur "Add New..." puis "Project"
5. Sélectionnez le dépôt GitHub contenant ce projet
6. Laissez les paramètres par défaut et cliquez sur "Deploy"

Vercel détectera automatiquement qu'il s'agit d'un projet Next.js et le déploiera correctement.

## Développement local

Si vous souhaitez exécuter l'application localement :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Structure du projet

```
src/
├── app/                  # Pages de l'application (routing basé sur les fichiers)
│   ├── page.tsx          # Page d'accueil
│   ├── add-class/        # Page d'ajout de classe
│   └── classes/[id]/     # Page de détail de classe
├── components/           # Composants réutilisables
├── data/                 # Données de démonstration
└── types/                # Définitions de types TypeScript
```

## Prochaines étapes

- Intégration d'une base de données pour stocker les informations des classes et des élèves
- Implémentation réelle de la reconnaissance faciale côté serveur
- Ajout de fonctionnalités d'exportation des données de présence
- Support pour l'authentification des utilisateurs
