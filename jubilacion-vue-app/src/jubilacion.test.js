import { puedeJubilarse } from './jubilacion';

describe('puedeJubilarse', () => {
  test('debería devolver true si la persona tiene 65 años o más y 240 aportes del IGSS o más', () => {
    expect(puedeJubilarse(65, 240)).toBe(true);
    expect(puedeJubilarse(70, 300)).toBe(true);
  });

  test('debería devolver false si la persona no cumple con la edad mínima', () => {
    expect(puedeJubilarse(64, 240)).toBe(false);
    expect(puedeJubilarse(60, 250)).toBe(false);
  });

  test('debería devolver false si la persona no cumple con los aportes mínimos del IGSS', () => {
    expect(puedeJubilarse(65, 239)).toBe(false);
    expect(puedeJubilarse(70, 200)).toBe(false);
  });

  test('debería arrojar un error si los parámetros no son números', () => {
    expect(() => puedeJubilarse('65', 240)).toThrow('Los parámetros deben ser números');
    expect(() => puedeJubilarse(65, '240')).toThrow('Los parámetros deben ser números');
  });
});
