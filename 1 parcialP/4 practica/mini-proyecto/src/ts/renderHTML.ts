interface Historial {
  id: number;
  producto: string;
  usuario: string;
  fecha: string;
}

let historial: Historial[] = [
  { id: 1, producto: "Bicicleta", usuario: "Juan", fecha: "2025-06-01" },
  { id: 2, producto: "Laptop", usuario: "María", fecha: "2025-06-02" },
  { id: 3, producto: "Libro", usuario: "Pedro", fecha: "2025-06-03" },
];

const contenedor = document.getElementById("historial") as HTMLDivElement;

function renderHistorial() {
  contenedor.innerHTML = "";
  historial.forEach(item => {
    const div = document.createElement("div");
    div.className = "bg-white rounded shadow p-4 flex justify-between items-center";

    div.innerHTML = `
      <div>
        <h4 class="font-bold">${item.producto}</h4>
        <p>Usuario: ${item.usuario}</p>
        <p>Fecha: ${item.fecha}</p>
      </div>
      <div>
        <button class="text-red-500" onclick="eliminar(${item.id})">Eliminar</button>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

(window as any).eliminar = function(id: number) {
  historial = historial.filter(h => h.id !== id);
  renderHistorial();
};

renderHistorial();