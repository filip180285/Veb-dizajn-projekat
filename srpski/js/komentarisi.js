$(document).ready(function () {

  
})
function ucitaj() {
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Odjavi se";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");

        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin:auto; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<div id='formaZaOglas'>" +
            "<div class='forma1'><h2 style='margin-left:30%; line-spacing:3px;'>Ostavi komentar</h2> <br><br>" +
            "<div class='forma-field'>" +
            " <textarea id='komentarZivotinja' rows='8' cols='100' placeholder='Komentar...'></textarea>" +
            "</div>" +
            "<div class='forma-field'> " +
            "<button id='predajKomentar'  onclick=predaj() class='btn btn-secondary'>Predaj komentar</button>" +
            "</div> <br><br>" +
            "</div>" +
            "</div>";


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
            innerText = "Uloguj se";
        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin-left:10%; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<br><br>&nbsp;  &nbsp;Žao nam je, da biste dodali komentar morate se ulogovati &#8594;        ";
        document.getElementById("dodajOglasForma").innerHTML += "<a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Uloguj se</a>"
        document.getElementById("dodajOglasForma").innerHTML += "<br>&nbsp;  &nbsp;Ukoliko niste kreirali nalog, to možete učiniti preko sledećeg linka &#8594; <a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Registruj se</a> &nbsp;  &nbsp;"

        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }

}

function predaj(){ 
    let komentar1= document.getElementById("komentarZivotinja").value;
   
    if (komentar1 == "" ) {
        alert("Polje ne sme biti prazno!")
        return;
    }

    if(localStorage.getItem("komentariseSe")==null){ 
        alert("Nasilno ulaženje");
        return;
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    kor =JSON.parse(JSON.stringify(localStorage.getItem("ulogovaniKorisnik")));
    elem=JSON.parse(localStorage.getItem("komentariseSe"));
    oglasi=JSON.parse(localStorage.getItem("oglasi"));
  /*  oglasi.forEach(element => {
        if(element.id==elem.id){ 
            element.dodati_komentari.push({'komentar':komentar1, 'korisnik':kor, 'datum':today});
        }
    });*/
    for(let i=0; i<oglasi.length; i++){ 
        if(oglasi[i].id==elem.id){ 
            oglasi[i].dodati_komentari.push({'komentar':komentar1, 'korisnik':kor, 'datum':today});
            break;
        }
    }
    localStorage.setItem("oglasi", JSON.stringify(oglasi));
    alert("Uspešno ostavljen komentar!")
    window.location.href = "izgubljeniLjubimci.html";
}


