# Guide de déploiement sur Vercel

Ce document vous guide pas à pas pour déployer l'application Yirigaleth Technologie sur Vercel sans utiliser de lignes de commande.

## Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)

## Étapes de déploiement

### 1. Créer un compte GitHub (si vous n'en avez pas déjà un)

1. Rendez-vous sur [GitHub](https://github.com/)
2. Cliquez sur "Sign up" en haut à droite
3. Suivez les instructions pour créer votre compte

### 2. Importer le projet sur GitHub

1. Une fois connecté à GitHub, cliquez sur le bouton "+" en haut à droite, puis sélectionnez "New repository"
2. Donnez un nom à votre dépôt (par exemple "yirigaleth-app")
3. Laissez les autres paramètres par défaut et cliquez sur "Create repository"
4. Sur la page suivante, cliquez sur "uploading an existing file"
5. Téléchargez tous les fichiers du projet que je vous ai fourni
6. Cliquez sur "Commit changes" en bas de la page

### 3. Créer un compte Vercel (si vous n'en avez pas déjà un)

1. Rendez-vous sur [Vercel](https://vercel.com/)
2. Cliquez sur "Sign Up" en haut à droite
3. Choisissez "Continue with GitHub" pour vous connecter avec votre compte GitHub
4. Suivez les instructions pour finaliser la création de votre compte

### 4. Déployer l'application sur Vercel

1. Une fois connecté à Vercel, vous arriverez sur votre tableau de bord
2. Cliquez sur le bouton "Add New..." puis sélectionnez "Project"
3. Vercel affichera la liste de vos dépôts GitHub. Trouvez et sélectionnez le dépôt "yirigaleth-app" que vous venez de créer
4. Sur l'écran de configuration du projet :
   - Le framework "Next.js" devrait être automatiquement détecté
   - Laissez tous les paramètres par défaut
   - Cliquez sur le bouton "Deploy" en bas de la page
5. Vercel va maintenant construire et déployer votre application. Cela prendra quelques minutes.

### 5. Accéder à votre application déployée

1. Une fois le déploiement terminé, Vercel vous redirigera vers la page de votre projet
2. Vous verrez un aperçu de votre application et l'URL à laquelle elle est accessible (généralement sous la forme `https://yirigaleth-app.vercel.app`)
3. Cliquez sur cette URL pour ouvrir votre application dans un nouvel onglet

Félicitations ! Votre application Yirigaleth Technologie est maintenant déployée et accessible en ligne.

## Mise à jour de l'application

Si vous souhaitez mettre à jour votre application à l'avenir :

1. Retournez sur votre dépôt GitHub
2. Modifiez les fichiers nécessaires
3. Vercel détectera automatiquement les changements et redéploiera votre application

## Personnalisation du domaine (optionnel)

Si vous souhaitez utiliser votre propre nom de domaine :

1. Dans votre tableau de bord Vercel, sélectionnez votre projet
2. Allez dans l'onglet "Settings" puis "Domains"
3. Suivez les instructions pour ajouter et configurer votre domaine personnalisé
