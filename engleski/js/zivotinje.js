$(document).ready(function () {
    //alert("test");

    $("#pasMeni").click(function(){
        window.location.href = "psi1.html"
    })

    $("#mackaMeni").click(function(){
        window.location.href = "macke.html"
    })

    $("#pticaMeni").click(function(){
        window.location.href = "ptice.html"
    })
})


function ucitaj(){ 
    localStorage.setItem("SoloZivotinjaPutanja",JSON.stringify(1));
    if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
        document.getElementsByClassName("loginIliLogout")[0].
        innerText="Logout";
        document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
        document.getElementById("odjava").addEventListener('click', function(){
            alert("Logout successfull");
           localStorage.removeItem("ulogovaniKorisnik");
           document.getElementsByClassName("loginIliLogout")[0].removeAttribute("id");     window.location.href="index.html";
         
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
    