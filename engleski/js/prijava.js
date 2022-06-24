$(document).ready(function () {
    //alert("test");
    let korisnici = [];
    korisnici = JSON.parse(localStorage.getItem("korisnici"));

    function login() {
        let korisnicko_ime = $("#korisnickoIme").val();
        let lozinka = $("#lozinka").val();

        if (korisnicko_ime == "" || lozinka == "") {
            alert("Polja ne smeju biti prazna!")
            return;
        }

        let postoji = false;

        for (let i = 0; i < korisnici.length; i++) {
            if (korisnici[i].korisnicko_ime == korisnicko_ime) {
                if (korisnici[i].lozinka == lozinka) {
                    postoji = true;
                }
                break;
            }
        }

        if (!postoji) {
            alert("Neispravni kredencijali!")
            return;
        }

        alert("Uspešna prijava!")
        localStorage.setItem("ulogovaniKorisnik", korisnicko_ime)
        window.location.href = "index.html";
    }

    function registracija() {
        let ime = $("#ime").val();
        let prezime = $("#prezime").val();
        let korisnicko_ime = $("#korisnickoImeReg").val();
        let lozinka = $("#lozinkaReg").val();

        if (ime == "" || prezime == "" || korisnicko_ime == "" || lozinka == "") {
         //   alert("Polja ne smeju biti prazna!")
            return;
        }

        for(let i = 0; i < korisnici.length; i++){
            if(korisnici[i].korisnicko_ime == korisnicko_ime){
                alert("Korisničko ime je zauzeto");
                return;
            }
        }

        let noviKorisnik = {
            ime: ime,
            prezime: prezime,
            korisnicko_ime: korisnicko_ime,
            lozinka: lozinka,
            mojiOglasi: []
        }

        korisnici.push(noviKorisnik);
        localStorage.setItem("korisnici", JSON.stringify(korisnici))

        alert("Uspešna registracija!")
    }

    $("#loginBtn").click(login);
    $("#regBtn").click(registracija);
});


function ucitaj(){ 
    if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
           alert("Uspešno ste se odjavili");
           localStorage.removeItem("ulogovaniKorisnik");
           document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");    window.location.href="index.html";
         
    })}
    else{ 
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id","logovanje");    
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Login";
        document.getElementById("logovanje").addEventListener('click', function(){
            window.location.href="prijava.html";
           
    }) 
    }
  
}
    