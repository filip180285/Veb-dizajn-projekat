$(document).ready(function () {
    //alert("test");
    let zivotinje = [];
    let macke = [];
    zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for (let i = 0; i < zivotinje.length; i++) {
        if (zivotinje[i].vrsta == 'macka') {
            macke.push(zivotinje[i]);
            //alert(zivotinje[i].ime)
        }
    }

    for (let i = 0; i < macke.length; i++) {
        let ime = macke[i].ime;
        let putanjaDoSlike = "../../slike/" + macke[i].slika;

        let slika = $("<img>").attr("src", putanjaDoSlike)
        slika.addClass("rounded-circle")
        slika.attr("id", macke[i].id)

        $("#macke").append("<hr>").append(slika).append("<br>").append(ime);
    }

    $("#macke img").click(function () {
        //alert($(this).attr("id"));
        localStorage.setItem("soloZivotinja", $(this).attr("id"));
        window.location.href = "soloZivotinja.html";
        return;
    });
})