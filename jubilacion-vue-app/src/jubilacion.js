export const puedeJubilarse = (edad, aportesIGSS) => {
    if (typeof edad !== 'number' || typeof aportesIGSS !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
  
    return edad >= 65 && aportesIGSS >= 240;
  };
  