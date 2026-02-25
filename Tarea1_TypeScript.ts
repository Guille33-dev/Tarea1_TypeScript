/* 1. Variables y tipos – Jugador
Declara variables para el nombre (string), nivel (number) y activo (boolean) de un jugador.
Imprime sus valores en consola.
*/
console.log("1. Variables y tipos - Jugador")
const nombreJugador: string = "Guille"
const nivelJugador: number = 7
const activoJugador: boolean = true

console.log("Nombre:", nombreJugador)
console.log("Nivel:", nivelJugador)
console.log("Activo:", activoJugador)
console.log("")

/* 2. Tipo any – Inventario
Crea una variable item de tipo any y asígnale primero un string (arma), luego un number (cantidad).
Muestra el valor en consola después de cada asignación.
*/
console.log("2️. Tipo any - Inventario")

let item: any = "Espada"
console.log("Item (string):", item)

item = 10
console.log("Item (number):", item)
console.log("")

/* 3. Constantes y let – Puntos
Declara una constante MAX_VIDAS con 3.
Declara un let vidas que empiece en 3 y se vaya decrementando.
Imprime ambos valores.
*/
console.log("3️. Constantes y let - Puntos")
const MAX_VIDAS: number = 3
let vidas: number = 3

console.log("MAX_VIDAS:", MAX_VIDAS)
console.log("Vidas iniciales:", vidas)

vidas--
console.log("Vidas después de perder 1:", vidas)

vidas--
console.log("Vidas después de perder otra:", vidas)
console.log("")

/* 4. Operaciones básicas – Combate
Crea variables ataque y defensa (números).
Calcula daño: ataque - defensa.
Muestra el resultado.
*/
console.log("4️. Operaciones básicas - Combate")
const ataque: number = 12
const defensa: number = 5
const danio: number = ataque - defensa

console.log("Ataque:", ataque)
console.log("Defensa:", defensa)
console.log("Daño (ataque - defensa):", danio)
console.log("")

/* 5. Funciones simples – Curar
Crea una función que reciba puntosVida y curacion y devuelva la nueva vida.
Prueba con 3 valores distintos.
*/
console.log("5️. Funciones simples - Curar")
function curar(puntosVida: number, curacion: number): number {
  return puntosVida + curacion
}

console.log("Caso 1:", curar(10, 5))  // 15
console.log("Caso 2:", curar(3, 2))   // 5
console.log("Caso 3:", curar(0, 7))   // 7
console.log("")

/* 6. Arreglos y forEach – Inventario
Crea un arreglo de armas (string) y un arreglo de puntos de vida (number).
Recorre ambos con forEach() y muéstralos.
*/
console.log("6️. Arreglos y forEach - Inventario")
const armas: string[] = ["Espada", "Arco", "Daga", "Bastón"]
const puntosVidaArray: number[] = [100, 80, 60, 40]

console.log("Armas:")
armas.forEach((arma) => console.log("-", arma))

console.log("Puntos de vida:")
puntosVidaArray.forEach((pv) => console.log("-", pv))
console.log("")

/* 7. Tuplas – Ítem del jugador
Crea una tupla [string, number] que represente un arma y su daño.
Imprímela en consola.
*/
console.log("7️. Tuplas - Ítem del jugador")
const armaDanio: [string, number] = ["Hacha", 25]
console.log("Tupla arma/daño:", armaDanio)
console.log("")

/* 8. Interfaces – Personaje
Define una interfaz Personaje con nombre, nivel y salud.
Crea un objeto que implemente esta interfaz.
*/
console.log("8️. Interfaces - Personaje")
interface Personaje {
  nombre: string
  nivel: number
  salud: number
}

const personaje1: Personaje = {
  nombre: "Aria",
  nivel: 10,
  salud: 120,
}

console.log("Personaje:", personaje1)
console.log("")

/* 9. Funciones con interfaces – Presentación
Crea una función que reciba un objeto Personaje y muestre:
"Soy <nombre>, nivel <nivel>, con <salud> puntos de vida".
*/
console.log("9️. Funciones con interfaces - Presentación")
function presentarPersonaje(p: Personaje): void {
  console.log(`Soy ${p.nombre}, nivel ${p.nivel}, con ${p.salud} puntos de vida`)
}

presentarPersonaje(personaje1)
console.log("")

/* 10. Enum – Clases de Personaje
Crea un enum ClasePersonaje con: Guerrero, Mago, Arquero, Sanador.
Haz una función que reciba un número y retorne el nombre de la clase.
*/
console.log("10. Enum - Clases de Personaje")
enum ClasePersonaje {
  Guerrero,
  Mago,
  Arquero,
  Sanador,
}

function nombreClasePorNumero(n: number): string {
  // OJO: TypeScript permite indexar el enum por número para obtener el nombre
  return ClasePersonaje[n] ?? "Clase desconocida"
}

console.log("0 ->", nombreClasePorNumero(0))
console.log("1 ->", nombreClasePorNumero(1))
console.log("2 ->", nombreClasePorNumero(2))
console.log("3 ->", nombreClasePorNumero(3))
console.log("9 ->", nombreClasePorNumero(9))
console.log("")

/*  11. Clase básica – Juego
Crea una clase PersonajeJuego con nombre, nivel y salud.
Crea un método mostrarInfo() que imprima sus datos.
Crea un objeto y pruébalo.
*/
console.log("1️1. Clase básica - Juego")
class PersonajeJuego {
  constructor(
    public nombre: string,
    public nivel: number,
    public salud: number
  ) {}

  mostrarInfo(): void {
    console.log(`PersonajeJuego => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud}`)
  }
}

const pj1 = new PersonajeJuego("Dante", 8, 95)
pj1.mostrarInfo()
console.log("")

/* 12. Herencia – Especializaciones
Crea subclases Guerrero (con fuerza) y Mago (con mana).
Sobrescribe mostrarInfo() para incluir la propiedad extra.
*/
console.log("1️2. Herencia - Especializaciones")
class Guerrero extends PersonajeJuego {
  constructor(nombre: string, nivel: number, salud: number, public fuerza: number) {
    super(nombre, nivel, salud)
  }

  override mostrarInfo(): void {
    console.log(`Guerrero => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud} | Fuerza: ${this.fuerza}`)
  }
}

class Mago extends PersonajeJuego {
  constructor(nombre: string, nivel: number, salud: number, public mana: number) {
    super(nombre, nivel, salud)
  }

  override mostrarInfo(): void {
    console.log(`Mago => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud} | Mana: ${this.mana}`)
  }
}

const g1 = new Guerrero("Kratos", 12, 140, 30)
const m1 = new Mago("Merlín", 11, 90, 200)
g1.mostrarInfo()
m1.mostrarInfo()
console.log("")

/* 13. Arreglo de objetos – Batalla
Crea un arreglo con 4 personajes mezclando Guerrero y Mago.
Recorre el arreglo y muestra la información de cada uno
*/
console.log("1️3. Arreglo de objetos - Batalla")
const batalla: PersonajeJuego[] = [
  new Guerrero("Thor", 9, 130, 28),
  new Mago("Morgana", 10, 85, 220),
  new Guerrero("Leonidas", 7, 110, 25),
  new Mago("Gandalf", 15, 100, 300),
]

batalla.forEach((p) => p.mostrarInfo())
console.log("")

/* 14. Funciones genéricas – Loot
Crea una función genérica que reciba un array de ítems (string o number) y retorne el primero.
Prueba con armas y pociones.
*/
console.log("1️4. Funciones genéricas - Loot")
function primerItem<T>(items: T[]): T | undefined {
  return items[0]
}

const lootArmas: string[] = ["Lanza", "Espada legendaria", "Arco largo"]
const lootPociones: number[] = [1, 2, 3] // por ejemplo: tamaños o ids

console.log("Primer arma:", primerItem(lootArmas))
console.log("Primera poción:", primerItem(lootPociones))
console.log("")

/* 15. Gestión de juego
Crea una clase base Jugador con nombre, nivel y salud.
Subclases:
JugadorGuerrero → fuerza
JugadorMago → mana
Crea un array de 4 jugadores mezclando tipos.
Recorre el array y muestra la información de cada jugador.
*/
console.log("1️5. Gestión de juego")
class Jugador {
  constructor(
    public nombre: string,
    public nivel: number,
    public salud: number
  ) {}

  mostrarInfo(): void {
    console.log(`Jugador => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud}`)
  }
}

class JugadorGuerrero extends Jugador {
  constructor(nombre: string, nivel: number, salud: number, public fuerza: number) {
    super(nombre, nivel, salud)
  }

  override mostrarInfo(): void {
    console.log(`JugadorGuerrero => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud} | Fuerza: ${this.fuerza}`)
  }
}

class JugadorMago extends Jugador {
  constructor(nombre: string, nivel: number, salud: number, public mana: number) {
    super(nombre, nivel, salud)
  }

  override mostrarInfo(): void {
    console.log(`JugadorMago => ${this.nombre} | Nivel: ${this.nivel} | Salud: ${this.salud} | Mana: ${this.mana}`)
  }
}

const jugadores: Jugador[] = [
  new JugadorGuerrero("Ragnar", 6, 120, 22),
  new JugadorMago("Selene", 9, 85, 180),
  new JugadorGuerrero("Ares", 11, 150, 35),
  new JugadorMago("Nyx", 7, 95, 160),
]

jugadores.forEach((j) => j.mostrarInfo())