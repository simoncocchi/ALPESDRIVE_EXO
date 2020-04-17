const serveur = require('./server');
const tmpfile = require('./createtempsfile');


serveur.start; // lancement du serveur 
tmpfile.createtmpdir('test'); // création du fichier temporaire
