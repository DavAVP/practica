// Practica 3: Tipos, Clases, Arreglos y Funciones en TypeScript
// Descripción: Este código simula un sistema de gestión de pedidos en un negocio de venta de productos electrónicos.
// Negocio de venta de productos electrónicos
// 1. Tipos básicos
var nombre = "Juan";
var edad = 25;
var activo = true;
// 3. Clases para organizar funcionalidades del sistema
var ClienteService = /** @class */ (function () {
    function ClienteService(clientes) {
        this.clientes = clientes;
    }
    ClienteService.prototype.mostrarClientes = function () {
        this.clientes.forEach(function (c) { return console.log(c); });
    };
    return ClienteService;
}());
var ProductoService = /** @class */ (function () {
    function ProductoService(productos) {
        this.productos = productos;
    }
    ProductoService.prototype.filtrarPorCategoria = function (cat) {
        return this.productos.filter(function (p) { return p.categoria === cat; });
    };
    return ProductoService;
}());
var PedidoService = /** @class */ (function () {
    function PedidoService(pedidos) {
        this.pedidos = pedidos;
    }
    PedidoService.prototype.resumenPedido = function (id) {
        var pedido = this.pedidos.find(function (p) { return p.id === id; });
        if (pedido) {
            var total = pedido.productos.reduce(function (acc, p) { return acc + p.precio; }, 0);
            console.log("Pedido #".concat(pedido.id, " Total: $").concat(total));
        }
    };
    return PedidoService;
}());
// 4. Arreglos con datos iniciales
var productos = [
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
var clientes = [
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
var pedidos = [
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
function insertarProducto(producto) {
    productos.push(producto);
}
function eliminarProducto(id) {
    var index = productos.findIndex(function (p) { return p.id === id; });
    if (index >= 0)
        productos.splice(index, 1);
}
// 7. map()
var nombresProductos = productos.map(function (p) { return p.nombre; });
var correosClientes = clientes.map(function (c) { return c.correo; });
var totalesPedidos = pedidos.map(function (p) { return p.productos.reduce(function (suma, prod) { return suma + prod.precio; }, 0); });
// 8. filter()
var productosBaratos = productos.filter(function (p) { return p.precio < 50; });
var clientesVIP = clientes.filter(function (c) { return c.vip; });
var pedidosGrandes = pedidos.filter(function (p) { return p.productos.length > 1; });
// 9. reduce()
var totalStock = productos.reduce(function (suma, p) { return suma + p.stock; }, 0);
var totalVentas = pedidos.reduce(function (total, p) {
    return total + p.productos.reduce(function (suma, prod) { return suma + prod.precio; }, 0);
}, 0);
// 10. Relación de entidades
function mostrarPedidoDetallado(pedidoId) {
    var pedido = pedidos.find(function (p) { return p.id === pedidoId; });
    if (!pedido)
        return console.log("Pedido no encontrado");
    var cliente = clientes.find(function (c) { return c.id === pedido.clienteId; });
    console.log("Cliente: ".concat(cliente === null || cliente === void 0 ? void 0 : cliente.nombre));
    pedido.productos.forEach(function (p) { return console.log("- ".concat(p.nombre, " ($").concat(p.precio, ")")); });
}
// 11. Operación especial
function contarProductosPorCliente(clienteId) {
    var pedidosCliente = pedidos.filter(function (p) { return p.clienteId === clienteId; });
    return pedidosCliente.reduce(function (acc, p) { return acc + p.productos.length; }, 0);
}
// 12. Impresión anidada (igual que tu pana)
pedidos.forEach(function (p, i) {
    var cliente = clientes.find(function (c) { return c.id === p.clienteId; });
    console.log("Elemento ".concat(i + 1, ": PedidoTienda {"));
    console.log("  cliente: ClienteTienda { nombre: '".concat(cliente === null || cliente === void 0 ? void 0 : cliente.nombre, "', correo: '").concat(cliente === null || cliente === void 0 ? void 0 : cliente.correo, "' },"));
    console.log("  productos: [");
    p.productos.forEach(function (prod) {
        var _a;
        console.log("    ProductoTienda { nombre: '".concat(prod.nombre, "', precio: ").concat(prod.precio, ", stock: ").concat(prod.stock, ", categoria: '").concat((_a = prod.categoria) !== null && _a !== void 0 ? _a : "N/A", "' },"));
    });
    console.log("  ],");
    console.log("  fecha: '".concat(p.fecha, "'"));
    console.log("}\n");
});
