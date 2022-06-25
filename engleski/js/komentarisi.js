$(document).ready(function () {

  
})
function ucitaj() {
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");

        document.getElementById("dodajOglasForma").setAttribute("style", "height:396px;  margin:auto; font-size:16pt;");
        document.getElementById("dodajOglasForma").innerHTML = "<div id='formaZaOglas'>" +
            "<div class='forma1'><h2 style='margin-left:30%; line-spacing:3px;'>Leave a comment</h2> <br><br>" +
            "<div class='forma-field'>" +
            " <textarea id='komentarZivotinja' rows='8' cols='100' placeholder='Comment...'></textarea>" +
            "</div>" +
            "<div class='forma-field'> " +
            "<button id='predajKomentar'  onclick=predaj() class='btn btn-secondary'>Submit</button>" +
            "</div> <br><br>" +
            "</div>" +
            "</div>";


        document.getElementById("odjava").addEventListener('click', function () {
            alert("Logout successfull");
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
        document.getElementById("dodajOglasForma").innerHTML = "<br><br>&nbsp;  &nbsp;You must be logged in in order to leave a comment &#8594;        ";
        document.getElementById("dodajOglasForma").innerHTML += "<a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Login</a>"
        document.getElementById("dodajOglasForma").innerHTML += "<br>&nbsp;  &nbsp;If you have not created an account, you can do so via the following link &#8594; <a href='prijava.html' style='text-decoration:none; color:#7FC8A9;'>Register</a> &nbsp;  &nbsp;"

        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }

}

function predaj(){ 
    let komentar1= document.getElementById("komentarZivotinja").value;
   
    if (komentar1 == "" ) {
        alert("Field must be filled!")
        return;
    }

    if(localStorage.getItem("komentariseSe")==null){ 
        alert("You must be logged in!");
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
    alert("Comment added successfully!")
    window.location.href = "izgubljeniLjubimci.html";
}


