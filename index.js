
let datos = [];

function agregar() {
    let dato = document.getElementById("numeros");

    datos.push(dato.value)

    dato.value = ""

    dato.focus()
}

function mostrar() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =  "";
    
    let titulo = document.createElement("p");
    titulo.innerText = "listado de pesos de estudiantes"

    resultado.appendChild(titulo);
    
    datos.forEach(dato => {
        let datoParrafo = document.createElement("p");
        datoParrafo.innerText = dato;

        resultado.appendChild(datoParrafo);
    });
}

function estadisticas() {
    let estadistica = document.getElementById("estadisticas")

    let menos40 = 0
    let entre40y50 = 0
    let entre50y60 = 0
    let masOIgual60 = 0

    datos.forEach((dato) => {
        let peso = Number(dato)

        if (peso < 40) {
            menos40 += 1
        }

        if (peso >= 40 && peso < 50) {
            entre40y50 += 1
        }

        if (peso >= 50 && peso < 60) {
            entre50y60 += 1
        }

        if (peso >= 60) {
            masOIgual60 += 1
        }
    });

    estadistica.innerHTML =  "";

    let m40 = document.createElement("p")
    m40.innerText = "alumnos de menos de 40 kg: " + menos40
    estadistica.appendChild(m40);

    let e40y50 = document.createElement("p")
    e40y50.innerText = "Alumnos entre 40 y 50: " + entre40y50
    estadistica.appendChild(e40y50);

    let mym60 = document.createElement("p")
    mym60.innerText = "Alumnos de mas de 50 y menos de 60: " + entre50y60
    estadistica.appendChild(mym60);

    let moi60 = document.createElement("p")
    moi60.innerText = "Alumnos de mas o igual a 60: " + masOIgual60
    estadistica.appendChild(moi60);
}