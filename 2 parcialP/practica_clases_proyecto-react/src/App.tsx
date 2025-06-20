import './App.css'
import type { IPpelicula } from './componentes/pelicula'
import  Cartelera from './componentes/cartelera'

const peliculas: IPpelicula[] = [
  {
    id: 1,
    nombre: 'El padrino',
    descripcion: 'drama criminal',
    url: '...'
  },
]

function App() {

  return (
    <>
    <Cartelera listaPel={peliculas} />
    </>
  )
}

export default App
