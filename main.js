// for tsikli bilan masalalar
// 1. 1 dan 100 gacha bo‘lgan sonlar yig‘indisini toping.
// 2. 5 dan 1 gacha bo‘lgan sonlarni teskari tartibda chiqarish.
// 3. 1 dan 10 gacha bo‘lgan juft sonlarni chiqarish.
// 4. N gacha bo‘lgan sonlarning kvadratlarini ekranga chiqarish.
// 5. 1 dan 100 gacha bo‘lgan tub sonlarni chiqarish.
// 6. 1 dan 100 gacha bo‘lgan sonlardan 7 ga bo‘linadiganlarni chiqarish.
// 7. 1 dan 100 gacha bo‘lgan sonlarning 3 yoki 5 ga bo‘linadiganlarini yig‘ib boring.

// break va continue Bilan Masalalar
// 8. Agar 7 ni ko‘rsangiz, tsiklni to‘xtating:
// 9. 1 dan 10 gacha bo‘lgan sonlarni chiqarish, lekin juft sonlarni chiqarishdan o‘tkazib yuboring.
// 10. 1 dan 10 gacha bo‘lgan sonlarning yig‘indisini hisoblang, lekin 5 ni o‘tkazib yuboring.

1;
// ;
//  let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("1 dan 100 gacha bo‘lgan sonlar yig‘indisi:", sum);

// 2;
//  let = 0;
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

3;
// ;
// for (let i = 1; i < 11; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
//   }

4;
//;
// const N = 10;
// for (let i = 1; i <= N; i++) {
//     console.log(`Son: ${i}, Kvadrati: ${i * i}`);
// }


5;
// ;
// for (let num = 2; num <= 100; num++) {
//     let number = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           number = false;
//             break;
//         }
//     }
//     if (number) {
//         console.log(num);
//     }
// }

6;
//;
// let num = 0;
// for (let num = 1; num <= 100; num++) {
//     if (num % 7 === 0) {
//         console.log(num);
//     }
// }


7;
// ;
// let sum = 0;
// for (let num = 1; num <= 100; num++) {
//     if (num % 3 === 0 || num % 5 === 0) {
//     sum += num;
//     }
// }
// console.log(`3 yoki 5 ga bo‘linadigan sonlarning yig‘indisi: ${sum}`);

8;
// let = 0;
// for (let i = 0; i <= 10; i++) {
// 	if (i === 7) {
// 		console.log('7 topildi, tsikl to‘xtatildi.');
// 		break;
// 	}
// 	console.log(i);
// }


9;
// let = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//   console.log(i);}


10;
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
// 	if (i !== 5) {
// 		sum += i;
// 	}
// }
// console.log(sum);
