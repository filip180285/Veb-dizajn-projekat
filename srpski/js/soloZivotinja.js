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
            vrsta = "Psi";
            break;}
        case ("macka"):
            { putanjaDoLogoa="../../slike/macka_logo.png";
            vrsta = "Macke";
            break;}
        case ("ptica"):{
            putanjaDoLogoa="../../slike/dove.png";
            vrsta = "Ptice";
            break;}
    }
    switch(vrsta){ 
        case 'Psi': nazivLinka="psi1.html";
        break;
        case 'Macke': nazivLinka='macke.html'; break;
        case 'Ptice': nazivLinka='ptice.html'; break;
    }
    var putanja=JSON.parse(localStorage.getItem("SoloZivotinjaPutanja"));

    if(putanja==1){ 
    $("#nazivStranice").html("/<a style='text-decoration:none; color:white' href='zivotinje.html'>Životinje</a>" + "/<a style='text-decoration:none; color:white' href='"+nazivLinka+"'>" + vrsta + "</a>/<a style='text-decoration:none; color:white' href='soloZivotinja.html'>" + zivotinja.ime+"</a>");
    }
    if(putanja==0){$("#nazivStranice").html("/<a style='text-decoration:none; color:white' href='index.html'>Početna</a>"+"/<a style='text-decoration:none; color:white' href='soloZivotinja.html'>" + zivotinja.ime+"</a>");

    }
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
        innerText="Odjavi se";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
           alert("Uspešno ste se odjavili");
           localStorage.removeItem("ulogovaniKorisnik");
           document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");    window.location.href="index.html";
         
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
    