// - Exercici 1.1  Crea una funció que, en executar-la, escrigui una frase en un fitxer.
var fs = require('fs');

function createFile(file, message) {


    fs.writeFile(file, message, function (err) {
        if (err) return console.log(err);
    });
}

createFile('helloworld.txt', 'Hello World!')

// - Exercici 1.2 Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.


function showContent(file) {

    fs.readFile(file, (err, buff) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(buff.toString());
    })
}

showContent('helloworld.txt')

// - Exercici 1.3 Crea una funció que comprimeixi el fitxer del nivell 1.

var zlib = require('zlib');

function fileCompressor(file) {

    var gzip = zlib.createGzip();
    var r = fs.createReadStream(file);
    var w = fs.createWriteStream('mygzipfile.txt.gz');
    r.pipe(gzip).pipe(w);
}

fileCompressor('helloworld.txt')

/* - Exercici 2.1 Crea una funció que imprimeixi recursivament un missatge 
per la consola amb demores d'un segon.*/


function newYearCountDown(number) {

    setTimeout(() => {

        console.log(number);

        let nextnumber = number - 1;

        if (nextnumber <= 0) {

            console.log("Happy new year!")

        } else {
            newYearCountDown(nextnumber)
        }

    }, 1000);
}

newYearCountDown(12);


/*- Exercici 2.2
Crea una funció que llisti per la consola el contingut del directori
 d'usuari/ària de l'ordinador utilizant Node Child Processes.*/

function listWindowsDir() {

    const nodeChildProcess = require("child_process");


    let comando = nodeChildProcess.spawn('cmd', ['/c', 'dir C:\\Windows\n']);


    comando.stdout.on('data', function (datos) {
        console.log(datos.toString());
    });

}

listWindowsDir();






