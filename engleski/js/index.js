$(document).ready(function () {
    
    //alert("test")
    let korisnici = [];
    let zivotinje = [];
    let oglasi = [];

    function inicijalizacija() {
        // ucitavanje korisnika
        if (localStorage.getItem("korisnici") != null) { // ucitavanje postojecih korisnika
            korisnici = JSON.parse(localStorage.getItem("korisnici"))
        } else { // inicijalizacija niza korisnika
            korisnici = [{
                ime: 'Filip',
                prezime: 'Kojić',
                korisnicko_ime: 'filip',
                lozinka: 'filip123',
                mojiOglasi: []
            },
            {
                ime: 'Teodora',
                prezime: 'Peric',
                korisnicko_ime: 'teodora',
                lozinka: 'teodora123',
                mojiOglasi: []
            },
            {
                ime: 'Milan',
                prezime: 'Peric',
                korisnicko_ime: 'milan',
                lozinka: 'milan123',
                mojiOglasi: []
            },
            ]
            localStorage.setItem("korisnici", JSON.stringify(korisnici))
        }


        // ucitavanje zivotinja
        if (localStorage.getItem("zivotinje") != null) { // ucitavanje postojecih zivotinja
            zivotinje = JSON.parse(localStorage.getItem("zivotinje"))
        } else { // inicijalizacija niza zivotinja
            zivotinje = [{
                id:1,
                ime: 'Mile',
                vrsta:'pas',
                opis: 'Nemački ovčar, guste crno-smeđe dlake i crnih očiju.Star dve godine, umiljat i druželjubiv.',
                tezina: '40kg',
                godine: 2,
                slika: 'pas1.jpg',
                video: 'pas1.mp4'
            },
            {
                id:2,
                ime: 'Leni',
                vrsta:'pas',
                opis: 'Ženka labrador retirvera, stara 5 godina.Ima kratku belu dlaku.Vesela i uvek raspoložena za igranje.',
                tezina: '35kg',
                godine: 5,
                slika: 'pas2.jpg',
                video: 'pas1.mp4'
            },
            {
                id:3,
                ime: 'Zoki',
                vrsta:'pas',
                opis: 'Osmogodišnji mužjak zlatnog retirvera.Krasi ga gusta zlatna dlaka, blaga narav i ljubav prema deci.',
                tezina: '32kg',
                godine: 8,
                slika: 'pas3.jpg',
                video: 'pas1.mp4'
            },
            {
                id:4,
                ime: 'Lea',
                vrsta:'macka',
                opis: 'Trogodišnja ženka bengalske mačke.Ima žutu dlaku sa crnim prugastim šarama i zelene oči.Društvena i aktivna.',
                tezina: '6kg',
                godine: 3,
                slika: 'macka1.jpg',
                video: 'macka1.mp4'
            },
            {
                id:5,
                ime: 'Roki',
                vrsta:'macka',
                opis: 'Mužjak persijske mačke, guste bele dlake i crnog repa.Živahan i veseo.Star 7 godina.',
                tezina: '8kg',
                godine: 7,
                slika: 'macka2.jpg',
                video: 'macka1.mp4'
            },
            {
                id:6,
                ime: 'Maks',
                vrsta:'macka',
                opis: 'Persijska mačka, mužjak star 4 godine.Kratka krem dlaka, plave oči i crni rep. Komunikativan i druželjubiv.',
                tezina: '7kg',
                godine: 4,
                slika: 'macka3.jpg',
                video: 'macka1.mp4'
            },
            {
                id:7,
                ime: 'Pera',
                vrsta:'ptica',
                opis: 'Mužjak kakadu papagaja.Star 40 godina.Belo perje, bledo žut na krilima i repu, veliki beli greben, crni kljun.',
                tezina: '700g',
                godine: 40,
                slika: 'ptica1.jpg',
                video: 'ptica1.mp4'
            },
            {
                id:8,
                ime: 'Viki',
                vrsta:'ptica',
                opis: 'Trogodišnja ženka goluba.',
                tezina: '220g',
                godine: 3,
                slika: 'ptica2.jpg',
                video: 'ptica1.mp4'
            },
            {
                id:9,
                ime: 'Alfred',
                vrsta:'ptica',
                opis: 'Mužjak plave are.Star 24 godine.Puno plavo-žuto perje, žute mrlje oko očiju i kljuna, crni kljun, tamno sive noge.',
                tezina: '1kg',
                godine: 24,
                slika: 'ptica3.jpg',
                video: 'ptica1.mp4'
            }
            ]
            localStorage.setItem("zivotinje", JSON.stringify(zivotinje))
        }

        // ucitavanje oglasa
        if (localStorage.getItem("oglasi") != null) { // ucitavanje postojecih oglasa
            oglasi = JSON.parse(localStorage.getItem("oglasi"))
        } else { // inicijalizacija niza oglasa
            oglasi = [{
                id: 1,
                korisnik:'filip',
                naziv_zivotinje: 'Mina',
                opis: 'Mina, ženka Šar-planinca stara 7 meseci nestala je 10.05.2022. na Avali, Put za Markoviće, Beograd. Ima braon kožnu ogrlicu. Umiljata je i druželjubiva. Nalazaču sledi nagrada.',
                telefon: '+381 66 2050929',
                datumVreme: '10/01/2022',
                dodati_komentari: []
            },
            {
                id: 2,
                korisnik:'teodora',
                naziv_zivotinje: 'Mici',
                opis: 'Nestala maca u Subotickoj ulici na Telepu. Odaziva se na ime: Mici. Cipovana je. Ako je neko vidi molim vas da je zadrzite i da mi se javite na ovaj broj Pronalazacu sledi nagrada.',
                telefon: '+381 66 2050929',
                datumVreme: '17/05/2022',
                dodati_komentari: []
            },
            {
                id: 3,
                korisnik:'teodora',
                naziv_zivotinje: 'Bata',
                opis: 'Mačak uzrasta od godinu dana, nestao je pre oko 3 nedelje bez traga. Odaziva se na ime Bata. Krupan je, ima dugu dlaku, zelene zrikave oči, braon-bele boje. Na teritoriji Beograda, blizu opštine Mladenovac. Ako ga neko vidi molim Vas neka me kontaktira na telefon. Unapred hvala!',
                telefon:  '+381 66 2050929',
                datumVreme: '01/06/2022',
                dodati_komentari: []
            },
            ]
            localStorage.setItem("oglasi", JSON.stringify(oglasi))
        }
    }

    function postaviTriNajnovijaOglasa() {
        let najnoviji = [];
        for (let i = oglasi.length - 1; i >= 0; i--) {
            najnoviji.push(oglasi[i]);
            if (najnoviji.length == 3) break;
        }
        for (let i = 0; i < najnoviji.length; i++) {
            $("#naslov" + (i + 1)).text(najnoviji[i].naziv_zivotinje);
            $("#opis" + (i + 1)).text(najnoviji[i].opis);
            $("#datum" + (i + 1)).text("Date: "+najnoviji[i].datumVreme);
            $("#telefon" + (i + 1)).attr("style","background-color:#7FC8A9; width:60%; margin:auto; border-radius:10px;")
            $("#telefon" + (i + 1)).text("Contact number:"+najnoviji[i].telefon);
        }
    }

    inicijalizacija();
    postaviTriNajnovijaOglasa();

    $("#1").click(function(){
        localStorage.setItem("soloZivotinja", 1);
        window.location.href = "soloZivotinja.html";
    });

    $("#4").click(function(){
        localStorage.setItem("soloZivotinja", 4);
        window.location.href = "soloZivotinja.html";
    });

    $("#7").click(function(){
        localStorage.setItem("soloZivotinja", 7);
        window.location.href = "soloZivotinja.html";
    });

   

});

function ucitaj(){ 
        if(localStorage.getItem("ulogovaniKorisnik")!=null) { 
            document.getElementsByClassName("loginIliLogout")[0].
            innerText="Logout";
            document.getElementsByClassName("loginIliLogout")[0].setAttribute("id", "odjava");
            document.getElementById("odjava").addEventListener('click', function(){
                alert("Logout successfull");
              //  localStorage.clear("ulogovaniKorisnik");
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
      
    }
        
