$(document).ready(function () {
    let zivotinje = [];
    let id = parseInt(localStorage.getItem("soloZivotinja"));
    let zivotinja;
    zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for (let i = 0; i < zivotinje.length; i++) {
        if (zivotinje[i].id == id) {
            zivotinja = zivotinje[i]; break;
        }
    }
    let putanjaDoLogoa;
    let vrsta = zivotinja.vrsta;
    switch (vrsta) {
        case ("pas"):{
            putanjaDoLogoa="../../slike/pas_logo.png";
            vrsta = "Dogs";
            break;}
        case ("macka"):
            { putanjaDoLogoa="../../slike/macka_logo.png";
            vrsta = "Cats";
            break;}
        case ("ptica"):{
            putanjaDoLogoa="../../slike/dove.png";
            vrsta = "Birds";
            break;}
    }

    $("#nazivStranice").text("/Pets" + "/" + vrsta + "/" + zivotinja.ime);
   
    
    let putanjaDoSlike = "../../slike/" + zivotinja.slika;
    let putanjaDoVidea = "../../video/" + zivotinja.video;
    //alert(putanjaDoVidea);
    let slika = $("<img>").attr("src", putanjaDoSlike);
    slika.addClass("rounded");
    let logo=$("<img>").attr("src",putanjaDoLogoa);
    /*Novo*/
    let slika1="../../slike/"+zivotinja.vrsta+""+zivotinja.id+"_3.jpg";
    let slika2="../../slike/"+zivotinja.vrsta+""+zivotinja.id+"_2.jpg";
    let slika3="../../slike/"+zivotinja.vrsta+""+zivotinja.id+"_1.jpg";

    let putanja1=$("<img>").attr("src", slika3).attr("class","d-block").attr("style"," margin:auto;");
    let putanja2=$("<img>").attr("src",slika2).attr("style","margin:auto")
    let putanja3=$("<img>").attr("src",slika1).attr("style"," margin:auto;");
    $("#galerija1").append(putanja1);
    $("#galerija2").append(putanja2);
    $("#galerija3").append(putanja3);

    $("#galerija4").append(slika).attr("style"," margin:auto;");
    $("#ime").text(zivotinja.ime).attr("style","color:#353C4E;");
    $("#opis").text(zivotinja.opis)
    $("#tezina").text(zivotinja.tezina);
    $("#godine").text(zivotinja.godine);
    $("#video").append(
        "<source src='" + putanjaDoVidea + "'type='video/mp4'>"
    );
    $("#logoZivotinje").append(logo);
})


function ucitaj(){ 
    if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
            alert("Logout successfull");
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
    