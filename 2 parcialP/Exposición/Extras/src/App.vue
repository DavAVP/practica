<script setup lang="ts">
import { useToast } from 'vue-toastification';
import PaginaSubida from './paginas/PaginaSubida.vue';

const toast = useToast();
toast.info("Sistema listo para subir archivos");
</script>

<template>
  <PaginaSubida />
</template>
