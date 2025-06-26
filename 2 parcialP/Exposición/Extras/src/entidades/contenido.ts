
interface Contenido{
    id?: number
    titulo: string
    descripcion: string
    archivo: File | null
    fechaSubida: Date

}

export type ContenidoFormulario = Omit<Contenido, 'id' | 'fechaSubida'>
