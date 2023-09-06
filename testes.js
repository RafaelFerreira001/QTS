QUnit.module('calcularAreaQuadrado', function() {
  QUnit.test('calcularAreaQuadrado', function(assert) {
    assert.equal(calcularAreaQuadrado(5, 5), 25, "Área do quadrado correta");
    assert.equal(calcularAreaQuadrado(3, 3), 9, "Área do quadrado correta");
     assert.equal(calcularAreaQuadrado(4, 4), 16, "Área do quadrado correta");
  });
});

QUnit.module('ehNumeroImpar', function() {
  QUnit.test('ehNumeroImpar', function(assert) {
    assert.notOk(ehNumeroImpar(4), "10 não é impar");
    assert.ok(ehNumeroImpar(7), "37 é impar");
  });
});
QUnit.module('celsiusParaKelvin', function() {
  QUnit.test('celsiusParaKelvin', function(assert) {
    assert.equal(celsiusParaKelvin(0), 273, "0°C é 273°K");
    assert.equal(celsiusParaKelvin(30), 303, "30°C é 303°K");
  });
});

QUnit.module('calcularIMC', function() {
  QUnit.test('calcularIMC', function(assert) {
    assert.equal(calcularIMC(65, 1.72),  21, "IMC = 21");
    assert.equal(calcularIMC(50, 1.66),  18, "IMC = 18");
  });
});
QUnit.module('quilômetrosParaMetros', function(){
  QUnit.test('quilômetrosParaMetros', function(assert) {
    assert.equal(quilômetrosParaMetros(10), 10000, "10KM = 10000M");
    assert.equal(quilômetrosParaMetros(35), 35000, "35KM = 35000M");
  });
});

