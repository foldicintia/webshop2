import { AUTOK } from "./adat.js";

document.addEventListener('DOMContentLoaded', () => {
    let kosar = localStorage.getItem('kosar') ? localStorage.getItem('kosar').split(',') : [];
    kosar = kosar.map(id => AUTOK[parseInt(id, 10)]);

    function kosarMegjelenit() {
        const kosarTartalom = document.getElementById('kosar-tartalom');
        kosarTartalom.innerHTML = '';
        
        kosar.forEach(auto => {
            const sor = document.createElement('tr');
            sor.innerHTML = `
                <td>${auto.marka}</td>
                <td>${auto.tipus}</td>
                <td>${auto.orszag}</td>
                <td>${auto.dbszam}</td>
                <td>${auto.ar} Ft</td>
            `;
            kosarTartalom.appendChild(sor);
        });
    }

    kosarMegjelenit();
});
