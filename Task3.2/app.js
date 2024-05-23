// -----------------Task1--------------------
console.log('9'-'5'); //4
console.log('19' - '13' + '17' ); //617
console.log('19' -'13' + 17); //23
console.log('123' < 57); // false
console.log(5+6+'4'+9-4-2); //11+'4'='114'+9= 1149 -4=1145-2=1143

// -----------------Task2--------------------


let populasiya = 100000;
if(populasiya>330000){
    console.log("Azərbaycanın populasiyası 33 milyondan çoxdur");

}
else{
    console.log("Azərbaycanın populasiyası 33 milyondan azdir");
}


// -----------------Task3--------------------

switch(new Date().getDay()){
    case "cin": 
    console.log("En, cox, danisilan ,dil");
    break;
    case "ispan": 
    console.log("İkinci, en, cox, danisilan, dil");
    break;
    case "ingilis": 
    console.log("3-cu, sirada, gelir");
    break;
    case "hind": 
    console.log("4-cu, sirada, gelir");
    break;
    case "ereb": 
    console.log("5-ci sirada gelir");
    break;
    default:
    console.log("Qeyd, olunan, dil, fergli ,dildir");
    break;
}


// -----------------Challange1--------------------

const mehemmedCeki = 95;
const mehemmedBoy = 1.88;
const elcinCeki = 85;
const elcinBoy = 1.76;

const mehemmedBmi = (mehemmedCeki/mehemmedBoy*mehemmedBoy);
console.log(mehemmedBmi);
const elcinBmi = (elcinCeki/elcinBoy*elcinBoy);
console.log(elcinBmi);


if(mehemmedBmi>elcinBmi){
    console.log("Məhəmmədin BMI-ı Elçindən 2.5 qədər böyükdür");
}else{
    console.log("Məhəmmədin BMI-ı Elçindən  böyükdür deyil");
}


//-----------------Challange2--------------------

let delfinBal1 = 96;
let delfinBal2 = 108;
let delfinBal3 = 89;
let edediOrtaDelfin = delfinBal1+delfinBal2+delfinBal3/3;
console.log(edediOrtaDelfin);


let koalaBal1 = 88;
let koalaBal2 = 91;
let koalaBal3 = 110;
let edediOrtaKoala = koalaBal1+koalaBal2+koalaBal3/3;
console.log(edediOrtaKoala);


if(edediOrtaDelfin>edediOrtaKoala){
    console.log("Dolfinlər qazandı");
}
else if(edediOrtaDelfin<edediOrtaKoala){
    console.log("Koalalar qazandı")
}
else{
    console.log("bərabərə qaldılar");
}


console.log(edediOrtaDelfin>=100 || edediOrtaKoala>=100); //turue
console.log(edediOrtaDelfin>=100 && edediOrtaKoala>=100); //false


//-----------------Challange3--------------------

// let hesab= 250;
// let servisHaqqi;
// if(servisHaqqi===15){
//     console.log(hesab*15/100);
// } 
//  if(servisHaqqi===20){
//     console.log(hesab*20/100);
// }else{
//     console.log("hesabi odeyin");
// }

const servisHaqqi = 15;
const cumle = servisHaqqi === 15 ? "servis haqqi 15% teshkil edir" : "20% teshkil edir";


//Template Literal
let price = 275;
let VAT = 41.25;

let total = `Total: ${(price + VAT)}`;
console.log(total);