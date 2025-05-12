class Jugador {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.goles = 0;
    }
}

class DirectorTecnico {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Equipo{
    constructor(jugadores, tecnico){
        this.jugadores = jugadores;

        const esTecnico = tecnico instanceof DirectorTecnico
        if(!esTecnico){
            throw new Error('El argumento tecnico no es un Director Técnico')
        }
        this.tecnico = tecnico;
        this.goles = 0;
    }

    hacerGol(jugador){
        const esJugador = jugador instanceof Jugador;

        if(!esJugador){
            throw new Error('Sólo los jugadores pueden hacer goles');
        }
        jugador.goles++;
        this.goles++;
    }
}

const montiel = new Jugador('Santiago', 'Montiel');
const lomonaco = new Jugador('Kevin', 'Lomónaco');
const jugadorReserva1 = new Jugador('Jugador', 'Reserva1');
const jugadorReserva2 = new Jugador('Jugador', 'Reserva2');
const vaccari = new DirectorTecnico('Julio', 'Vaccari');

const independiente = new Equipo([montiel, lomonaco], vaccari);
const independienteReserva = new Equipo([jugadorReserva1, jugadorReserva2], vaccari);

independiente.hacerGol(montiel);
independiente.hacerGol(montiel);
independienteReserva.hacerGol(jugadorReserva1);
