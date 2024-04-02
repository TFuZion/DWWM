<h1>Ceci est un titre</h1>

<?php $prenom = "Benoit" ?>

<p>Ceci est un texte</p>

<?php echo strlen($prenom) ?>
<?= $prenom ?>

<?= '<a href="https://www.google.com" target="_blank">lien</a>' ?>

<?php var_dump($prenom); ?>

<h2>Var dump</h2>

<?php var_dump($_SERVER); ?> <!-- var_dump est utile pour débugger des variables-->

<h2>print_r</h2>

<?php print_r($_SERVER) ?>
