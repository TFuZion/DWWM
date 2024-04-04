# Exo: Jeu de combat

**But :** Créer un jeu de combat en ligne de commande où les joueurs peuvent choisir leur personnage, les faire combattre et suivre leurs statistiques.

**Classes à créer :**

1. `Personnage` (classe abstraite)
    - Attributs : `$nom`, `$vie`, `$force`, `$defense`, `$vitesse`
    - Méthodes : `public function getNom()`, `public function getVie()`, `public function getForce()`, `public function getDefense()`, `public function getVitesse()`, `public function attaquer($cible)` (méthode à définir dans les classes filles)
2. `Guerrier`, `Mage`, `Archer`, etc. (classes filles héritant de `Personnage`)
    - Méthodes : `public function attaquer($cible)` (implémenter la méthode abstraite en fonction des caractéristiques de chaque personnage)
3. `JeuCombat`
    - Attributs : `$personnages` (tableau d'objets `Personnage`), `$joueur1`, `$joueur2` (objets `Personnage` choisis par les joueurs)
    - Méthodes : `public function ajouterPersonnage($personnage)`, `public function choisirPersonnage($joueur)`, `public function combattre()`

**Déroulement du jeu :**

1. Créer des objets `Personnage` (`Guerrier`, `Mage`, `Archer`, etc.) et les ajouter à la liste des personnages du jeu.
2. Afficher un message de bienvenue et les instructions du jeu.
3. Demander aux joueurs 1 et 2 de choisir leur personnage parmi la liste des personnages disponibles.
4. Afficher les statistiques des personnages choisis par les joueurs.
5. Tant que les deux personnages ont des points de vie supérieurs à 0 :
a. Demander au joueur 1 de saisir une action ("attaquer", "défendre", etc.)
b. Effectuer l'action choisie en utilisant la méthode `attaquer()` ou en ajustant les statistiques du personnage
c. Vérifier si le personnage adverse a encore des points de vie
d. Si le personnage adverse a encore des points de vie, passer au tour du joueur 2 et répéter les étapes a à c
6. Afficher un message de victoire pour le joueur dont le personnage a encore des points de vie.

**Contraintes :**

- Utiliser l'encapsulation pour protéger les attributs des classes
- Utiliser l'abstraction pour définir la classe `Personnage` et les méthodes communes aux personnages
- Utiliser l'héritage pour créer les classes filles `Guerrier`, `Mage`, `Archer`, etc.
- Créer une interface utilisateur dans le terminal pour interagir avec les joueurs