let popInit = +prompt ("Saisir la population :")
let tauxDac = +prompt ("Saisir le taux (%) :")
let popVise = +prompt ("Saisir la population visée :")
let année = 0

while (popInit <= popVise) {
  popInit *= (1 + (tauxDac/100))
  année++
}
alert (`La population dépasse la population visée à l'année ${année} (${popInit})`)