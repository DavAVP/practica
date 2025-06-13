import type { Category } from './category'
import type { Paciente } from './paciente'

export interface JsonDatabase {
  categories: Category[]
  pacientes: Paciente[]
}

export const database: JsonDatabase = {
  categories: [
    { id: 1, description: 'Medicina General', created_at: '2024-01-01' },
    { id: 2, description: 'Pediatría', created_at: '2024-01-01' },
    { id: 3, description: 'Cardiología', created_at: '2024-01-01' }
  ],
  pacientes: [
    {
      id: 1,
      nombre: 'Juan Carlos',
      apellido: 'González',
      fecha_nacimiento: '1985-03-15',
      genero: 'Masculino',
      telefono: '+1-555-0123',
      email: 'juan.gonzalez@email.com',
      direccion: 'Calle Principal 123, Ciudad'
    },
    {
      id: 2,
      nombre: 'María Elena',
      apellido: 'Rodríguez',
      fecha_nacimiento: '1992-07-22',
      genero: 'Femenino',
      telefono: '+1-555-0456',
      email: 'maria.rodriguez@email.com',
      direccion: 'Avenida Central 456, Ciudad'
    }
  ]
}

// Contadores simples para IDs
export let nextCategoryId = 4
export let nextPacienteId = 3

export function getNextCategoryId(): number {
  return nextCategoryId++
}

export function getNextPacienteId(): number {
  return nextPacienteId++
} 