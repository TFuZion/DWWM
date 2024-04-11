# Les migrations

Les migrations vous permettent de gérer la structure de la base de données de votre application.
Elles vous permettent de créer des tables, d'ajouter des colonnes à des tables existantes, d'indexer des colonnes et même de remplir vos tables.

Les migrations sont comme des contrôles de version pour votre BDD,permettant à votre équipe de modifier facilement la structure de base et de partager ces modifications.

Dans Laravel, les migrations sont stockées dans le répertoire `database\migrations`. Chaque migration contient deux méthodes:
- `up`: Pour ajouter de nouvelles tables, colonnes ou index.
- `down`: Pour annuler ces opérations.

```php
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }
```

## Création des migrations

Pour créer mon fichier de migration:
```bash
php artisan make:migration nom_de_ma_migration
```

## Utilisation des migrations

Pour exécuter nos migrations, vous utilisez la commande Artisan `migrate`:

```bash
php artisan migrate
```

Cette commande exécutera toutes les migrations qui n'ont pas été encore exécutées
Si vous souhaitez annuler la dernière migration, vous pouvez utiliser la commande `migrate:rollback`

```bash
php artisan migrate:rollback
```