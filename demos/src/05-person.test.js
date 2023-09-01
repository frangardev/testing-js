const Person = require('./05-person');

describe('Person', () => {
  // AAA
  // Arrange|Given|Preparar
  let person;
  beforeEach(() => {
    person = new Person('Juan', 50, 1.8);
  });
  test('down', () => {
    // Arrange|Given| Preparar
    person.weight = 50;
    // Act|When| Ejecutar
    const rtaImc = person.calcIMC();
    // Assert|Then| Resolver la hipótesis
    expect(rtaImc).toBe('down');
  });
  test('normal', () => {
    person.weight = 65;
    const rtaImc = person.calcIMC();
    expect(rtaImc).toBe('normal');
  });
  describe('overweight ', () => {
    test('overweight', () => {
      person.weight = 84;
      const rtaImc = person.calcIMC();
      expect(rtaImc).toBe('overweight');
    });
    test('overweight level 1', () => {
      person.weight = 92;
      const rtaImc = person.calcIMC();
      expect(rtaImc).toBe('overweight level 1');
    });
    test('overweight level 2', () => {
      person.weight = 98;
      const rtaImc = person.calcIMC();
      expect(rtaImc).toBe('overweight level 2');
    });
    test('overweight level 3', () => {
      person.weight = 150;
      const rtaImc = person.calcIMC();
      expect(rtaImc).toBe('overweight level 3');
    });
  });
});
