function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}
function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}
function kivalaszt(termekNev) {
    let darabSzam = prompt("Hány darabot szeretnél vásárolni?");
    let kosarLista = document.getElementById("kosarLista");
    let uj = document.createElement("li");
    uj.textContent = darabSzam + " db " + termekNev;
    kosarLista.appendChild(uj);
}