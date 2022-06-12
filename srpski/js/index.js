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
                ime: 'Mile',
                opis: 'Nemački ovčar, guste crno-smeđe dlake i crnih očiju.Star dve godine, umiljat i druželjubiv.',
                tezina: '40kg',
                godine: 2,
                slika: 'pas1.jpg',
                video: 'pas1.mp4'
            },
            {
                ime: 'Leni',
                opis: 'Ženka labrador retirvera, stara 5 godina.Ima kratku belu dlaku.Vesela i uvek raspoložena za igranje.',
                tezina: '35kg',
                godine: 5,
                slika: 'pas2.jpg',
                video: 'pas1.mp4'
            },
            {
                ime: 'Zoki',
                opis: 'Osmogodišnji mužjak zlatnog retirvera.Krasi ga gusta zlatna dlaka, blaga narav i ljubav prema deci.',
                tezina: '32kg',
                godine: 8,
                slika: 'pas3.jpg',
                video: 'pas1.mp4'
            },
            {
                ime: 'Lea',
                opis: 'Trogodišnja ženka bengalske mačke.Ima žutu dlaku sa crnim prugastim šarama i zelene oči.Društvena i aktivna.',
                tezina: '6kg',
                godine: 3,
                slika: 'macka1.jpg',
                video: 'macka1.mp4'
            },
            {
                ime: 'Roki',
                opis: 'Mužjak persijske mačke, guste bele dlake i crnog repa.Živahan i veseo.Star 7 godina.',
                tezina: '8kg',
                godine: 7,
                slika: 'macka2.jpg',
                video: 'macka1.mp4'
            },
            {
                ime: 'Maks',
                opis: 'Persijska mačka, mužjak star 4 godine.Kratka krem dlaka, plave oči i crni rep. Komunikativan i druželjubiv.',
                tezina: '7kg',
                godine: 4,
                slika: 'macka3.jpg',
                video: 'macka1.mp4'
            },
            {
                ime: 'Pera',
                opis: 'Mužjak kakadu papagaja.Star 40 godina.Belo perje, bledo žut na krilima i repu, veliki beli greben, crni kljun.',
                tezina: '700g',
                godine: 40,
                slika: 'ptica1.jpg',
                video: 'ptica1.mp4'
            },
            {
                ime: 'Viki',
                opis: 'Trogodišnja ženka goluba.',
                tezina: '220g',
                godine: 3,
                slika: 'ptica2.jpg',
                video: 'ptica1.mp4'
            },
            {
                ime: 'Alfred',
                opis: 'Mužjak plave are.Star 24 godine.Puno plavo perje, žute mrlje oko očiju i kljuna, crni kljun, tamno sive noge.',
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
                naziv_zivotinje: 'Mina',
                opis: 'Mina, ženka Šar-planinca stara 7 meseci nestala je 10.05.2022. na Avali, Put za Markoviće, Beograd. Ima braon kožnu ogrlicu. Umiljata je i druželjubiva. Nalazaču sledi nagrada.',
                telefon: '+381 66 20 50 929',
                datumVreme: '10/01/2022',
                dodati_komentari: []
            },
            {
                id: 2,
                naziv_zivotinje: 'Mici',
                opis: 'Nestala maca u Subotickoj ulici na Telepu. Odaziva se na ime: Mici. Cipovana je. Ako je neko vidi molim vas da je zadrzite i da mi se javite na ovaj broj Pronalazacu sledi nagrada.',
                telefon: '+381 66 25 30 151',
                datumVreme: '17/05/2022',
                dodati_komentari: []
            },
            {
                id: 3,
                naziv_zivotinje: 'Bata',
                opis: 'Mačak uzrasta od godinu dana, nestao je pre oko 3 nedelje bez traga. Odaziva se na ime Bata. Krupan je, ima dugu dlaku, zelene zrikave oči, braon-bele boje. Na teritoriji Beograda, blizu opštine Mladenovac. Ako ga neko vidi molim Vas neka me kontaktira na telefon. Unapred hvala!',
                telefon: '+381 66 30 50 828',
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
            $("#telefon" + (i + 1)).text(najnoviji[i].telefon);
        }
    }

    inicijalizacija();
    postaviTriNajnovijaOglasa();
});