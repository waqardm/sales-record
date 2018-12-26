// Income Detail Table Total Calculation

//Setting variables
let monCash = document.getElementById('monCash').innerHTML;
let monCard = document.getElementById('monCard').innerHTML;
let monCheque = document.getElementById('monCheque').innerHTML;
let monTotal = document.getElementById('monTotal');
let monTillCash = document.getElementById("monTillCash").innerHTML;
let monTillCharge = document.getElementById("monTillCharge").innerHTML;
let dailyTillCashMon = document.getElementById('dailyTillCashMon').innerHTML;
let dailyTillChargeMon = document.getElementById("dailyTillChargeMon").innerHTML;

let tueCash = document.getElementById("tueCash").innerHTML;
let tueCard = document.getElementById("tueCard").innerHTML;
let tueCheque = document.getElementById("tueCheque").innerHTML;
let tueTotal = document.getElementById("tueTotal");
let tueTillCash = document.getElementById("tueTillCash").innerHTML;
let tueTillCharge = document.getElementById("tueTillCharge").innerHTML;
let dailyTillCashTue = document.getElementById("dailyTillCashTue").innerHTML;
let dailyTillChargeTue = document.getElementById("dailyTillChargeTue").innerHTML;

let wedCash = document.getElementById("wedCash").innerHTML;
let wedCard = document.getElementById("wedCard").innerHTML;
let wedCheque = document.getElementById("wedCheque").innerHTML;
let wedTotal = document.getElementById("wedTotal");
let wedTillCash = document.getElementById("wedTillCash").innerHTML;
let wedTillCharge = document.getElementById("wedTillCharge").innerHTML;
let dailyTillCashWed = document.getElementById("dailyTillCashWed").innerHTML;
let dailyTillChargeWed = document.getElementById("dailyTillChargeWed").innerHTML;

let thurCash = document.getElementById("thurCash").innerHTML;
let thurCard = document.getElementById("thurCard").innerHTML;
let thurCheque = document.getElementById("thurCheque").innerHTML;
let thurTotal = document.getElementById("thurTotal");
let thurTillCash = document.getElementById("thurTillCash").innerHTML;
let thurTillCharge = document.getElementById("thurTillCharge").innerHTML;
let dailyTillCashThur = document.getElementById("dailyTillCashThur").innerHTML;
let dailyTillChargeThur = document.getElementById("dailyTillChargeThur").innerHTML;

let friCash = document.getElementById("friCash").innerHTML;
let friCard = document.getElementById("friCard").innerHTML;
let friCheque = document.getElementById("friCheque").innerHTML;
let friTotal = document.getElementById("friTotal");
let friTillCash = document.getElementById("friTillCash").innerHTML;
let friTillCharge = document.getElementById("friTillCharge").innerHTML;
let dailyTillCashFri = document.getElementById("dailyTillCashFri").innerHTML;
let dailyTillChargeFri = document.getElementById("dailyTillChargeFri").innerHTML;

let satCash = document.getElementById("satCash").innerHTML;
let satCard = document.getElementById("satCard").innerHTML;
let satCheque = document.getElementById("satCheque").innerHTML;
let satTotal = document.getElementById("satTotal");
let satTillCash = document.getElementById("satTillCash").innerHTML;
let satTillCharge = document.getElementById("satTillCharge").innerHTML;
let dailyTillCashSat = document.getElementById("dailyTillCashFri").innerHTML;
let dailyTillChargeSat = document.getElementById("dailyTillChargeSat").innerHTML;

// Daily totals of cash/card/cheque
monTotal = monTotal.innerHTML = addDailyTotals(monCash, monCard, monCheque);
tueTotal = tueTotal.innerHTML = addDailyTotals(tueCash, tueCard, tueCheque);
wedTotal = wedTotal.innerHTML = addDailyTotals(wedCash, wedCard, wedCheque);
thurTotal = thurTotal.innerHTML = addDailyTotals(thurCash, thurCard, thurCheque);
friTotal = friTotal.innerHTML = addDailyTotals(friCash, friCard, friCheque);
satTotal = satTotal.innerHTML = addDailyTotals(satCash, satCard, satCheque);

let monVariance = document.getElementById('monVariance').innerHTML = variance(monTotal, monTillCash);
let tueVariance = document.getElementById('tueVariance').innerHTML = variance(tueTotal, tueTillCash);
let wedVariance = document.getElementById('wedVariance').innerHTML = variance(wedTotal, wedTillCash);
let thurVariance = document.getElementById('thurVariance').innerHTML = variance(thurTotal, thurTillCash);
let friVariance = document.getElementById('friVariance').innerHTML = variance(friTotal, friTillCash);
let satVariance = document.getElementById('satVariance').innerHTML = variance(satTotal, satTillCash);

//function for calculating variance
function variance(a,b) {
    return a - b
}

//sum of totals (daily) for cash/card/cheque
var dailyTotals = document.getElementById('sumDailyTotals').innerHTML = sumDailyTotals(monTotal, tueTotal, wedTotal, thurTotal, friTotal, satTotal);

//sum of cash for week
var sumCashForWeek = document.getElementById('sumCashWeek').innerHTML = sumWeeklyTotals(monCash, tueCash, wedCash, thurCash, friCash, satCash);

//sum of card for week
var sumCardForWeek = document.getElementById('sumCardWeek').innerHTML = sumWeeklyTotals(monCard, tueCard, wedCard, thurCard, friCard, satCard);

//sum of cheque for week
varSumChequeForWeek = document.getElementById('sumChequeWeek').innerHTML = sumWeeklyTotals(monCheque, tueCheque, wedCheque, thurCheque, friCheque, satCheque);

//sum of weekTillCash
document.getElementById('weekTillCash').innerHTML = sumWeeklyTotals(monTillCash, tueTillCash, wedTillCash, thurTillCash, friTillCash, satTillCash);

//sum of weekTillCharge
document.getElementById('weekTillCharge').innerHTML = sumWeeklyTotals(monTillCharge, tueTillCharge, wedTillCharge, thurTillCharge, friTillCharge, satTillCharge);

//sum of daily till expected cash values
document.getElementById('dailyTillCashTotal').innerHTML = sumWeeklyTotals(dailyTillCashMon, dailyTillCashTue, dailyTillCashWed, dailyTillCashThur, dailyTillCashFri, dailyTillCashSat);

//sum of variances
document.getElementById('sumDailyVariance').innerHTML = sumWeeklyTotals(monVariance, tueVariance, wedVariance, thurVariance, friVariance, satVariance);

//sum of daily charge totals
document.getElementById('sumDailyTillChargeTotal').innerHTML = sumWeeklyTotals(dailyTillChargeMon, dailyTillChargeTue, dailyTillChargeWed, dailyTillChargeThur, dailyTillChargeFri, dailyTillChargeSat);

//weekly total table 
let weeklyTotal = document.getElementById('weeklyTotal').innerHTML = dailyTotals;
let weekCalcWages = document.getElementById('weekCalcWages').innerHTML;
let weekCalcExpenses = document.getElementById('weekCalcExpenses').innerHTML;

let netProfit = document.getElementById('netProfit').innerHTML = netProfitFunc(weeklyTotal, weekCalcWages, weekCalcExpenses);

function netProfitFunc(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    
    return a - (b + c) ;
}


function addDailyTotals(a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    return a + b + c;
};

function sumDailyTotals(a,b,c,d,e,f){
    return a + b + c + d + e + f;
}

function sumWeeklyTotals(a,b,c,d,e,f) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    e = parseInt(e);
    f = parseInt(f);
    return a + b + c + d + e + f;
}
