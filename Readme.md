#Webáruház
##Specifikáció
Publikus

1. A publikus felületen div-ekben jelenítsük meg az adatokat.
2. Az oldalon legyen szűrési és rendezési lehetőség is!
3. Kosár funkció: A publikus felületen a terméket helyezheted a kosárba.
4. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
5. Reszponzív
++ készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
++ A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

#Alkalmazott függvények

**kartyaOsszeallit(lista) -> txt létrehozza a kártyákat -> html elem megjelenit(txt, szuloElem)**
 az összeállított txt-ket jeleníti meg szuloELem: html pl. article elemben megjeleniti a txt-t rendezSzempontSzerint(termekLista, szempont) -> szempszerLista

**szuresSzovegSzerint(termekLista, szuroSzoveg) -> szurtLista**

**kosarba(termekLista, index, kosarLista) -> kosarLista**
akkor fut le ha a kártyában lévő gombra kattintunk, és a termekLista indexedik elemét adja át a kosárListának tablazatLetrehoz(lista) -> txt html 
 
**elem sorTorles(lista, index) -> ujKosarLista**

**adatValtoztat(lista, index, ertek) -> ujKosarLista**

**osszErtekSzamol(kosarLista) -> osszeg megjelenit()**
metódussal osszeg kiírása rendelesLead(kosarLista) kiürül a kosár