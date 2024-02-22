# Tournowa

## Lien du Jira
* Visitez le Backlog : [Jira](https://ikram-mahfoud.atlassian.net/jira/software/projects/TOR/boards/11/backlog?epics=visible&selectedIssue=TOR-2)


### Description du Projet:

**Tournowa:** Application Mobile de Suivi de Matchs de Football

**Contexte:** L'objectif de ce projet est de développer une application mobile qui permettra aux utilisateurs de suivre les matchs de football en direct, d'accéder aux détails des matchs et des joueurs, ainsi que de sauvegarder leurs matchs préférés et leurs joueurs favoris.

**Fonctionnalités Principales:**

1. **Écran des Matchs:**
   - Affiche une liste des matchs de football.
   - Permet de filtrer les matchs par "Tous les matchs" ou "Matchs en direct".
   - Permet de sauvegarder un match avec toutes les informations dans l'écran des favoris.

2. **Écran des Détails du Match:**
   - Affiche des informations détaillées sur un match sélectionné, telles que les équipes, la date, l'heure, les ligues, la saison, etc.
   - Offre une option pour revenir à l'écran des matchs.

3. **Écran des Joueurs:**
   - Affiche une liste de tous les joueurs de football avec leur photo et leur nom complet.
   - Permet de rechercher un joueur par son nom.
   - Permet d'accéder aux détails d'un joueur spécifique.

4. **Écran des Détails du Joueur:**
   - Affiche des informations détaillées sur un joueur sélectionné, telles que sa taille, son poids, sa date de naissance, son pays, etc.
   - Offre une option pour revenir à l'écran des joueurs.

**Technologies Utilisées:**
- Framework JavaScript: React Native
- Gestion de l'État: Redux
- Navigation: React Navigation
- Tests: Jest, Jest-Expo
- Conteneurisation: Docker

**Services Externes:**
- API de matchs de football fournie par SportMonks pour récupérer les données des matchs et des joueurs.

**Méthodologie de Développement:**
- Le développement sera réalisé en suivant une approche Agile, avec une planification des tâches à l'aide de Jira ou un outil similaire.
- Les fonctionnalités seront implémentées de manière itérative, en assurant des cycles de rétroaction réguliers pour l'amélioration continue du produit.
- Des tests unitaires et d'intégration seront écrits pour garantir la fiabilité de l'application.

**Objectifs:**
- Offrir une expérience utilisateur fluide et intuitive pour suivre les matchs de football en direct et accéder aux informations des joueurs.
- Fournir une architecture robuste et modulaire pour faciliter la maintenance et l'évolutivité de l'application.
- Respecter les normes de qualité et de performance élevées pour assurer la satisfaction des utilisateurs.

Ce projet vise à créer une application mobile complète et fonctionnelle qui répond aux besoins des amateurs de football en fournissant des informations précises et en temps réel sur les matchs et les joueurs.


## Description des Commandes:

* 'npx create-expo-app my-app'
Pour Crée une application mobile de Reacte native , avec expo. 

* 'npm start' ou 'yarn start'
Lance l'application en mode développement pour accéder à l'interface Expo Developer Tools. Vous pouvez choisir d'exécuter l'application sur un émulateur ou un appareil physique en scannant le code QR avec l'app Expo go.

## Dépendances Principales
* @react-navigation/bottom-tabs:
  Gestion de la navigation par onglets.

* @react-navigation/drawer:
  Mise en place de la navigation à tiroir (drawer).

* @react-navigation/native:
  Bibliothèque de navigation réactive pour React Native.

* @react-navigation/native-stack:
  Gestion de la navigation en pile pour React Native.

* @react-navigation/stack:
  Mise en œuvre de la navigation en pile.

* expo:
  Framework pour le développement d'applications React Native.

* expo-status-bar:
  Composant de barre d'état personnalisable pour Expo.

* react:
  Bibliothèque JavaScript pour la construction d'interfaces utilisateur.

* react-native:
  Cadre de développement pour la création d'applications mobiles avec React.

* react-native-heroicons:
  Ensemble d'icônes optimisé pour React Native.

* react-native-ionicons:
  Bibliothèque d'icônes open source pour React Native.

* react-native-reanimated:
  Librairie pour créer des animations fluides dans React Native.

* react-native-safe-area-context:
  Gestion des zones de sécurité pour les appareils mobiles.

* react-native-screens:
  Optimisation des performances des écrans dans React Native.

* react-redux:
  Bibliothèque pour gérer l'état global dans les applications React.

* redux:
  Gestion de l'état global de l'application.

  ## Note:
  * Veillez à avoir Node.js installé sur votre machine avant d'exécuter ces commandes.
