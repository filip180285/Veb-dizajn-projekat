$(document).ready(function () {
    let zivotinje = [];
    let id = parseInt(localStorage.getItem("soloZivotinja"));
    let zivotinja;
    zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for (let i = 0; i < zivotinje.length; i++) {
        if (zivotinje[i].id == id) {
            zivotinja = zivotinje[i]; break;
        }
    }

    let putanjaDoSlike = "../../slike/" + zivotinja.slika;
    let putanjaDoVidea = "../../video/" + zivotinja.video;
    //alert(putanjaDoVidea);
    let slika = $("<img>").attr("src", putanjaDoSlike);
    slika.addClass("rounded");

    $("#slikaZivotinje").append(slika);
    $("#ime").text(zivotinja.ime);
    $("#opis").text(zivotinja.opis);
    $("#tezina").text(zivotinja.tezina);
    $("#godine").text(zivotinja.godine);
    $("#video").append(
        "<source src='" + putanjaDoVidea + "'type='video/mp4'>"
    );
})