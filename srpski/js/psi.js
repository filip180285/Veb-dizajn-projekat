$(document).ready(function () {
    //alert("test");
    let zivotinje = [];
    let psi = [];
    zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for (let i = 0; i < zivotinje.length; i++) {
        if (zivotinje[i].vrsta == 'pas') {
            psi.push(zivotinje[i]);
            //alert(zivotinje[i].ime)
        }
    }

    for (let i = 0; i < psi.length; i++) {
        let ime = psi[i].ime;
        let putanjaDoSlike = "../../slike/" + psi[i].slika;

        let slika = $("<img>").attr("src", putanjaDoSlike);
        slika.addClass("rounded-circle")
        slika.attr("id", psi[i].id)

        $("#psi").append("<hr>").append(slika).append("<br>").append(ime);
    }

    $("#psi img").click(function () {
        //alert($(this).attr("id"));
        localStorage.setItem("soloZivotinja", $(this).attr("id"));
        window.location.href = "soloZivotinja.html";
        return;
    });
})