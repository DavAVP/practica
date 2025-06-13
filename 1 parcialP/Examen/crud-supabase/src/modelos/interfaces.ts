
//IMAGEN 1.png - Categorías de establecimientos

interface Categoria {
  id: string;
  nombre: string;          
  descripcion?: string;    
  icono?: string;         
}

interface Establecimiento {
  id: string;
  nombre: string;          
  descripcion: string;     
  categoriaId: string;     
  direccion: string;       
  telefono: string;       
  horario: string[];       
  calificacion: number;    
  totalResenas: number;
}


 //IMAGEN 2.png y 3.png - Tickets de cola

interface Ticket {
  id: string;
  codigo: string;           
  establecimientoId: string; 
  posicionActual: number;   
  personasDelante: number;  
  estado: "esperando" | "llamando" | "atendido" | "cancelado";
  tiempoEspera: number;     
  horaCreacion: string;     
}


// IMAGEN 4.png - Notificaciones

interface Notificacion {
  id: string;
  usuarioId: string;       
  ticketId: string;        
  mensaje: string;         
  tipo: "aproximacion" | "turno_listo"; 
  leida: boolean;
  timestamp: string;       
}

// IMAGEN 5.png - Reseñas

interface Resena {
  id: string;
  establecimientoId: string; 
  usuario: string;         
  calificacion: number;    
  comentario: string;       
  fecha: string;            
  likes?: number;          
}


interface Usuario {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  ticketsActivos: string[]; 
}

interface ConfigNotificaciones {
  usuarioId: string;
  sonido: boolean;        
  vibracion: boolean;
}