//Importar la función sum del archivo app.js
const { sum } = require('./app.js');

//Comienza tu primera prueba

test('adds 14 + 9 to equal 23',()=> {

   //Dentro de la prueba llamamos a nuestra función sum con 2 números

   let total = sum (14,9);

   //Esperamos que la suma de esos 2 números sea 23

   expect(total).toBe(23);

} ) 

test("3.5 euros should be 3.745 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');


    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("3.5 dollars should be 547.75 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');


    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("3.5 yenes should be 3.045 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');


    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.045); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})