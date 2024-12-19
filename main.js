// 1. 3 ta o’zgaruvchi berilgan. O’zgaruvchilar qiymati 31, 18 va 79. Uchta o’zgaruvchini orasida bitta probel bilan chop eting
// 2. Konsolga 50 va 10 ni yangi qatorlarda yozing
// 3. Klaviaturadan foydalanuvchi ismini so’rang. Console ga ‘Assalom aleykum, ’ va foydalanuvchi ismini bilan chop eting
// 4. Klaviaturadan foydalanuvchining sevimli futbol komandasini so’rang. Console ga komanda nomi bilan birga ‘ - chempion’ dib chop eting
// 5. Klaviaturadan kiritilgan raqamning oldingi va keying qiymatlarini chop eting. Misol. 15 kiritilsa, konsolda ’15 sonning keying qiymati 16, 15 sonning oldingi qiymati 14’
// 6. Do’kondan n kg nok, s kg sabzi, b kg bodring sotib olib umumiy narhni konsolga chiqaring
// 7. A va B sonlar berilgan ularning o’rtacha qiymatini hisoblang.
// 8. A va B sonlar berilgan ularning o’rta geometric qiymatini hisoblang
// 9. Kvadrat tomoni berilgan. Uning perimetri hisoblansin. P = x*4
// 10. Kvadratning tomoni berilgan uning yuzasi topilsin.
// 11. To’g’rito’rtburchakning tomonlari A va B berilgan. Uning yuzasi S = a*b va perimetri P = 2*(a+b) ni hisoblang
// 12. Diametr D berilgan. Uning uzunligi  ni hisoblang. Pi ni 3.14 hisoblang
// 13. Kub tomon a  berilgan. Kubning hajmi topilsin  va uning maydoni topilsin
// 14. Parallipipedning tomonlari a,b,c berilgan. Uning hajmini  va yuzasi  topilsin
// 15. Aylananing radiusi R berilgan. Uning uzunligi  va yuzasi
// 16. A va B qiymat berilgan. O’rta arifmetikini toping
// 17. A va B berilgan. Ularning o’rta geometriyasini toping.
// 18. A va B berilgan. Ularning yig’indisi, ayirmasi, ko’paytmasi va o’zaro qoldiqi topilsin
// 19. Uchburchakning a va b tomoni berilgan. Uchburchakning 3-tomoni c ni toping va perimetrini P:
// 20. Aylaning yuzi S berilgan. Diametri D va uzunligi L topilsin.
// 21. X va Y nuqtalar berilgan. Ularning orasidagi masofa topilsin. |

1; // let a = 31;
// let b = 18;
// let c = 79;
// console.log(`${a}, ${b}, ${c}`);

2; // let i= '50 \n 10';
// console.log(i);

3; // let ism = prompt('isim kiriting');
// console.log(`Assalom aleykum, foydalanuvchi Saidakbar `);

// let fudboolName = prompt('Sizni sevimli fudbool komandangiz');
// console.log(`${fudboolName} - chempion`);

4; // let fudboolName = prompt('Sizni sevimli fudboolchingiz');
// console.log(`${fudboolName} - doimo birinchi`);

// 6; let nokKg = prompt('nok kg sini kiriting');
//   let nokNarx = prompt('nok narxini kirting')
//   let result = nokKg * nokNarx
//   console.log(`Nokni ${nokKg} ni narxi ${result} sum`);

// 7; let a = 10;
//   let b = 20;
//   console.log((a + b) / 2);

8; // let A = prompt('A sonini kirting');
//   let B = prompt("B sonini kiriting ")
//  let result = Math.sqrt(A * B)
//   console.log(result);

// 9;  let pr = parseFloat(prompt( 'Kvadrat tomonini aniqlang'))
//   console.log(pr * 4);

10; // let a = +prompt('Kvadard tommmoni');
// console.log(a ** 2);

11; // let tomoni = parseFloat(prompt('Kubni tommonini kiriting..'));
// let yuzi = 6 * tomoni ** 2;
// let hajmi = tomoni ** 3;
// console.log(`Kubni yuzi ${yuzi}`);
// console.log(`Kubni hajmi ${hajmi}`);

13;
// let a = prompt('tomonini bergilang')
// let hajm = a ** 3;
// let yuzi = 6 * a ** 2;
// console.log(`Kubni hajmi: ${hajm}, Kub yuzi ${yuzi} `);

14;
// let a = parseFloat(prompt('kvadradning yuzasini yoz'));
// let b = prompt('kavdrad hajmi yoz');
// let c = Math.sqrt(a * b);
// console.log(c * 4);

15;
// let r = 5;
// let a = 2 * Math.PI * r;
// let b = Math.PI * r * r;
// console.log(`uzunligi ` + a.toFixed(2));
// console.log(`yuzasi ` + b.toFixed(3));

16;
// let a = 12;
// let b  =12;
// let result = (a + b ) / 2;+ result);
// console.log(`o'rta alifmetigi`;

17;
// let a = +prompt('kvadratni yozing');
// let b = +prompt('k ni soni ni yoz');
// console.log(a + b) / 2;

18;
// let a = +prompt('a')
// let b = +prompt('b')
// let yigindisi = a + b
// let ayrima = a - b;
// let kopaytirma = a * b
// let qoldig = a % b;
// console.log(`yigindisi ${yigindisi}`);
// console.log(`ayrimasi ${ayrima}`);
// console.log(`kopaytma ${kopaytirma}`);
// console.log(`qoldigi ${qoldig}`);

19;
// let a = +prompt('Uchburchakni a tomonini kiriting');
// let b = +prompt('Uchburchakni b tomonini kiriting');
// let c = Math.sqrt(a ** 2 + b** 2);
// let perimetr = a + b + c;
// console.log(`uchburchakning c tomoni: ${c}`);
// console.log(`uchburchakning peremetri: ${perimetr}`);

20; // function calculateCircleProperties(S) {
// 	if (S <= 0) {
// 		return "Aylaning yuzi nol yoki manfiy bo'lishi mumkin emas!";
// 	}
// 	const pi = Math.PI;
// 	const r = Math.sqrt(S / pi);
// 	const D = 2 * r;
// 	const L = 2 * pi * r;
// 	return {
// 		radius: r.toFixed(2),
// 		diameter: D.toFixed(2),
// 		circumference: L.toFixed(2),
// 	};
// }
// const S = 50;
// const result = calculateCircleProperties(S);
// console.log('Natijalar:', result);

// 2-topshiriq
// 1. Eldor ning yoshi X, Aziza ning yoshi – Y. Ularning o’rtacha yoshini aniqlang va har bir bolaning o’rtacha yoshdan farqini toping
// 2. A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”
// 3. A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni juft”
// 4. A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni 5 ga karrali”
// 5. A va B sonlar berilgan. Quyidagi gapni tekshiring: “A > 2 va B<=3”
// 6. A, B va C sonlar beriglan. Quyidagi ifoda to’g’rilini isbotlang. A < B < C
// 7. A va B sonlar berilgan. Quyidagi ifodani tekshiring: “A va B lar biri toq”
// 8. A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda o’zgarishsiz qolsin. Natijani chop eting
// 9. A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda ikkiga kamaytirilsin. Natijani chop eting
// 10. A soni berilgan. Agarda musbat bo’lsa qiymati ikki barobar oshirilsin, aks holda 2 ga kamaytirilsin, agarda 0 ga teng bo’lsa, qiymatini 10 bilan almashtirilsin. Natijani chop eting
// 11. A va B sonlar berilgan. Ularning orasidan kattasini hisoblang
// 12. A, B va C sonlar berilgan. Ularning orasidan eng kichkinasi topilsin
// 13. N soni berilgan. N ga to’g’ri keluvchi hafta kunini chop eting
// 14. M soni berilgan. M ga to’g’ri keluvchi oy nomini chop eting
// 15. Bokschining vazni berilgan. Vazn qiymatiga qarab. Yengil vazn (60gacha), Birinchi o’rta vazn (64gacha), O’rta vazn (69gacha). Qaysi kategoriyaga to’g’ri kelishini aniqlang

// Masala javoblari

1;
// let X = 25;
// let Y = 30;
// let ortachaYosh = (X + Y) / 2;
// console.log("O'rtacha yosh:", ortachaYosh);

2;
// let A = 5;
// let natija = A > 0 ? "To'g'ri" : "Notog'ri";
// console.log(natija);

3;
// let A = 4;
// let natija = A % 2 === 0 ? "To'g'ri" : "Notog'ri";
// console.log(natija);

4;
// let A = 10;
// let natija = A % 5 === 0 ? "To'g'ri" : "Notog'ri";
// console.log(natija);

5;
// let A = 5,
// 	B = 3;
// let natija = A > 2 && B <= 3 ? "To'g'ri" : "Notog'ri";
// console.log(natija);

6;
// let A = 2,
// 	B = 5,
// 	C = 8;
// let natija = A < B && B < C ? "To'g'ri" : "Notog'ri";
// console.log(natija);

7; // const A = 5;
// const B = 8;
// const biriToq = A % 2 !== 0 || B % 2 !== 0;
// console.log(biriToq ? 'Ha, biri toq' : "Yo'q, ikkisi ham juft");


//  let A = parseFloat(prompt('A sonini kiriting:'));
// if (A > 0) {
// 	A = A + 1;
// } else {
// 	A = A - 2;
// }
// alert('Natija: ' + A);

//  let A = parseInt(prompt('A sonini kiriting:'));
// if (A > 0) {
// 	A = A + 1;
// } else {
// 	A = A - 2;
// }
// console.log('Natija: ' + A);

10// let a = prompt("Sonni kiriting:");
// a = Number(a);
// if (a > 0) {
//     a *= 2;
// } else if (a < 0) {
//     a -= 2;
// } else {
//     a = 10;
// }
// console.log("Natija:", a);

11//  let a = Number(prompt('A sonini kiriting:'));
// let b = Number(prompt('B sonini kiriting:'));
// let max = a > b ? a : b;
// console.log('Kattasi:', max);



//  let a = Number(prompt("A sonini kiriting:"));
// let b = Number(prompt("B sonini kiriting:"));
// let c = Number(prompt("C sonini kiriting:"));
// let min = Math.min(a, b, c);
// console.log("Eng kichigi:", min);

// 13.let n = Number(prompt(" hafta kunini kiriting soni kiriting:"));
// let hafta;
// switch (n) {
// 	case 1:
// 		hafta = 'Dushanba';
// 		break;
// 	case 2:
// 		hafta = 'Seshanba';
// 		break;
// 	case 3:
// 		hafta = 'Chorshanba';
// 		break;
// 	case 4:
// 		hafta = 'Payshanba';
// 		break;
// 	case 5:
// 		hafta = 'Juma';
// 		break;
// 	case 6:
// 		hafta = 'Shanba';
// 		break;
// 	case 7:
// 		hafta = 'Yakshanba';
// 		break;
// 	default:
//   hafta = "Noto'g'ri son kiritildi!";
// }
// console.log(hafta);


// 14.let M = Number(prompt("oylarni  sonini kiriting:"));
// let oylar;
// switch (M) {
//     case 1:
//         oylar = "Yanvar";
//         break;
//     case 2:
//         oylar = "Fevral";
//         break;
//     case 3:
//         oylar = "Mart";
//         break;
//     case 4:
//         oylar = "Aprel";
//         break;
//     case 5:
//         oylar = "May";
//         break;
//     case 6:
//         oylar = "Iyun";
//         break;
//     case 7:
//         oylar = "Iyul";
//         break;
//     case 8:
//         oylar = "Avgust";
//         break;
//     case 9:
//         oylar = "Sentabr";
//         break;
//     case 10:
//         oylar = "Oktabr";
//         break;
//     case 11:
//         oylar = "Noyabr";
//         break;
//     case 12:
//         oylar = "Dekabr";
//         break;
//     default:
//         oylar = "Noto'g'ri son kiritildi! ";
// }
// console.log(oylar);
