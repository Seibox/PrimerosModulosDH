let importar = function(marcaFigura){
    const fs = require('fs');
    let arrayJs;
    let arrayJson;
    switch (marcaFigura) {
        case "Hot toys":
            arrayJson = fs.readFileSync(__dirname + '/datos/figuras1.json',"utf-8");
            arrayJs = JSON.parse(arrayJson);
            return arrayJs;
            break;
        case "Bandai":
            arrayJson = fs.readFileSync(__dirname + '/datos/figuras2.json',"utf-8");
            arrayJs = JSON.parse(arrayJson);
            return arrayJs;
            break;
        case "Star wars":
            arrayJson = fs.readFileSync(__dirname + '/datos/figuras3.json',"utf-8");
            arrayJs = JSON.parse(arrayJson);
            return arrayJs;
            break;
    }
}

module.exports = importar;