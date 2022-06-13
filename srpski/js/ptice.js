$(document).ready(function () {
    //alert("test");
    let zivotinje = [];
    let ptice = [];
    zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for (let i = 0; i < zivotinje.length; i++) {
        if (zivotinje[i].vrsta == 'ptica') {
            ptice.push(zivotinje[i]);
            //alert(zivotinje[i].ime)
        }
    }

    for (let i = 0; i < ptice.length; i++) {
        let ime = ptice[i].ime;
        let putanjaDoSlike = "../../slike/" + ptice[i].slika;

        let slika = $("<img>").attr("src", putanjaDoSlike)
        slika.addClass("rounded-circle")
        slika.attr("id", ptice[i].id)

        $("#ptice").append("<hr>").append(slika).append("<br>").append(ime +"("+ptice[i].godine + ")");
    }

    $("#ptice img").click(function () {
        //alert($(this).attr("id"));
        localStorage.setItem("soloZivotinja", $(this).attr("id"));
        window.location.href = "soloZivotinja.html";
        return;
    });
})