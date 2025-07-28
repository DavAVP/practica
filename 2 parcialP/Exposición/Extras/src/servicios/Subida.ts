import { useToast } from "vue-toastification";
import type {ContenidoFormulario} from '../entidades/contenido'

const toast = useToast()

export const subidaContenido = async (data: ContenidoFormulario) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            toast.success('Se subio exitosamente')
            resolve({
                ...data,
                id: Date.now(),
                fechaSubida: new Date(),
            })
        }, 400)
    }) 
}

