📌 Proyecto Vue 3: Sistema de Subida de Archivos
Aplicación sencilla para subir contenido con:
- Vue Toastification (Notificaciones elegantes)
- Vue Loading Overlay (Indicador de carga)

--------------------------------------------------------------------------------------
📂 Estructura del Proyecto
src/
├── assets/                # Estilos globales (CSS)
├── entidades/            # Tipos e interfaces TypeScript
│   └── contenido.ts      # Define la estructura de los datos
├── servicios/            # Lógica de negocio
│   └── Subida.ts         # Simula la subida de archivos
├── paginas/              # Vistas/páginas
│   └── PaginaSubida.vue  # Formulario principal
└── main.ts               # Configuración inicial

--------------------------------------------------------------------------------------
⚙️ Configuración Técnica
1. Dependencias Principales
Librería
vue-toastification-----Notificaciones estilo Toast
vue-loading-overlay----Spinner de carga elegante

2. Instalación
npm install vue-toastification@next vue-loading-overlay@6.0.0
npm install -D @types/node  # Soporte para TypeScript

--------------------------------------------------------------------------------------
📄 Explicación de Archivos

1. entidades/contenido.ts
- Define la estructura de los datos

interface Contenido {
    id?: number;
    titulo: string;
    descripcion: string;
    archivo: File | null;
    fechaSubida?: Date;
}

export type ContenidoFormulario = Omit<Contenido, 'id' | 'fechaSubida'>;

2. servicios/Subida.ts
- Simula una subida a servidor:

export const subidaContenido = async (data: ContenidoFormulario) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            toast.success('¡Se subió exitosamente!');
            resolve({
                ...data,
                id: Date.now(),
                fechaSubida: new Date(),
            });
        }, 4000); // Simula 4 segundos de carga
    });
};

3. paginas/PaginaSubida.vue
Componente principal con:
-Manejo de archivos con <input type="file">
-Integración de notificaciones y loading overlay

<button type="submit" :disabled="isLoading">
    <LoadingOverlay 
        :active="isLoading" 
        loader="dots"
    />
    {{ isLoading ? 'Subiendo...' : 'Subir Archivo' }}
</button>

4. main.ts
Configura plugins globales:

app.use(Toast); // Toastification
app.component('LoadingOverlay', Loading); // Loading Overlay
