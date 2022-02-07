let finestra;


window.enviarcookies = function () {

    var resultat = loadCookies();
    let calcul = resultat["r"] / (resultat["m"] * resultat["n"]);
    calcul = Math.ceil(calcul);

    let divPrincipal = document.getElementById("div1")
    divPrincipal.innerHTML = "Vols " + resultat["r"] + " peses de Xocolata. Necessites " + calcul + " Rejoles de " + resultat["m"] + " x " + resultat["n"];

    let div = document.getElementById("text");
    for (let i = 0; i < calcul; i++) {
        let table = document.createElement("table");
        table.className = "rajola";
        for (let j = 0; j < resultat["m"]; j++) {
            let row = document.createElement("tr");
            for (let k = 0; k < resultat["n"]; k++) {
                let td = document.createElement("td");
                td.className = "quadret";
                row.appendChild(td);
            }
            table.appendChild(row);
        }
        div.appendChild(table)
    }

}


function obrirNovaFinestra() {
    finestra = window.open("formulari.html")
    document.getElementById("text").innerHTML = "";

}

function tacarFinestra() {
    guardarDadesCooke()
    window.close();
    if (window.opener) {
        window.opener.enviarcookies();
    }
}

function guardarDadesCooke() {

    let horitzonal = document.getElementById("hor").value;
    let vertical = document.getElementById("ver").value;
    let quadradets = document.getElementById("qua").value;


    setCookies(horitzonal, vertical, quadradets);
}


function setCookies(horitzonal, vertical, quadradets) {
    if (horitzonal !== null && vertical !== null) {
        if (quadradets !== null) {
            //Per qualsevol color posem la cookie
            let dataActual = new Date;
            dataActual.setDate(dataActual.getDate()+1);
            document.cookie = "r=" + quadradets + "; expires=" + dataActual.toUTCString();
            document.cookie = "n=" + horitzonal + "; expires=" + dataActual.toUTCString();
            document.cookie = "m=" + vertical + "; expires=" + dataActual.toUTCString();

        }
    }
}


function loadCookies() {
    var arrayCookie = [];

    if (document.cookie.length == 0)
        return;
    let cookies = document.cookie.split(";");
    for (var cookie of cookies) {
        let numeros = cookie.split("=");
        arrayCookie[numeros[0].trim()] = parseInt(numeros[1].trim());
    }
    return arrayCookie;
}
