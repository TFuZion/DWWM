/*
    Exercice 05

    Réaliser une application de stockage de todos en ligne via Firebase. 
    
    L'utilisateur devra pouvoir saisir le texte de la todo (dans une <textarea>) ainsi que la date de l'échéance (<input type="date">) et appuyez sur un bouton pour pouvoir envoyer la todo à Firebase. 

    Une todo aura donc comme structure: 

    {
        "text": <Texte de la todo>,
        "dueDate": <Date de la deadline>,
        "finished": false
    }

    Cet objet envoyé à Firebase va nous retourner un objet avec une structure telle que: 
    
    {
        name: <Id de la nouvelle todo>
    }

    Il va ensuite falloir stocker la todo dans un tableau au niveau de la mémoire de l'ordinateur (via une variable de type tableau).

    Au lancement du programme, on ira chercher en base de données les todos et on peuplera le tableau des todos dés le début. 

    Ce tableau servira à la génération d'un affichage des todos, qui peut se faire sous la forme d'une div comportant des span et des boutons. Il sera possible de passer la todo à finie ou non, ainsi que de la supprimer de la base de données.

    Les données de notre mémoire et celles de Firebase devront être les mêmes en tout temps, il faudra donc à chaque modification, la faire à la fois dans la RAM et dans la base de données via des requêtes donc voici de potentiels endpoints:

    * /todos.json (GET) => Va retourner toutes les todos
    * /todos.json (POST) => Pour ajouter une todo
    * /todos/<todoId>.json (PATCH) => Pour modifier une todo
    * /todos/<todoId>.json (DELETE) => Pour supprimer une todo
    
    BONUS - Faire en sorte d'avoir le décompte du temps qui passe et la mise à jour de l'affichage de l'urgence de la todo en temps réel. De plus, les todos devront être triées non par n'importe comment mais par urgence, avec celles non réalisées dans les temps qui clignotent et une alartme qui sonne
*/