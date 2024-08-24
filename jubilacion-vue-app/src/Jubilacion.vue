<!-- src/components/Jubilacion.vue -->

<template>
  <div>
    <h1>Validación de Jubilación</h1>
    <input type="number" v-model="edad" placeholder="Ingrese su edad" />
    <input type="number" v-model="aportesIGSS" placeholder="Ingrese sus aportes IGSS" />
    <button @click="verificarJubilacion">Verificar</button>
    <p v-if="resultado !== null">
      {{ resultado ? 'Puede jubilarse' : 'No puede jubilarse' }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { puedeJubilarse } from '../jubilacion';

export default {
  setup() {
    const edad = ref('');
    const aportesIGSS = ref('');
    const resultado = ref(null);

    const verificarJubilacion = () => {
      try {
        resultado.value = puedeJubilarse(Number(edad.value), Number(aportesIGSS.value));
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      edad,
      aportesIGSS,
      resultado,
      verificarJubilacion,
    };
  },
};
</script>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
}
</style>
