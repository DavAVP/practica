# Café Express - Gestión de Colas  

## Interfaces por Imagen
📌 Introducción
Este documento detalla el diseño del sistema de gestión de colas basado en los requisitos visuales proporcionados (imágenes I1.png a I5.png). Contiene:

Interfaces TypeScript con explicaciones detalladas
Estructura completa de la base de datos JSON
Relación explícita con cada imagen
Diagramas de flujo clave


🔧 Interfaces del Sistema
1. Categoría (I1.png)

/**
 * Representa las categorías de establecimientos mostradas en I1.png
 * Ejemplo: Restaurantes, Salones, Clínicas
 */
interface Categoria {
  id: string;               // Identificador único (ej: "cat_restaurantes")
  nombre: string;           // Nombre mostrado en UI (ej: "Restaurantes")
  icono: string;            // Ícono representativo (ej: "🍽️")
  establecimientos: string[]; // IDs de establecimientos relacionados
}
2. Establecimiento (I5.png)

/**
 * Modela los establecimientos como se ven en I5.png
 * Ejemplo: "The Cozy Corner Café"
 */
interface Establecimiento {
  id: string;
  nombre: string;
  categoriaId: string;      // Relación con Categoria
  descripcion: string;      // Texto descriptivo como en I5.png
  contacto: {
    direccion: string;      // Formato: "123 Main St, Ciudad"
    telefono: string;       // Formato: "+1 (555) 123-4567"
  };
  horario: {               // Horarios detallados
    dias: string;          // Ej: "Lunes a Viernes"
    horas: string;         // Ej: "7:00 AM - 6:00 PM"
  }[];
  metricas: {
    calificacion: number;  // 1-5 estrellas
    totalResenas: number;  // Cantidad de reseñas
  };
}
3. Ticket (I2.png y I3.png)

/**
 * Representa los tickets de cola mostrados en I2.png y I3.png
 * Ejemplo: Ticket "A12" con posición #3
 */
interface Ticket {
  id: string;
  codigo: string;          // Código alfanumérico (ej: "A12")
  establecimientoId: string;// Relación con Establecimiento
  estado: "espera" | "llamando" | "atendido" | "cancelado";
  posicion: {
    actual: number;        // Posición actual (ej: 3)
    totalEnCola: number;   // Total en cola (ej: 10)
  };
  tiempoEspera: number;    // Minutos estimados (ej: 15)
  historial: {             // Registro de cambios
    evento: string;        // Ej: "Ticket creado"
    timestamp: string;     // Fecha ISO 8601
  }[];
}
4. Notificación (I4.png)

/**
 * Modela las notificaciones de la imagen I4.png
 */
interface Notificacion {
  id: string;
  ticketId: string;        // Ticket relacionado
  tipo: "aproximacion" | "turno_listo";
  contenido: {
    mensaje: string;       // Ej: "Su turno es en 10 min"
    timestamp: string;     // Fecha de envío
  };
  configuracion: {
    sonido: boolean;       // Preferencia del usuario
    vibracion: boolean;    // Preferencia del usuario
  };
}
5. Reseña (I5.png)

/**
 * Representa las reseñas mostradas en I5.png
 */
interface Resena {
  id: string;
  establecimientoId: string;
  usuario: {
    nombre: string;        // Ej: "Sophia Clark"
    avatar?: string;       // URL de imagen
  };
  contenido: {
    calificacion: number;  // 1-5 estrellas
    comentario: string;    // Texto de la reseña
    fecha: string;         // Formato: "Hace 2 semanas"
  };
  interacciones: {
    likes: number;         // Cantidad de "me gusta"
    respuestas: {          // Respuestas a la reseña
      usuario: string;
      mensaje: string;
    }[];
  };
}

🗃️ Base de Datos JSON

{
  "categorias": [
    {
      "id": "cat_restaurantes",
      "nombre": "Restaurantes",
      "icono": "🍽️",
      "establecimientos": ["est_cozy_corner"]
    }
  ],
  "establecimientos": [
    {
      "id": "est_cozy_corner",
      "nombre": "The Cozy Corner Café",
      "categoriaId": "cat_restaurantes",
      "descripcion": "A cozy spot for coffee and pastries...",
      "contacto": {
        "direccion": "123 Main Street, Anytown",
        "telefono": "+1 (555) 123-4567"
      },
      "horario": [
        {
          "dias": "Lunes a Viernes",
          "horas": "7:00 AM - 6:00 PM"
        }
      ],
      "metricas": {
        "calificacion": 4.5,
        "totalResenas": 234
      }
    }
  ],
  "tickets": [
    {
      "id": "tck_A12",
      "codigo": "A12",
      "establecimientoId": "est_cozy_corner",
      "estado": "espera",
      "posicion": {
        "actual": 3,
        "totalEnCola": 10
      },
      "tiempoEspera": 15,
      "historial": [
        {
          "evento": "Ticket creado",
          "timestamp": "2023-11-20T10:00:00Z"
        }
      ]
    }
  ]
}