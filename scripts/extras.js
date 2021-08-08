
// function decToBin(number) {}

// function decToOct(number) {
//     let quotient = BigInt(number);
//     let divisor = 8n;
//     let result = [];
//     let remainder;
//     while (quotient) {
//         remainder = quotient % divisor;
//         quotient = quotient / divisor;
//         result.push(remainder.toString());
//     }
//     return result.reverse().join("");
// }

// function d_h(number) {
//     let quotient = BigInt(number);
//     let divisor = 16n;
//     let result = [];
//     let remainder;
//     while (quotient) {
//         remainder = quotient % divisor;
//         quotient = quotient / divisor;
//         result.push(hexDef1[remainder.toString()]);
//     }
//     return result.reverse().join("");
// }

// function o_b(number) {
//     let result = [];
//     for (const digit of number) result.push(octDef2[digit]);
//     return result.join("");
// }

// function h_b(number) {
//     let result = [];
//     for (const digit of number.toLowerCase()) result.push(hexDef3[digit]);
//     return result.join("");
// }

// function h_o(number) {
//     return b_o(h_b(number));
// }

// function o_h(number) {
//     return b_h(o_b(number));
// }

// function b_d(number) {
//     let result = 0n;
//     Array.from(number)
//         .reverse()
//         .forEach(
//             (digit, index) => (result += BigInt(digit) * 2n ** BigInt(index))
//         );
//     return result.toString();
// }

// function o_d(number) {
//     let result = 0n;
//     Array.from(number)
//         .reverse()
//         .forEach(
//             (digit, index) => (result += BigInt(digit) * 8n ** BigInt(index))
//         );
//     return result.toString();
// }

// function h_d(number) {
//     let result = 0n;
//     let numberArray = [];
//     for (const digit of number.toLowerCase()) numberArray.push(hexDef2[digit]);
//     numberArray
//         .reverse()
//         .forEach((digit, index) => (result += digit * 16n ** BigInt(index)));
//     return result.toString();
// }

// function b_o(number) {
//     let result = [];
//     chunk(number, 3).forEach((chunk) => result.push(octDef1[chunk]));
//     return result.join("");
// }

// function b_h(number) {
//     let result = [];
//     chunk(number, 4).forEach((chunk) => result.push(hexDef4[chunk]));
//     return result.join("");
// }
