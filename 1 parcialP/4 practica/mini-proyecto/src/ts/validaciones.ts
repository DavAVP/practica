interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

const categorias: Categoria[] = [];

const form = document.getElementById("form-categoria") as HTMLFormElement;
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const descripcionInput = document.getElementById("descripcion") as HTMLInputElement;
const erroresDiv = document.getElementById("errores") as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  erroresDiv.innerHTML = "";

  const nombre = nombreInput.value.trim();
  const descripcion = descripcionInput.value.trim();
  let valido = true;

  if (!nombre || nombre.length < 3) {
    mostrarError("El nombre debe tener al menos 3 caracteres.");
    valido = false;
  }

  if (!descripcion) {
    mostrarError("La descripción es obligatoria.");
    valido = false;
  }

  if (valido) {
    const nuevaCategoria: Categoria = {
      id: Date.now(),
      nombre,
      descripcion
    };
    categorias.push(nuevaCategoria);
    alert("Categoría registrada con éxito");
    form.reset();
  }
});

function mostrarError(msg: string) {
  const p = document.createElement("p");
  p.className = "text-red-500 text-sm";
  p.textContent = msg;
  erroresDiv.appendChild(p);
}