import { AUTOK } from "./adat.js";

function kartyaOsszeallit(AUTOK) {
    let kartyak = ""
    for (let i = 0; i < AUTOK.length; i++) {
        const auto = AUTOK[i]
        const kartya = `
            <div class="col-lg-4" style="padding: 2vh;>
                <div class="card">
                    <div class="card-header text-success"><h1>${auto.marka}</h1><h2>${auto.tipus}</h2></div>
                    <div class="card-body">
                        <img src="${auto.kep}" class="img-thumbnail img-fluid" alt="" style="width: 100%; height: auto;">
                        <br><img src="autoklego/ikonjo.png" alt="ikon" class="ikonka"> ${auto.orszag} <br><img src="autoklego/ikonjo.png" alt="ikon" class="ikonka">  ${auto.dbszam}
                    </div>
                    <div class="card-footer justify-content-between">
                        <span>Ár: ${auto.ar} Ft</span>
                        <button type="button" class="btn">Kosárba</button>
                    </div>
                </div>
            </div>`;
        kartyak += kartya 
    }
    return kartyak
}

//megjelenit 

function megjelenit(kartyak) {
    const kartyakContainer = $("article .kartyak")
    kartyakContainer.html(kartyak)
}

const kartyak = kartyaOsszeallit(AUTOK)
megjelenit(kartyak) 


//rendezes

function rendezes(lista, irany) {
    return lista.sort(function(a, b) {
        if (irany === 'novekvo') {
            return a.ar - b.ar
        } else if (irany === 'csokkeno') {
            return b.ar - a.ar
        }
    });
}

function kartyakatMegjelenit(rendezettTermekek) {
    const kartyak = kartyaOsszeallit(rendezettTermekek)
    megjelenit(kartyak);
}

const rendezesSzempontok = $(".rendezesSzempontok")
rendezesSzempontok.change(function() {
    const irany = $(this).val()
    const rendezettTermekek = rendezes(TERMEKEK, irany)
    kartyakatMegjelenit(rendezettTermekek)
});

