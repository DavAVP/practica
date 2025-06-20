import type { IPpelicula } from "./pelicula";
import Pelicula from "./pelicula";

interface Icartelera {
    listaPel: IPpelicula[];
}

const Cartelera = ({listaPel}: Icartelera) => {
    return(
        <div className="Cartelera">
            <h1>Cartera</h1>
            {listaPel.map((pelicula) => (
                <Pelicula key={pelicula.id} nombre={pelicula.nombre} url={pelicula.url}/>
            ))}
        </div>

    );
}

export default Cartelera;
