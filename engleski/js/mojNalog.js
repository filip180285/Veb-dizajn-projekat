$(document).ready(function () {

})

function ucitaj() {
    localStorage.setItem("pregledKomentaraPutanja", JSON.stringify(1));
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Logout";

        kor = JSON.parse(JSON.stringify(localStorage.getItem("ulogovaniKorisnik")));
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("dodajOvde").innerHTML = "<div class='col-sm-12 sredina text-center'><h2><hr>My announcements<hr></h2></div>"
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        if (oglasi.length == 0) {
            document.getElementById("dodajOvde").innerHTML += '<div class="col-sm-12 text-center sredina" style="font-size:16pt;">Niste ostavili nijedan oglas!</div>';

        }
        else {
            oglasi.forEach(element => {
                if (element.korisnik == kor) {
                    document.getElementById("dodajOvde").innerHTML += ' <div class="col-sm-3 blog text-center spusti">' +
                        ' <div class="card" style="width:100%; margin-top: 10px; id="content">' +
                        '<div class="card-body">' +
                        ' <h4 class="cardtitle">' + element.naziv_zivotinje + '<div style="text-align:right"><button class="btn dugmeBrisi" style="margin-top:-50px; width:40px;font-size:8pt" onclick="brisi(' + element.id + ')"><i class="fa fa-trash-o" style="font-size:20px"></i></button></div><hr style="margin-top:-15px;"></h4>' + '' +
                        '<p class="cardtext">' + element.opis +
                        '<p class="cardtext">Posted on: <b>' + element.datumVreme +
                        ' </p></p></div> ' +
                        ' <button class="btn dugmence" id="pregledajKomentar' + element.id + '" onclick="pregledKomentara(' + element.id + ')"' + element.id + '">See all comments</button></p>' +
                        '</div> </div>';
                }

            });
        };

        document.getElementById("dodajOvde").innerHTML += "<div class='col-sm-12 sredina text-center'><br><br><br><h2><hr>My comments<hr></h2></div>"
        niz = Array();
        oglasi.forEach(element => {
            element.dodati_komentari.forEach(komentar => {
                if (komentar.korisnik == kor) {
                    niz.push({ 'komentar': komentar, 'kome': element.korisnik });
                }
            })
        });
        if (niz.length == 0) {
            document.getElementById("dodajOvde").innerHTML += '<div class="col-sm-12 text-center sredina" style="font-size:16pt;">You have no comments!</div>';

        }
        else {
            niz.forEach(element => {
                document.getElementById("dodajOvde").innerHTML +=
                    '<div class="col-lg-4 col-sm-12  " style=" maring-top:30px;">' +
                    '<div class="comment mt-4 " style="background-color:#5F7A61 ;color:white; word-wrap: break-word;  width:450px; margin-left:15px;">' +
                    ' <h4>' + element.kome + '</h4>' +
                    '<span>-' + element.komentar.datum + '</span>' +
                    ' <br><br>' +
                    '<p style="word-wrap: margin-top:20px; break-word; color:white;">' + element.komentar.komentar + '</p>' +
                    '</div></div>'
            });
        };


        document.getElementById("odjava").addEventListener('click', function () {
            alert("Logout successfull");
            localStorage.removeItem("ulogovaniKorisnik");
            document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id"); window.location.href = "index.html";

        })
    }
    else {
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "logovanje");
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Login";

        document.getElementById("dodajOvde").setAttribute("style", "height:396px;  font-size:16pt;");
        document.getElementById("dodajOvde").innerHTML += '<div class="col-sm-2"></div><div class="col-sm-8 " style=" margin-top:4.2%; margin-left:6.4%; font-size:16pt;">&nbsp;  &nbsp;Žao nam je, morate se ulogovati &#8594; ' +
            '<a href="prijava.html" style="text-decoration:none; color:#7FC8A9;">Uloguj se</a>' +
            '<br>&nbsp;  &nbsp;Ukoliko niste kreirali nalog, to možete učiniti preko sledećeg linka &#8594; <a href="prijava.html" style="text-decoration:none; color:#7FC8A9;">Registruj se</a> &nbsp;  &nbsp;</div>';


        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }

}

function pregledKomentara(id) {
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    oglasi.forEach(element => {
        if (element.id == id) {
            elem = element;

        }
    });
    localStorage.setItem("pregledajuSe", JSON.stringify(elem));
    window.location.href = "pregledajKomentare.html";
}



function brisi(id) {
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    for (let i = 0; i < oglasi.length; i++) {
        if (oglasi[i].id == id) {
            oglasi.splice(i, 1);
        }
    }
    localStorage.setItem("oglasi", JSON.stringify(oglasi));
    window.location.href = "mojNalog.html";
}