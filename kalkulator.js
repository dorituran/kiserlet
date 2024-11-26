let ar=0
let tura=0
let szoba=0
let kaja=0
let iv=0
let szau=0
let telinyari;
let ellat;
let sz;
let kedvezmeny;
let megtak;
let kep;

let kalkulator_section = document.getElementsByClassName("kalkulator")[0];

function szamolas() {
        if (document.getElementById(`tny1`).checked) {
            ar=ar+1000000; tura=tura+1000000; telinyari=`téli`;
        }
        else if (document.getElementById(`tny2`).checked) {
            ar=ar+2000000; tura=tura+2000000; telinyari=`nyári`;
        }
        
        if (document.getElementById(`kabin1`).checked) {
            ar=ar+100000; szoba=szoba+100000;
        }
        else if (document.getElementById(`kabin2`).checked) {
            ar=ar+150000; szoba=szoba+150000;
        }
        else if (document.getElementById(`kabin3`).checked) {
            ar=ar+200000; szoba=szoba+200000;
        }
        else if (document.getElementById(`kabin4`).checked) {
            ar=ar+300000; szoba=szoba+300000;
        }
        else {ar=ar+100000; szoba=szoba+100000}

        if (document.getElementById(`kaja1`).checked) {
            ar=ar+20000; kaja=kaja+20000; ellat=`all inclusive ellátás korlátlan étel és ital fogyasztást tartalmaz a hajón elérhető összes étteremben és bárban. Ennek a kölsége az utazás teljes idejére ${kaja}Ft/fő.`
        }
        else if (document.getElementById(`kaja2`).checked) {
            ar=ar+50000; kaja=kaja+50000; ellat=`félpanziós ellátás svédasztalos reggelit és vacsorát foglal magába, ezen felül a megjelölt alkoholmentes és alkoholos italokból korlátlan fogyasztást biztosítunk az étkezések ideje alatt. Ennek a kölsége az utazás teljes idejére ${kaja}Ft/fő.`
        }
        else if (document.getElementById(`kaja3`).checked) {
            ar=ar+0; kaja=kaja+0; ellat=`á la carte étkezés során szabadon igénybe vehetőek a hajón található éttermek és bárok kínálatát, a fogyasztás a szobaszámra kerül, amit érkezéskor tudnak kiegyenlíteni. Ez az utazás során felmerülő további költséggel jár.`
        }

        if (document.getElementById(`iv1`).checked) {
            ar=ar+30000; iv=iv+30000; idv= `A minden helyszínen igénybe vehető idegenvezetés díja összesen ${iv}Ft/fő.<br>`
        }
        else if (document.getElementById(`iv2`).checked) {
            ar=ar+15000; iv=iv+15000; idv= `A szabadon választhatő két helyszínen igénybe vehető idegenvezetés díja összesen ${iv}Ft/fő.<br>`
        }
        else if (document.getElementById(`iv3`).checked) {
            ar=ar+0; iv=iv+0; idv=``
        }

        if (document.getElementById(`szau1`).checked) {
            ar=ar+20000; szau=szau+20000; sz=`A szauna és a masszázs szolgáltatás összesen ${szau}Ft/fő.<br>`;
        }
        else if (document.getElementById(`szau2`).checked) {
            ar=ar+10000; szau=szau+10000; sz=`A szauna világ díja ${szau}Ft/fő.<br>`;
        }
        else if (document.getElementById(`szau3`).checked) {
            ar=ar+0; szau=szau+0; sz=``
        }

        if(document.getElementById(`kedv1`).checked && document.getElementById(`kedv2`).checked && document.getElementById(`kedv3`).checked){
            ar=ar*0.83; megtak=ar*0.17; kedvezmeny=`Mindhárom feltüntetett kedvezmény igénybevételével összesen 17% engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`
        }
        else if(document.getElementById(`kedv1`).checked && document.getElementById(`kedv2`).checked){
            ar=ar*0.93; megtak=ar*0.07; kedvezmeny=`Családi és nyugdíjas kedvezmény együttes igénybevételével összesen 7% engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`
        }
        else if(document.getElementById(`kedv2`).checked && document.getElementById(`kedv3`).checked){
            ar=ar*0.88; megtak=ar*0.12; kedvezmeny=`Törzsvásárlói és nyugdíjas kedvezmény együttes igénybevételével összesen 12% engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`
        }
        else if(document.getElementById(`kedv1`).checked && document.getElementById(`kedv3`).checked){
            ar=ar*0.85; megtak=ar*0.15; kedvezmeny=`Családi és törzsvásárlói kedvezmény együttes igénybevételével összesen 15% engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`
        }
        else if (document.getElementById(`kedv1`).checked) {
            ar=ar*0.95; megtak=ar*0.05; kedvezmeny=`A családi kedvezmény igénybevételével 5%-os engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`;
        }
        else if (document.getElementById(`kedv2`).checked) {
            ar=ar*0.98; megtak=ar*0.02; kedvezmeny=`A nyugdíjas kedvezmény igénybevételével 2%-os engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`;
        }
        else if (document.getElementById(`kedv3`).checked) {
            ar=ar*0.9; megtak=ar*0.1; kedvezmeny=`A törzsvásárlói kedvezmény igénybevételével 10%-os engedményben részesül, ez ${megtak}Ft megtakarítást jelent.`;
        }
        else if (document.getElementById(`kedv4`).checked) {
            ar=ar*1; kedvezmeny=`Sajnos nem vagy jogosult a feltüntetett kedvezményeinkre. További promóciós lehetőségekért keress fel minket emailben, telefonon vagy akár személyesen az irodánkban.`;
        }
        
        if (telinyari=="téli"){
        document.getElementById("content").innerHTML = 
        (`
            <img src="képek/kalktel.jpg" alt="Óceánjáró télen" class="telkep">
            <header class="kimut_header">
            <h4>Az Ön által összeállított csomag összköltsége ${ar}Ft.</h4>
            </header>
            <p class="kimut">
            Ebből a ${telinyari} hajótúra alapdíja ${tura}Ft, a kiválasztott szoba díja pedig összesen ${szoba}Ft.<br><br>
            Az Ön által kiválasztott ${ellat}<br><br>
            ${idv}
            ${sz}
            ${kedvezmeny}</p>
            <style>
                .kimut_header{padding: 12px 20px;
	border-radius: 10px;
	border: none;
	font-size: 1em;
	width: 100%; color: black;  background-color: rgba(227, 195, 70, 0.7);}
    .telkep{width:98%; margin: 1%;}
            </style>`);}
    else if(telinyari=="nyári"){
        document.getElementById("content").innerHTML = 
        (`
            <img src="képek/kalknyar.jpg" alt="Óceánjáró nyáron" class="telkep">
            <header class="kimut_header">
            <h4>Az Ön által összeállított csomag összköltsége ${ar}Ft.</h4>
            </header>
            <p class="kimut">
            Ebből a ${telinyari} hajótúra alapdíja ${tura}Ft, a kiválasztott szoba díja pedig összesen ${szoba}Ft.<br><br>
            Az Ön által kiválasztott ${ellat}<br><br>
            ${idv}
            ${sz}
            ${kedvezmeny}</p>
            <style>
                .kimut_header{padding: 12px 20px;
	border-radius: 10px;
	border: none;
	font-size: 1em;
	width: 100%; background-color: rgba(227, 195, 70, 0.7); color: black;}
    .telkep{width:98%; margin: 1%;}
            </style>`);}
    }
document.getElementById("kalk").addEventListener("click", szamolas);
