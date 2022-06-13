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
    function prikaziSlikeIdodajDogadjaje() {
        $("#ptice").empty();
        for (let i = 0; i < ptice.length; i++) {
            let ime = ptice[i].ime;
            let putanjaDoSlike = "../../slike/" + ptice[i].slika;

            let slika = $("<img>").attr("src", putanjaDoSlike)
            slika.addClass("rounded-circle")
            slika.attr("id", ptice[i].id)

            $("#ptice").append("<hr>").append(slika).append("<br>").append(ime + "(" + ptice[i].godine + ")");
        }

        $("#ptice img").click(function () {
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
            for (let i = 0; i < ptice.length - 1; i++) {
                for (let j = i + 1; j < ptice.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (ptice[i].godine > ptice[j].godine) {
                                pom = ptice[i]; ptice[i] = ptice[j]; ptice[j] = pom;
                            }
                            break;

                        case ("opadajuce"):
                            if (ptice[i].godine < ptice[j].godine) {
                                pom = ptice[i]; ptice[i] = ptice[j]; ptice[j] = pom;
                            }
                            break;
                    }
                }
            }
        }

        else if (vrsta == "naziv") {
            for (let i = 0; i < ptice.length - 1; i++) {
                for (let j = i + 1; j < ptice.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (ptice[i].ime.localeCompare(ptice[j].ime) == 1) {
                                pom = ptice[i]; ptice[i] = ptice[j]; ptice[j] = pom;
                            }
                            break;

                        case ("opadajuce"):
                            if (ptice[i].ime.localeCompare(ptice[j].ime) == -1) {
                                pom = ptice[i]; ptice[i] = ptice[j]; ptice[j] = pom;
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
        if (ime == '') { // prazan unos-prikaz svih ptica
            ptice = [];
            for (let i = 0; i < zivotinje.length; i++) {
                if (zivotinje[i].vrsta == 'ptica') {
                    ptice.push(zivotinje[i]);
                    //alert(zivotinje[i].ime)
                }
            }
            prikaziSlikeIdodajDogadjaje();
            return;
        }

        for (let i = ptice.length - 1; i >= 0; i--) {
            if(!(ptice[i].ime.toLowerCase()).includes(ime)){
                ptice.splice(i,1)
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