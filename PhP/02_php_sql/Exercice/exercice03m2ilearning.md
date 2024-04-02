# M2I-Learning

## Objectifs

- Maîtriser le connecteur PDO
- Maîtriser les bases du SQL
- S'approprier les notions de back-end et front-end

## Sujet

- En tant que stagiaire à M2I, vous êtes amenés à assimiler beaucoup de notions.
- Dans cette optique, il serait intéressant de créer une application qui vous permet de savoir où vous vous situez sur les différentes notions.
- Cette application vous donnera une meilleure vision d'ensemble sur les notions que vous avez acquise ou celle que vous devrez encore travailler.

### Base de données

**Module** : PHP-PDO, Figma, Node.js

| Nom       | Type     |
| --------- | -------- |
| id        | int      |
| name      | string   |
| start     | datetime |
| finish    | datetime |
| status_id | int      |

**Status** : non acquis, en cours d'acquisition, maîtrisé

| Nom   | Type   |
| ----- | ------ |
| id    | int    |
| title | string |

**Tag** : frontend, backend, infra, javascript, php

| Nom   | Type   |
| ----- | ------ |
| id    | int    |
| title | string |

**ModuleTag**

| Nom        | Type     |
| ---------- | -------- |
| module_id  | int      |
| tag_id     | int      |
| created_at | datetime |

### Back-end

Pour la partie back-end en PHP, vous renverrez les réponses à l'aide de la fonction `json_encode` ([doc](https://www.php.net/manual/fr/function.json-encode.php)) en pensant à modifier le statut de la réponse HTTP à l'aide de la fonction `http_response_code` ([doc](https://www.php.net/manual/en/function.http-response-code.php))

En cas d'erreur, vous pouvez renvoyer un objet JSON avec le code HTTP suivi d'un message, exemple: `{"code": 404, "message": "module introuvable"}`

Pour tester votre application, vous pouvez utiliser la commande `php -S 127.0.0.1:8000` à la racine de votre projet

- `modules.php` :
  - fichier PHP qui permet de récupérer les modules, on y accède avec la méthode GET
  - Par défaut, il renvoie la liste des modules sous forme de tableau JSON
  - Lorsqu'on ajoute un query parameter, on peut filtrer par rapport à un module en particulier: `modules.php?id=1`
  - Les query parameters peuvent être récupérés avec la variable `$_SERVER['QUERY_STRING']`
- `create-module.php` :
  - fichier PHP qui permet de créer un module, on l'utilise avec le verbe HTTP POST
- `create-tag.php` : fichier PHP qui permet de créer un module, on l'utilise avec le verbe HTTP POST
- `tags.php` :
  - fichier PHP qui permet de récupérer les tags, on y accède avec la méthode GET
  - Par défaut, il renvoie la liste des tags sous forme de tableau JSON
  - Lorsqu'on ajoute un query parameter, on peut filtrer par rapport à un status en particulier: `tags.php?id=1`
  - Les query parameters peuvent être récupérés avec la variable `$_SERVER['QUERY_STRING']`
- `status.php` :
  - fichier PHP qui permet de récupérer les status, on y accède avec la méthode GET
  - Par défaut, il renvoie la liste des status sous forme de tableau JSON
  - Lorsqu'on ajoute un query parameter, on peut filtrer par rapport à un status en particulier: `status.php?id=1`
  - Les query parameters peuvent être récupérés avec la variable `$_SERVER['QUERY_STRING']`
