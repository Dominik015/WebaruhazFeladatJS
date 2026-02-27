function szamol() {

    var tabla = document.getElementById("tabla");
    var sorok = tabla.getElementsByTagName("tr");

    var vegosszeg = 0;

    for (var i = 1; i < sorok.length; i++) {

        var arCell = sorok[i].getElementsByClassName("ar")[0];
        var osszegCell = sorok[i].getElementsByClassName("osszeg")[0];
        var input = sorok[i].getElementsByTagName("input")[0];

        var ar = parseInt(arCell.innerText);
        var darab = parseInt(input.value);

        var osszeg = ar * darab;

        osszegCell.innerText = osszeg;

        vegosszeg = vegosszeg + osszeg;
    }

    document.getElementById("vegosszeg").innerText = vegosszeg + " Ft";
}