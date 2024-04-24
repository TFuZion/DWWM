# Déploiement Laravel

## Pré-requis

- Avoir WSL2 d'installé: `wsl --install` dans un terminal
- Installer ubuntu sur WSL via le [Microsoft Store](https://www.microsoft.com/store/productId/9PDXGNCFSCZV?ocid=pdpshare)
- Chercher `Ubuntu` dans le menu de recherche Windows et exécuter le programme
- Créer un nom d'utilisateur puis un mot de passe
- `sudo apt update`: récupère les dernières versions des dépôts distants
- `sudo apt upgrade`: met à jour les packages du système

## Installation

### 1. Installer Nginx

- `sudo apt install nginx` : installation de nginx
- `systemctl status nginx` : vérification que le démon tourne
- `ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'` : renvoie l'adresse IP V4 et V6
- Se connecter à l'adresse IP V4 à l'aide du navigateur pour vérifier que tout fonctionne

### 2. Installer MariaDB

- `sudo apt install mariadb-server` : installation de MariaDB
- `sudo mysql_secure_installation`
  - Enter current password for root: `enter`
  - Switch to unix_socket authentication: `n`
  - Set root password: `n`
  - remove some anonymous users and the test database: `y`
- Création d'un rôle admin sur MariaDB:
  - `sudo mariadb`
  - `GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;`
  - `FLUSH PRIVILEGES;`
  - `exit`
- Test de connexion sur la base de données
  - `mysql -u admin -p`, taper le mot de passe
  - `sudo systemctl status mariadb`

### 3. Installer PHP

D'après la [documentation de Laravel](https://laravel.com/docs/11.x/deployment#server-requirements), les prérequis sont les suivants:

```
PHP >= 8.2
Ctype PHP Extension
cURL PHP Extension
DOM PHP Extension
Fileinfo PHP Extension
Filter PHP Extension
Hash PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PCRE PHP Extension
PDO PHP Extension
Session PHP Extension
Tokenizer PHP Extension
XML PHP Extension
```

Par défaut, Ubuntu fournit la version 8.1 de PHP, il est donc nécessaire d'ajouter un nouveau repository à `apt` pour pouvoir accéder à des version supérieures

1. Installation des packages de sécurités pour `apt`: `sudo apt install ca-certificates apt-transport-https software-properties-common lsb-release -y`
2. Ajouter le repository: `sudo add-apt-repository ppa:ondrej/php -y`
3. `sudo apt update`
4. `sudo apt upgrade`
5. `sudo apt install php8.2 php8.2-fpm php8.2-cli php8.2-mbstring php8.2-xml php8.2-bcmath php8.2-curl php8.2-mysql`: installation de php et ses dépendances
6. `php -m` pour vérifier si toutes les dépendances sont bien présentes

### 4. Installer composer

Composer nécessite plusieurs dépendances pour pouvoir s'installer facilement, notamment `git` et `curl` qui sont inclus de base sur la distribution Ubuntu

1. `sudo apt install unzip`
2. Installation de composer:

```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

3. Déplacer composer.phar dans le dossier bin pour l'utiliser comme exécutable dans la console: `sudo mv composer.phar /usr/local/bin/composer`
4. Taper `composer` pour vérifier que l'installation s'est bien déroulée

## Configuration

1. Créer ou cloner une application Laravel depuis un repository
2. `cd ~`: se déplacer dans le répertoire de l'utilisateur
3. `composer create-project --prefer-dist laravel/laravel helloworld`
4. `cd helloworld`
5. `nano .env`: edition du fichier:

```
APP_NAME=helloworld
APP_ENV=production
APP_KEY=base64:FhswCHfrasEX9n4Nsgqdn4Rwca4hTdFrlCVUt6h+8U8=
APP_DEBUG=false
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=helloworld
DB_USERNAME=admin
DB_PASSWORD=password

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null
```

6. `sudo mv ~/helloworld /var/www/helloworld`: on déplace l'application Laravel dans le répertoire nginx dédié à cet effet

7. Effectuer une migration la migration en base de données:

   - `cd /var/www/helloworld`
   - `php artisan migrate`

8. On donne l'accès au serveur en écriture sur le stockage et le cache

```sh
sudo chown -R www-data.www-data /var/www/helloworld/storage
sudo chown -R www-data.www-data /var/www/helloworld/bootstrap/cache
```

8. Il faut maintenant créer un fichier de configuration pour le Virtual Host de notre application: `sudo nano /etc/nginx/sites-available/helloworld`

9. On copie ensuite le contenu suivant dans le fichier:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name localhost;
    root /var/www/helloworld/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

10. On ajoute ensuite un lien symbolique de notre configuration dans les sites rendus disponibles par Nginx: `sudo ln -s /etc/nginx/sites-available/helloworld /etc/nginx/sites-enabled/`
11. `sudo nginx -t` pour vérifier si la configuration est correcte
12. `rm /etc/nginx/sites-enabled/default`: supprime la configuration de base
13. `sudo systemctl reload nginx`: on relance Nginx pour activer la configuration
14. Il suffit ensuite d'accéder au serveur via l'adresse IP: `hostname -I | awk '{print $1}'`
