import fs from 'fs';

//Leer un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

//Escribir en un nuevo archivo
fs.writeFile('.data/newFile.txt', 'Contenido nuevo', (err) => {
    if(err) throw err;
    console.log('Archivo creado y escrito');
});

//Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamefile.txt', (err) => {
    if(err) throw err;
    console.log('Archivo renombrado');
});