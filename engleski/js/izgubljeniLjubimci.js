$(document).ready(function () {
  
    /*Ispisujemo sve oglase */

  
});
function ucitaj(){ 
    localStorage.setItem("pregledKomentaraPutanja",JSON.stringify(0));
    if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
           alert("Uspešno ste se odjavili");
           localStorage.removeItem("ulogovaniKorisnik");
            document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");  
            window.location.href="index.html";
         
    })}
    else{ 
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id","logovanje");    
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Login";
        document.getElementById("logovanje").addEventListener('click', function(){
            window.location.href="prijava.html";
           
    }) 
    }

    oglasi = JSON.parse(localStorage.getItem("oglasi")); let i=0;
    if(oglasi.length==0){ 
        document.getElementById("dodajOvde").innerHTML+='<div class="col-sm-12 text-center sredina" style="font-size:16pt; margin-top:-8%;">Za sada ne postoji nijedan oglas!</div>'; 
        return;
    }
    oglasi.forEach(element => {
        document.getElementById("dodajOvde").innerHTML+=' <div class="col-sm-3 blog text-center spusti">'+
       ' <div class="card" style="width:100%; margin-top: 10px; id="content"'+i+'">'+
           '<div class="card-body">'+ 
               ' <h4 class="cardtitle">'+element.naziv_zivotinje+'<div style="text-align:right"><button class="btn dugmePdf" style="margin-top:-40px; width:60px;font-size:8pt" onclick="getPdf('+element.id+')"> PDF</button></div><hr style="margin-top:-15px;"></h4>'+''+
                '<p class="cardtext">'+element.opis+
                       '<p class="cardtext">Broj telefona vlasnika:<b>'+element.telefon+      
           ' </b></p></div> '+
           ' <p class="card-bottom cardtitle"><button class="btn dugmence"  onclick="napisiKomentar('+element.id+')">Ostavi komentar</button>'+
            ' <button class="btn dugmence" id="pregledajKomentar'+element.id+'" onclick="pregledKomentara('+element.id+')">Pregledaj komentare</button></p>'+
         
            '</div> </div>';
          
            i++;
    });
 
    

}

/*Generisanje pdf-a */
function getPdf(id){
oglasi = JSON.parse(localStorage.getItem("oglasi")); 
oglasi.forEach(elem => {
    if(elem.id==id){ 
        element=elem;
    };
});
var doc = new jsPDF();
str='Naziv zivotinje: '+element.naziv_zivotinje+'\n'+'Opis:'+element.opis+"\n"+"Broj telefona:"+element.telefon;
doc.text(str, 10, 10)
doc.save('a4.pdf');
};




function napisiKomentar(id){ let elem;
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    oglasi.forEach(element => {
        if(element.id==id){ 
            elem=element;
           
        }
    });
    localStorage.setItem("komentariseSe",JSON.stringify(elem));
     window.location.href="komentarisi.html";
}
  function pregledKomentara(id){ 
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    oglasi.forEach(element => {
        if(element.id==id){ 
            elem=element;
           
        }
    });
    localStorage.setItem("pregledajuSe",JSON.stringify(elem));
     window.location.href="pregledajKomentare.html";
  }


  
  $('#cmd1').click(function () { alert("da");
    
  });
