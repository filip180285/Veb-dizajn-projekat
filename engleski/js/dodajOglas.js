$(document).ready(function () {


})
function ucitaj() {
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");

        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin:auto; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<div id='formaZaOglas'>" +
            "<div class='forma1'><h2 style='margin-left:35%; line-spacing:3px;'>Dodaj oglas</h2> <br><br>" +
            "<div class='forma-field'>" +
            " <input type='text' id='nazivZivotinje' placeholder='Naziv životinje...' >" +
            "</div>" +
            "<div class='forma-field'>" +
            " <input type='text' id='brojTelefona' placeholder='+381...'  >" +
            "</div>" +
            "<div class='forma-field'>" +
            " <textarea id='opisZivotinje' rows='4' cols='50' placeholder='Opis životinje...'></textarea>" +
            "</div>" +
            "<div class='forma-field'> " +
            "<button id='predajOglasBtn' class='btn btn-secondary'>Predaj oglas</button>" +
            "</div> <br><br>" +
            "</div>" +
            "</div>";

        document.getElementById("predajOglasBtn").addEventListener("click", function () {


            let naziv1 = $("#nazivZivotinje").val();
            let telefon1 = $("#brojTelefona").val();
            let opis1 = $("#opisZivotinje").val();

            if (naziv1 == "" || telefon1 == "" || opis1 == "") {

                alert("Polja ne smeju biti prazna!");
                return;
            }

            let pattern = /^\+381[0-9]{8,9}$/;
            if (!telefon1.match(pattern)) {
                document.getElementById("brojTelefona").value = "";
                alert("Broj telefona je pogrešno unet!"); return;
            }

            /*Uspesno poslat oglas */
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            oglasi = JSON.parse(localStorage.getItem("oglasi"));
            kor =JSON.parse(JSON.stringify(localStorage.getItem("ulogovaniKorisnik")));
            telefon1=telefon1[0]+telefon1[1]+telefon1[2]+telefon1[3]+" "+telefon1[4]+telefon1[5]+" "+telefon1.substring(6, telefon1.length);

            for (let i = 0; i < oglasi.length; i++) {
                if (oglasi[i].telefon == telefon1) {
                    document.getElementById("brojTelefona").value = "";
                    alert("Broj telefona nije ispravan!")
                    return;
                   
                }
            }
    


            objekat = {
                id: oglasi.length,
                korisnik: kor,
                naziv_zivotinje: naziv1,
                opis: opis1,
                telefon: telefon1,
                datumVreme: today,
                dodati_komentari: []
            };
            oglasi.push(objekat);
            localStorage.setItem("oglasi",JSON.stringify(oglasi));
            alert("Uspešno ste postavili oglas!")
            window.location.href = "index.html";
        });

        document.getElementById("odjava").addEventListener('click', function () {
            alert("Uspešno ste se odjavili");
            localStorage.removeItem("ulogovaniKorisnik");
            document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");  
            window.location.href = "index.html";

        })
    }
    else {
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "logovanje");
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Login";
        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin-left:10%; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<br><br>&nbsp;  &nbsp;Žao nam je, da biste dodali oglas morate se ulogovati &#8594;        ";
        document.getElementById("dodajOglasForma").innerHTML += "<a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Uloguj se</a>"
        document.getElementById("dodajOglasForma").innerHTML += "<br>&nbsp;  &nbsp;Ukoliko niste kreirali nalog, to možete učiniti preko sledećeg linka &#8594; <a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Registruj se</a> &nbsp;  &nbsp;"

        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }

}
