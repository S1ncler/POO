class Persona {
    #nombre;
    #id;

    constructor(nombre = "", id = "") {
        this.nombre = nombre;
        this.id = id;
    };

    getNombre() {
        return this.nombre;
    };
    getId() {
        return this.id;
    };
};

class Auto {
    #propietario;
    #marca;
    #placa;
    #encendido;

    constructor(propietario = "", marca = "", placa = "") {
        this.propietario = propietario;
        this.marca = marca;
        this.placa = placa;
        this.encendido = false;
        console.log("Se creo el auto");
    };

    encender() {
        this.encendido = true;
        console.log("encendido");
    };
    apagar() {
        this.encendido = false;
        console.log("apagado");
    };
    getMarca() {
        return this.marca;
    };
    getPropietario() {
        return this.propietario;
    };
    getPlaca() {
        return this.placa;
    };
    setPropietario(propietario = "") {
        this.propietario = propietario;
        console.log(`EL nuevo propietario es ${this.propietario.getNombre()}`);
    };
};

const perCamilo = new Persona("Camilo", "74839");
const perDaniel = new Persona("Daniel", "87654")


const auto1 = new Auto(perCamilo, "Chevrolet", "EYB811");
auto1.encender();
auto1.apagar();
console.log(auto1.getMarca());
console.log(auto1.getPlaca());
console.log(auto1.getPropietario().getNombre());
auto1.setPropietario(perDaniel);
console.log(auto1.getPropietario().getNombre());
console.log(auto1);