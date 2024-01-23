# Exercice 02 

Réaliser en Vue.js un formulaire de Sign In. 

Ce formulaire devra demander aux utilisateurs leur email et leur mot de passe. 

Le formulaire disposera de vérification en temps réel: 
    * Les inputs invalides seront colorés en rouge pâle
    * Des spans apparaitront en dessous des inputs n'ayant pas de valeur correcte (après modification, le champs reste vide par exemple ou il ne s'agit pas d'un email valide). Leur CSS les fera apparaitre en rouge gras
    * Il ne sera pas possible d'envoyer un formulaire en cas de présence dans son intérieur d'un champs invalide

Lors de l'envoie d'un formulaire par l'utilisateur, il y aura affichage en console d'un objet de crédentials qui contiendra l'email et le mot de passe de l'utilisateur en tant qu'attributs.