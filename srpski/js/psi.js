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
        if (psi.length == 0) {
            let nemaRezultata = $("<hr style='width: 83%;'> <p style='font-size:20pt; margin:auto; height:345px; font-style:normal;'>  <br> Nema rezultata za datu pretragu</p>");
            $("#psi").append(nemaRezultata);
        }
        for (let i = 0; i < psi.length; i++) {
            let ime = psi[i].ime;
            let putanjaDoSlike = "../../slike/" + psi[i].slika;

            let slika = $("<img>").attr("src", putanjaDoSlike);
            slika.addClass("rounded-circle")
            slika.attr("id", psi[i].id)

            $("#psi").append("<hr style='width: 83%;'>").append(slika).append("<br>").append((ime + "(" + psi[i].godine + ")"));
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
        psi = [];
        for (let i = 0; i < zivotinje.length; i++) {
            if (zivotinje[i].vrsta == 'pas') {
                psi.push(zivotinje[i]);
                //alert(zivotinje[i].ime)
            }
        }
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
            if (!(psi[i].ime.toLowerCase()).includes(ime)) {
                psi.splice(i, 1)
            }
        }
        prikaziSlikeIdodajDogadjaje();
    }

    prikaziSlikeIdodajDogadjaje();

    $("input[type = 'radio']").click(sortiraj);
    sortiraj();

    $("#btnPretraga").click(pretraga);

    //alert($("vrstaSorta").prop("checked"))



    /*Novo*/
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            if (newVal < 0) spinner.find("input").val(0);
            else
                spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $("#brojGodinaZivotinje").on('keyup', function (e) {
        if (!String.fromCharCode(e.keyCode).match(/(\d)/i) && String.fromCharCode(e.keyCode).match(/(\w|\s)/i)) {
            $(this).val("");

        }

    })

    $("#btnPretragaGodine").on("click", function () {
        psi = [];
        for (let i = 0; i < zivotinje.length; i++) {
            if (zivotinje[i].vrsta == 'pas') {
                psi.push(zivotinje[i]);
                //alert(zivotinje[i].ime)
            }
        }
        let brGod = $("#brojGodinaZivotinje").val();
        $("#up").append("" + brGod)
        if (brGod == "0") { // prikaz svih pasa
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
        var broj = parseInt(brGod);
        for (let i = psi.length - 1; i >= 0; i--) {
            if ((psi[i].godine != broj)) {
                psi.splice(i, 1)
            }
        }
        prikaziSlikeIdodajDogadjaje();

    })
})


function ucitaj(){ 
    if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Odjavi se";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
           alert("Uspešno ste se odjavili");
           localStorage.removeItem("ulogovaniKorisnik");
           document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");     window.location.href="index.html";
         
    })}
    else{ 
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id","logovanje");    
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Uloguj se";
        document.getElementById("logovanje").addEventListener('click', function(){
            window.location.href="prijava.html";
           
    }) 
    }
  
}
    