<script setup lang="ts">
import { ref } from 'vue';
import type { ContenidoFormulario } from '../entidades/contenido';
import { subidaContenido } from '../servicios/Subida';
import { useToast } from 'vue-toastification';

const toast = useToast();
const isLoading = ref(false);
const formData = ref<ContenidoFormulario>({
    titulo: '',
    descripcion: '',
    archivo: null,
});

const handleFileChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    formData.value.archivo = input.files?.[0] || null;
};

const handleSubmit = async () => {
    if (!formData.value.titulo || !formData.value.archivo) {
        toast.error('¡Completa todos los campos requeridos!');
        return;
    }

    isLoading.value = true;
    try {
        await subidaContenido(formData.value);
        formData.value = { titulo: '', descripcion: '', archivo: null };
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="card">
        <h1>Subir Contenido</h1>
        
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Título *</label>
                <input 
                    v-model="formData.titulo" 
                    type="text" 
                    placeholder="Coloque un titulo de su contenido" 
                    required
                >
            </div>

            <div class="form-group">
                <label>Descripción</label>
                <textarea 
                    v-model="formData.descripcion" 
                    placeholder="Describe el contenido..."
                ></textarea>
            </div>

            <div class="form-group">
                <label>Archivo *</label>
                <input 
                    type="file" 
                    @change="handleFileChange" 
                    required
                >
            </div>

            <button type="submit" :disabled="isLoading">
                <LoadingOverlay 
                    :active="isLoading" 
                    :can-cancel="false"
                    loader="dots"
                />
                {{ isLoading ? 'Subiendo...' : 'Subir Archivo' }}
            </button>
        </form>
    </div>
</template>
