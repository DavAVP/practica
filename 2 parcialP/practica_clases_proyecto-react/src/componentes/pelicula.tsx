


interface IPpelicula {
    id: number;
    nombre: string;
    descripcion: string;
    url : string;
}

interface IPeliculaProps {
    nombre: string;
    url: string;
}

//siempre debe haber un solo componente padre
//se puede usar <> para agrupar sin crear un div extra
const Pelicula = ( {nombre, url}: IPeliculaProps)=> {
    return( 

        <div className="pelicula">
            <h1 style= {{backgroundColor: 'red'}}>{nombre}</h1>
            <img  style= {{width:'400px', height:'400px'}} src= {url} alt={nombre} />

        </div>
    );
}

export default Pelicula;
export type {IPpelicula};

