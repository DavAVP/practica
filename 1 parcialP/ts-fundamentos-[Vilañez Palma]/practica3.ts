// Practica 3: Tipos, Clases, Arreglos y Funciones en TypeScript
// Descripción: Este código simula un sistema de gestión de pedidos en un negocio de venta de productos electrónicos.


// Negocio de venta de productos electrónicos
// 1. Tipos básicos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// 2. Interfaces
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria?: string;
}

interface Cliente {
  id: number;
  nombre: string;
  correo: string;
  vip?: boolean;
}

interface Pedido {
  id: number;
  clienteId: number;
  productos: Producto[];
  fecha: string;
}

// 3. Clases para organizar funcionalidades del sistema
class ClienteService {
  constructor(private clientes: Cliente[]) {}

  mostrarClientes() {
    this.clientes.forEach(c => console.log(c));
  }
}

class ProductoService {
  constructor(private productos: Producto[]) {}

  filtrarPorCategoria(cat: string) {
    return this.productos.filter(p => p.categoria === cat);
  }
}

class PedidoService {
  constructor(private pedidos: Pedido[]) {}

  resumenPedido(id: number) {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      const total = pedido.productos.reduce((acc, p) => acc + p.precio, 0);
      console.log(`Pedido #${pedido.id} Total: $${total}`);
    }
  }
}

// 4. Arreglos con datos iniciales
const productos: Producto[] = [
  { id: 1, nombre: "Mouse", precio: 10, stock: 20, categoria: "Periférico" },
  { id: 2, nombre: "Teclado", precio: 20, stock: 10, categoria: "Periférico" },
  { id: 3, nombre: "Monitor", precio: 150, stock: 5, categoria: "Pantalla" },
  { id: 4, nombre: "Laptop", precio: 600, stock: 3, categoria: "Computadora" },
  { id: 5, nombre: "Tablet", precio: 300, stock: 7 },
  { id: 6, nombre: "Router", precio: 40, stock: 9 },
  { id: 7, nombre: "USB", precio: 5, stock: 100 },
  { id: 8, nombre: "SSD", precio: 80, stock: 15 },
  { id: 9, nombre: "HDD", precio: 60, stock: 8 },
  { id: 10, nombre: "Cámara", precio: 120, stock: 6 },
];

const clientes: Cliente[] = [
  { id: 1, nombre: "Ana", correo: "ana@mail.com", vip: true },
  { id: 2, nombre: "Luis", correo: "luis@mail.com" },
  { id: 3, nombre: "Carlos", correo: "carlos@mail.com" },
  { id: 4, nombre: "Sofía", correo: "sofia@mail.com" },
  { id: 5, nombre: "Diana", correo: "diana@mail.com" },
  { id: 6, nombre: "Pedro", correo: "pedro@mail.com" },
  { id: 7, nombre: "Lucía", correo: "lucia@mail.com" },
  { id: 8, nombre: "Tomás", correo: "tomas@mail.com" },
  { id: 9, nombre: "Marta", correo: "marta@mail.com" },
  { id: 10, nombre: "Diego", correo: "diego@mail.com" },
];

const pedidos: Pedido[] = [
  { id: 1, clienteId: 1, productos: [productos[0], productos[1]], fecha: "2024-01-01" },
  { id: 2, clienteId: 2, productos: [productos[2], productos[3]], fecha: "2024-01-02" },
  { id: 3, clienteId: 3, productos: [productos[4]], fecha: "2024-01-03" },
  { id: 4, clienteId: 4, productos: [productos[5], productos[6]], fecha: "2024-01-04" },
  { id: 5, clienteId: 5, productos: [productos[7]], fecha: "2024-01-05" },
  { id: 6, clienteId: 6, productos: [productos[8]], fecha: "2024-01-06" },
  { id: 7, clienteId: 7, productos: [productos[9], productos[0]], fecha: "2024-01-07" },
  { id: 8, clienteId: 8, productos: [productos[1]], fecha: "2024-01-08" },
  { id: 9, clienteId: 9, productos: [productos[2], productos[3]], fecha: "2024-01-09" },
  { id: 10, clienteId: 10, productos: [productos[4]], fecha: "2024-01-10" },
];

// 5. Funciones tipadas
function insertarProducto(producto: Producto): void {
  productos.push(producto);
}

function eliminarProducto(id: number): void {
  const index = productos.findIndex(p => p.id === id);
  if (index >= 0) productos.splice(index, 1);
}

// 6. Tipos especiales
type ID = number | string;
type Categoria = "Periférico" | "Pantalla" | "Computadora";

// 7. map()
const nombresProductos = productos.map(p => p.nombre);
const correosClientes = clientes.map(c => c.correo);
const totalesPedidos = pedidos.map(p => p.productos.reduce((suma, prod) => suma + prod.precio, 0));

// 8. filter()
const productosBaratos = productos.filter(p => p.precio < 50);
const clientesVIP = clientes.filter(c => c.vip);
const pedidosGrandes = pedidos.filter(p => p.productos.length > 1);

// 9. reduce()
const totalStock = productos.reduce((suma, p) => suma + p.stock, 0);
const totalVentas = pedidos.reduce((total, p) => {
  return total + p.productos.reduce((suma, prod) => suma + prod.precio, 0);
}, 0);

// 10. Relación de entidades
function mostrarPedidoDetallado(pedidoId: number) {
  const pedido = pedidos.find(p => p.id === pedidoId);
  if (!pedido) return console.log("Pedido no encontrado");
  const cliente = clientes.find(c => c.id === pedido.clienteId);
  console.log(`Cliente: ${cliente?.nombre}`);
  pedido.productos.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
}

// 11. Operación especial
function contarProductosPorCliente(clienteId: number): number {
  const pedidosCliente = pedidos.filter(p => p.clienteId === clienteId);
  return pedidosCliente.reduce((acc, p) => acc + p.productos.length, 0);
}

// 12. Impresión anidada (igual que tu pana)
pedidos.forEach((p, i) => {
  const cliente = clientes.find(c => c.id === p.clienteId);
  console.log(`Elemento ${i + 1}: PedidoTienda {`);
  console.log(`  cliente: ClienteTienda { nombre: '${cliente?.nombre}', correo: '${cliente?.correo}' },`);
  console.log(`  productos: [`);
  p.productos.forEach(prod => {
    console.log(`    ProductoTienda { nombre: '${prod.nombre}', precio: ${prod.precio}, stock: ${prod.stock}, categoria: '${prod.categoria ?? "N/A"}' },`);
  });
  console.log(`  ],`);
  console.log(`  fecha: '${p.fecha}'`);
  console.log(`}\n`);
});