function enviar() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let pais = document.getElementById("pais").value
    let posicion = document.getElementById("posicion").value

    if (posicion === "1" || posicion === "1ro" || posicion === "1RO" || posicion === "1Ro" || posicion === "1rO" || posicion === "Primero" || posicion === "primero" || posicion === "PRIMERO" || posicion === "pRIMERO"){
        document.getElementById("mostrarn1").innerHTML = nombre
        document.getElementById("mostrara1").innerHTML = apellido
        document.getElementById("mostrare1").innerHTML = edad
        document.getElementById("mostrarp1").innerHTML = pais
    }
    else if (posicion === "2" || posicion === "2do" || posicion === "2DO" || posicion === "2Do" || posicion === "2dO" || posicion === "Segundo" || posicion === "segundo" || posicion === "SEGUNDO" || posicion === "sEGUNDO"){
        document.getElementById("mostrarn2").innerHTML = nombre
        document.getElementById("mostrara2").innerHTML = apellido
        document.getElementById("mostrare2").innerHTML = edad
        document.getElementById("mostrarp2").innerHTML = pais
    }
    else if (posicion === "3" || posicion === "3ro" || posicion === "3RO" || posicion === "3Ro" || posicion === "3rO" || posicion === "Tercero" || posicion === "tercero" || posicion === "TERCERO" || posicion === "tERCERO"){
        document.getElementById("mostrarn3").innerHTML = nombre
        document.getElementById("mostrara3").innerHTML = apellido
        document.getElementById("mostrare3").innerHTML = edad
        document.getElementById("mostrarp3").innerHTML = pais
    }

    else {
        document.getElementById("mostrarn1").innerHTML = "Escribí"
        document.getElementById("mostrara1").innerHTML = "Bien"
        document.getElementById("mostrare1").innerHTML = "Pelotudo"
        document.getElementById("mostrarp1").innerHTML = "Analfabeto"
    }
}