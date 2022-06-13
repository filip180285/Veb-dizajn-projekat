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

    function prikaziSlikeIdodajDogadjaje() {
        $("#psi").empty();
        for (let i = 0; i < psi.length; i++) {
            let ime = psi[i].ime;
            let putanjaDoSlike = "../../slike/" + psi[i].slika;

            let slika = $("<img>").attr("src", putanjaDoSlike);
            slika.addClass("rounded-circle")
            slika.attr("id", psi[i].id)

            $("#psi").append("<hr>").append(slika).append("<br>").append((ime + "(" + psi[i].godine + ")"));
        }

        $("#psi img").click(function () {
            //alert($(this).attr("id"));
            localStorage.setItem("soloZivotinja", $(this).attr("id"));
            window.location.href = "soloZivotinja.html";
            return;
        });
    }

    function sortiraj() {
        //alert("test")
        let vrsta, nacin;
        if ($("#godine").prop("checked")) vrsta = "godine";
        else vrsta = "naziv";

        if ($("#rastuce").prop("checked")) nacin = "rastuce";
        else nacin = "opadajuce";

        //alert(vrsta + nacin)

        let pom;
        if (vrsta == "godine") {
            for (let i = 0; i < psi.length - 1; i++) {
                for (let j = i + 1; j < psi.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (psi[i].godine > psi[j].godine) {
                                pom = psi[i]; psi[i] = psi[j]; psi[j] = pom;
                            }
                            break;

                        case ("opadajuce"):
                            if (psi[i].godine < psi[j].godine) {
                                pom = psi[i]; psi[i] = psi[j]; psi[j] = pom;
                            }
                            break;
                    }
                }
            }
        }

        else if (vrsta == "naziv") {
            for (let i = 0; i < psi.length - 1; i++) {
                for (let j = i + 1; j < psi.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (psi[i].ime.localeCompare(psi[j].ime) == 1) {
                                pom = psi[i]; psi[i] = psi[j]; psi[j] = pom;
                            }
                            break;

                        case ("opadajuce"):
                            if (psi[i].ime.localeCompare(psi[j].ime) == -1) {
                                pom = psi[i]; psi[i] = psi[j]; psi[j] = pom;
                            }
                            break;
                    }
                }
            }
        }

        prikaziSlikeIdodajDogadjaje();
    }

    function pretraga() {
        //alert("test")
        let ime = $("#myInputSearch").val();
        if (ime == '') { // prazan unos-prikaz svih pasa
            psi = [];
            for (let i = 0; i < zivotinje.length; i++) {
                if (zivotinje[i].vrsta == 'pas') {
                    psi.push(zivotinje[i]);
                    //alert(zivotinje[i].ime)
                }
            }
            prikaziSlikeIdodajDogadjaje();
            return;
        }

        for (let i = psi.length - 1; i >= 0; i--) {
            if(!(psi[i].ime.toLowerCase()).includes(ime)){
                psi.splice(i,1)
            }
        }
        prikaziSlikeIdodajDogadjaje();
    }

    prikaziSlikeIdodajDogadjaje();

    $("input[type = 'radio']").click(sortiraj);
    sortiraj();

    $("#btnPretraga").click(pretraga);

    //alert($("vrstaSorta").prop("checked"))
})