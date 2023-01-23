const autos =[ //creo la estructura que voy a exportar
    {
        modelo: 'Falcon',
        marca: 'Ford',
        tocarBocina: function(){
            console.log('Bip Bip');
        }
    },
    {
        modelo: '400',
        marca: 'Chevrolet',
        tocarBocina: function(){
            console.log('Bip Bip');
        }
    }
]

module.exports = autos; /* le asigno el nombre del elemento que quiero exportar */
//module.exports = nombreDeLaVariable