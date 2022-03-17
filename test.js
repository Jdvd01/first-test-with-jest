// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('sumar 14 + 9 debe ser igual a 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//**********************/

test("5 dolares deben ser igual a 592.8 yenes", function(){
    // importo la funcion desde app.js
    const { fromDolarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDolarToYen(5)).toBe(592.5); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//*******************/

test("1000 yenes deben ser igual a 6 libras esterlinas", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe(6); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//************************/

test("Un euro debe ser igual a 1.206 dolares", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})