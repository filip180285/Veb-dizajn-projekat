
function ucitaj() {
   var putanja=JSON.parse(localStorage.getItem("pregledKomentaraPutanja"));

   if(putanja==0){ 
    document.getElementById("ubaciOvde").innerText="/Izgubljeni ljubimci/Pregled komentara";
   }
   else{ 
    document.getElementById("ubaciOvde").innerText="/Moj nalog/Pregled komentara";
   }
    if (localStorage.getItem("ulogovaniKorisnik") != null) {
        document.getElementsByClassName("loginIliLogout")[0].
            innerText = "Odjavi se";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");



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
       
        document.getElementById("logovanje").addEventListener('click', function () {
            window.location.href = "prijava.html";

        })
    }
      
    elem=JSON.parse(localStorage.getItem("pregledajuSe"));
    if(elem.dodati_komentari.length==0){ 
        document.getElementById("dodajOvde").innerHTML+=
        '<div class="col-lg-12 col-sm-12  text-center" style=" maring-top:30px; font-size:24pt; "><div style=" margin:auto;">Oglas trenutno nema nijedan komentar!</div>'+
        '</div>';
  return;
    }
    elem.dodati_komentari.forEach(element => {
        document.getElementById("dodajOvde").innerHTML+=
          '<div class="col-lg-4 col-sm-12  " style=" maring-top:30px;">'+
          '<div class="comment mt-4 " style="background-color:#5F7A61 ;color:white; word-wrap: break-word;  width:450px; margin-left:15px;"><img src="../../slike/ikona.png" alt="" class="rounded-circle" width="40" height="40">'+
         ' <h4>'+element.korisnik+'</h4>'+
          '<span>-'+element.datum+'</span>'+
         ' <br><br>'+
          '<p style="word-wrap: margin-top:20px; break-word; color:white;">'+element.komentar+'</p>'+
    '</div></div>'
    });
}
