# Challenge-react-test

## Définitions des spécifications

*Spécification du DarkMode*:

- Le thème doit changer lors du clique sur le bouton.
- Le thème doit être stocker dans le cache locale.
- Si le thème est déjà en cache, lors du rechargement de la page celui-ci doit être le même.
- Si le thème n'est pas en cache, alors il doit avoir le mode clair par défaut.

*Spécification du champs de recherche*:

- Le champs de recherche est vide par défaut.
- Le mot clé tapé dans le champs de recherche doit être le même que celui recherché.
- Lorsque le champs de recherche est effacer, le mot recherché doit être nulle.
- Si le mot clé correspond à des résultats, une liste de pays doit être retourné.
- Si le mot clé ne correspond à aucun résultat alors une phrase disant qu'il n'y aucun résultat correspondant à la recherche.

*Spécification pour le menu déroulant*:

- Le filtre doit correspondre au filtre choisi.
- Le filtre par défaut est 'All'.
- Si le filtre choisi est différent 'All', on doit pouvoir avoir le filtre disponible 'All' dans la liste des filtres.

*Spécification pour les données de contryAPI*:

- Par défaut les données sont nulles.
- Lors du chargement de la page, les données récupérées, un message de chargement est affiché.
- Si la récupération de donné échoue, il y a une erreur qui est retournée.
- Si les données sont récupérées, alors ils seront affichées.

## Le challenge

- Réécriture complète du challenge react hook avancé avec l'approche TDD (Test Driven Development), création des spécifications nécessaire aux tests avant d'écrire le code source.
- Mise en place des librairies *twin.macro* et *styled-components* pour une lisibilité et simplifié les composants.
- Utilisations des compétences apprises et qui sont nécessaires pour effectuer le challenge.
