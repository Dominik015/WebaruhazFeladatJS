function szamol() {

    let tabla = document.getElementById("tabla");
    let sorok = tabla.getElementsByTagName("tr");

    let vegosszeg = 0;

    for (let i = 1; i < sorok.length; i++) {

        let arCell = sorok[i].getElementsByClassName("ar")[0];
        let osszegCell = sorok[i].getElementsByClassName("osszeg")[0];
        let input = sorok[i].getElementsByTagName("input")[0];

        let ar = parseInt(arCell.innerText);
        let darab = parseInt(input.value);

        let osszeg = ar * darab;

        osszegCell.innerText = osszeg;

        vegosszeg = vegosszeg + osszeg;
    }

    document.getElementById("vegosszeg").innerText = vegosszeg + " Ft";
}