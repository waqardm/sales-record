
// Income Detail Table Total Calculation
let monCash = document.getElementById('monCash').innerHTML;
let monCard = document.getElementById('monCard').innerHTML;
let monCheque = document.getElementById('monCheque').innerHTML;
let monTotal = document.getElementById('monTotal');

let tueCash = document.getElementById("tueCash").innerHTML;
let tueCard = document.getElementById("tueCard").innerHTML;
let tueCheque = document.getElementById("tueCheque").innerHTML;
let tueTotal = document.getElementById("tueTotal");

let wedCash = document.getElementById("wedCash").innerHTML;
let wedCard = document.getElementById("wedCard").innerHTML;
let wedCheque = document.getElementById("wedCheque").innerHTML;
let wedTotal = document.getElementById("wedTotal");

let thurCash = document.getElementById("thurCash").innerHTML;
let thurCard = document.getElementById("thurCard").innerHTML;
let thurCheque = document.getElementById("thurCheque").innerHTML;
let thurTotal = document.getElementById("thurTotal");

let friCash = document.getElementById("friCash").innerHTML;
let friCard = document.getElementById("friCard").innerHTML;
let friCheque = document.getElementById("friCheque").innerHTML;
let friTotal = document.getElementById("friTotal");

let satCash = document.getElementById("satCash").innerHTML;
let satCard = document.getElementById("satCard").innerHTML;
let satCheque = document.getElementById("satCheque").innerHTML;
let satTotal = document.getElementById("satTotal");


monTotal = monTotal.innerHTML = addDailyTotals(monCash, monCard, monCheque);
tueTotal = tueTotal.innerHTML = addDailyTotals(tueCash, tueCard, tueCheque);
wedTotal = wedTotal.innerHTML = addDailyTotals(wedCash, wedCard, wedCheque);
thurTotal = thurTotal.innerHTML = addDailyTotals(thurCash, thurCard, thurCheque);
friTotal = friTotal.innerHTML = addDailyTotals(friCash, friCard, friCheque);
satTotal = satTotal.innerHTML = addDailyTotals(satCash, satCard, satCheque);
document.getElementById('sumDailyTotals').innerHTML = sumDailyTotals(monTotal, tueTotal, wedTotal, thurTotal, friTotal, satTotal);

function addDailyTotals(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    return a + b + c;
};

function sumDailyTotals(a,b,c,d,e,f){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    e = parseInt(e);
    f = parseInt(f);
    return a + b + c + d + e + f;
}