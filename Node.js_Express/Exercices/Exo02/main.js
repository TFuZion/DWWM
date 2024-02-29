const path = require('path')

const cheminComplet = path.join('Exo02', 'documents', 'rapport.txt')
console.log(`1 : ${cheminComplet}`);

const cheminAbsolu = path.resolve('rapport.txt')
console.log(`2 : ${cheminAbsolu}`);


const extension = path.extname('./documents/rapport.txt')
console.log(`3 : ${extension}`);


const repertoire = path.dirname('./documents/rapport.txt')
console.log(`4 : ${repertoire}`);


const rapport = path.basename('./documents/rapport.txt')
console.log(`5 : ${rapport}`);


const detailsChemin = path.parse('./documents/rapport.txt')
console.log(`6 : ${detailsChemin}`);


const normalize = path.normalize(cheminAbsolu)
console.log(`7 : ${normalize}`);
