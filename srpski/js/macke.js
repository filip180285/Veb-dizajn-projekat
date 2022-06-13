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

    function prikaziSlikeIdodajDogadjaje() {
        $("#macke").empty();
        for (let i = 0; i < macke.length; i++) {
            let ime = macke[i].ime;
            let putanjaDoSlike = "../../slike/" + macke[i].slika;

            let slika = $("<img>").attr("src", putanjaDoSlike)
            slika.addClass("rounded-circle")
            slika.attr("id", macke[i].id)

            $("#macke").append("<hr>").append(slika).append("<br>").append(ime + "(" + macke[i].godine + ")");
        }

        $("#macke img").click(function () {
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
            for (let i = 0; i < macke.length - 1; i++) {
                for (let j = i + 1; j < macke.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (macke[i].godine > macke[j].godine) {
                                pom = macke[i]; macke[i] = macke[j]; macke[j] = pom;
                            }
                            break;

                            case ("opadajuce"):
                            if (macke[i].godine < macke[j].godine) {
                                pom = macke[i]; macke[i] = macke[j]; macke[j] = pom;
                            }
                            break;
                    }
                }
            }
        }

        else if (vrsta == "naziv") {
            for (let i = 0; i < macke.length - 1; i++) {
                for (let j = i + 1; j < macke.length; j++) {
                    switch (nacin) {
                        case ("rastuce"):
                            if (macke[i].ime.localeCompare(macke[j].ime) == 1) {
                                pom = macke[i]; macke[i] = macke[j]; macke[j] = pom;
                            }
                            break;

                            case ("opadajuce"):
                            if (macke[i].ime.localeCompare(macke[j].ime) == -1) {
                                pom = macke[i]; macke[i] = macke[j]; macke[j] = pom;
                            }
                            break;
                    }
                }
            }
        }

        prikaziSlikeIdodajDogadjaje();
    }

    prikaziSlikeIdodajDogadjaje();
    $("input[type = 'radio']").click(sortiraj);
    sortiraj();

    //alert($("vrstaSorta").prop("checked"))
})