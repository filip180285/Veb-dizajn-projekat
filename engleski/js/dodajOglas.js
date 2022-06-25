$(document).ready(function () {


})
function ucitaj() {
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");

        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin:auto; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<div id='formaZaOglas'>" +
            "<div class='forma1'><h2 style='margin-left:28%; line-spacing:3px;'>Add announcement</h2> <br><br>" +
            "<div class='forma-field'>" +
            " <input type='text' id='nazivZivotinje' placeholder='Pet name...' >" +
            "</div>" +
            "<div class='forma-field'>" +
            " <input type='text' id='brojTelefona' placeholder='+381xxxxxxxx(x)' >" +
            "</div>" +
            "<div class='forma-field'>" +
            " <textarea id='opisZivotinje' rows='4' cols='50' placeholder='Description of pet...'></textarea>" +
            "</div>" +
            "<div class='forma-field'> " +
            "<button id='predajOglasBtn' class='btn btn-secondary'>Submit</button>" +
            "</div> <br><br>" +
            "</div>" +
            "</div>";

        document.getElementById("predajOglasBtn").addEventListener("click", function () {


            let naziv1 = $("#nazivZivotinje").val();
            let telefon1 = $("#brojTelefona").val();
            let opis1 = $("#opisZivotinje").val();

            if (naziv1 == "" || telefon1 == "" || opis1 == "") {

                alert("You must fill all inputs!");
                return;
            }

            let pattern = /^\+381[0-9]{8,9}$/;
            if (!telefon1.match(pattern)) {
                document.getElementById("brojTelefona").value = "";
                alert("Phone number format invalid!"); return;
            }

            /*Uspesno poslat oglas */
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            oglasi = JSON.parse(localStorage.getItem("oglasi"));
            kor = JSON.parse(JSON.stringify(localStorage.getItem("ulogovaniKorisnik")));
            telefon1 = telefon1[0] + telefon1[1] + telefon1[2] + telefon1[3] + " " + telefon1[4] + telefon1[5] + " " + telefon1.substring(6, telefon1.length);

            for (let i = 0; i < oglasi.length; i++) {
                if (oglasi[i].telefon == telefon1) {
                    document.getElementById("brojTelefona").value = "";
                    alert("Phone number invalid!")
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
            localStorage.setItem("oglasi", JSON.stringify(oglasi));
            alert("Announcement added successfully!")
            window.location.href = "index.html";
        });

        document.getElementById("odjava").addEventListener('click', function () {
            alert("Logout successfull"); localStorage.removeItem("ulogovaniKorisnik");
            document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");
            window.location.href = "index.html";

        })
    }
    else {
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "logovanje");
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Login";
        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin-left:10%; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<br><br>&nbsp;  &nbsp;You must be logged in in order to leave a comment &#8594;        ";
        document.getElementById("dodajOglasForma").innerHTML += "<a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Login</a>"
        document.getElementById("dodajOglasForma").innerHTML += "<br>&nbsp;  &nbsp;If you have not created an account, you can do so via the following link  &#8594; <a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Register</a> &nbsp;  &nbsp;"

        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }

}
