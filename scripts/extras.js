
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










// bin: (n) => {
    //             explcontent.replaceChildren();
    //             expltitle.replaceChildren();
    //             expltitle.appendChild(document.createTextNode(`Represent (${n})`));
    //             let bas = document.createElement("sub");
    //             bas.textContent = "10";
    //             expltitle.appendChild(bas);
    //             expltitle.appendChild(document.createTextNode(" in Binary."));
    
    //             let step1 = document.createElement("div");
    //             step1.classList.add("step");
    
    //             let step1Header = document.createElement("div");
    //             step1Header.classList.add("step-header");
    
    //             let step1No = document.createElement("div");
    //             step1No.classList.add("stepno");
    //             step1No.textContent = "1)";
    
    //             let step1Title = document.createElement("div");
    //             step1Title.classList.add("step-title");
    //             step1Title.textContent = `Repeatedly divide ${n} by 2 until the dividend becomes 0, and note down the remainders.`;
    
    //             step1Header.appendChild(step1No);
    //             step1Header.appendChild(step1Title);
    //             step1.appendChild(step1Header);
    
    //             let step1Body = document.createElement("div");
    //             step1Body.classList.add("step-body");
    
    //             let divTable1 = document.createElement("div");
    //             divTable1.classList.add("div-table");
    
    //             let col1 = document.createElement("div");
    //             let col2 = document.createElement("div");
    //             let col3 = document.createElement("div");
    //             col1.classList.add("div-table-col");
    //             col2.classList.add("div-table-col");
    //             col2.classList.add("brd");
    //             col3.classList.add("div-table-col");
    //             col3.classList.add("brd");
    
    //             let q = BigInt(n);
    //             let r,
    //                 res = [];
    //             let di = 2n;
    //             while (q) {
    //                 r = q % di;
    
    //                 let c1 = document.createElement("div");
    //                 c1.classList.add("div-table-cell");
    //                 c1.textContent = "2";
    
    //                 let c2 = document.createElement("div");
    //                 c2.classList.add("div-table-cell");
    //                 c2.textContent = q;
    
    //                 let c3 = document.createElement("div");
    //                 c3.classList.add("div-table-cell");
    //                 c3.textContent = r;
    
    //                 col1.appendChild(c1);
    //                 col2.appendChild(c2);
    //                 col3.appendChild(c3);
    
    //                 q /= di;
    //                 res.push(r.toString());
    //             }
    //             let result = res.reverse();
    
    //             let zeroDiv = document.createElement("div");
    //             zeroDiv.textContent = "0";
    //             col2.appendChild(zeroDiv);
    
    //             divTable1.appendChild(col1);
    //             divTable1.appendChild(col2);
    //             divTable1.appendChild(col3);
    
    //             let arrhead = document.createElement("div");
    //             arrhead.classList.add("arrhead");
    //             let arrtail = document.createElement("div");
    //             arrtail.classList.add("arrtail");
    //             // col4 is the arrow
    //             let col4 = document.createElement("div");
    //             // col4.style.backgroundImage = "url(./images/arrow.svg)";
    //             // col4.classList.add("arrow");
    //             // col4.appendChild(arrhead);
    //             // col4.appendChild(arrtail);
    //             divTable1.appendChild(col4);
    
    //             step1Body.appendChild(divTable1);
    //             step1.appendChild(step1Body);
    //             explcontent.appendChild(step1);
    
    //             let step2 = document.createElement("div");
    //             step2.classList.add("step");
    
    //             let step2Header = document.createElement("div");
    //             step2Header.classList.add("step-header");
    
    //             let step2No = document.createElement("div");
    //             step2No.classList.add("stepno");
    //             step2No.textContent = "2)";
    
    //             let step2Title = document.createElement("div");
    //             step2Title.classList.add("step-title");
    //             step2Title.textContent = "Write the remainders as directed by the arrow.";
    
    //             step2Header.appendChild(step2No);
    //             step2Header.appendChild(step2Title);
    //             step2.appendChild(step2Header);
    
    //             let step2Body = document.createElement("div");
    //             step2Body.classList.add("step-body");
    
    //             let remtable = document.createElement("div");
    //             remtable.classList.add("remtable");
    
    //             let arrright = document.createElement("div");
    //             arrright.classList.add("arrright");
    // // arrright is an arrow
    //             // let arrrighttail = document.createElement("div");
    //             // arrrighttail.classList.add("arrrighttail");
    //             // let arrrighthead = document.createElement("div");
    //             // arrrighthead.classList.add("arrrighthead");
    
    //             // arrright.appendChild(arrrighttail);
    //             // arrright.appendChild(arrrighthead);
    
    //             remtable.appendChild(arrright);
    
    //             let rems = document.createElement("div");
    //             rems.classList.add("rems");
    
    //             result.forEach((rem) => {
    //                 let remi = document.createElement("div");
    //                 remi.textContent = rem;
    //                 rems.appendChild(remi);
    //             });
    
    //             remtable.appendChild(rems);
    
    //             step2Body.appendChild(remtable);
    
    //             step2.appendChild(step2Body);
    //             explcontent.appendChild(step2);
    
    //             let step3 = document.createElement("div");
    //             step3.classList.add("step");
    
    //             let step3Header = document.createElement("div");
    //             step3Header.classList.add("step-header");
    
    //             let step3No = document.createElement("div");
    //             step3No.classList.add("stepno");
    //             step3No.textContent = "3)";
    
    //             let step3Title = document.createElement("div");
    //             step3Title.classList.add("step-title");
    //             step3Title.textContent = "And it's done!";
    
    //             step3Header.appendChild(step3No);
    //             step3Header.appendChild(step3Title);
    //             step3.appendChild(step3Header);
    
    //             let step3Body = document.createElement("div");
    //             step3Body.classList.add("step-body");
    //             step3Body.classList.add("resd");
    
    //             let resultDiv = document.createElement("div");
    //             resultDiv.classList.add("resdiv");
    
    //             step3Body.appendChild(document.createTextNode(`(${n})`))
    //             let bas1=document.createElement('sub')
    //             bas1.textContent = "10";
    //             step3Body.appendChild(bas1)
    //             step3Body.appendChild(document.createTextNode(` = (${result.join("")})`))
    //             let bas2=document.createElement('sub')
    //             bas2.textContent = "2";
    //             step3Body.appendChild(bas2)
    
    //             step3.appendChild(step3Body);
    //             explcontent.appendChild(step3);
    //         },
    
    //         oct: (n) => {
    //             explcontent.replaceChildren();
    //             expltitle.replaceChildren();
    //             expltitle.appendChild(document.createTextNode(`Represent (${n})`));
    //             let bas = document.createElement("sub");
    //             bas.textContent = "10";
    //             expltitle.appendChild(bas);
    //             expltitle.appendChild(document.createTextNode(" in Octal."));
    
    //             let step1 = document.createElement("div");
    //             step1.classList.add("step");
    
    //             let step1Header = document.createElement("div");
    //             step1Header.classList.add("step-header");
    
    //             let step1No = document.createElement("div");
    //             step1No.classList.add("stepno");
    //             step1No.textContent = "1)";
    
    //             let step1Title = document.createElement("div");
    //             step1Title.classList.add("step-title");
    //             step1Title.textContent = `Repeatedly divide ${n} by 8 until the dividend becomes 0, and note down the remainders.`;
    
    //             step1Header.appendChild(step1No);
    //             step1Header.appendChild(step1Title);
    //             step1.appendChild(step1Header);
    
    //             let step1Body = document.createElement("div");
    //             step1Body.classList.add("step-body");
    
    //             let divTable1 = document.createElement("div");
    //             divTable1.classList.add("div-table");
    
    //             let col1 = document.createElement("div");
    //             let col2 = document.createElement("div");
    //             let col3 = document.createElement("div");
    //             col1.classList.add("div-table-col");
    //             col2.classList.add("div-table-col");
    //             col2.classList.add("brd");
    //             col3.classList.add("div-table-col");
    //             col3.classList.add("brd");
    
    //             let q = BigInt(n);
    //             let r,
    //                 res = [];
    //             let di = 8n;
    //             while (q) {
    //                 r = q % di;
    
    //                 let c1 = document.createElement("div");
    //                 c1.classList.add("div-table-cell");
    //                 c1.textContent = "8";
    
    //                 let c2 = document.createElement("div");
    //                 c2.classList.add("div-table-cell");
    //                 c2.textContent = q;
    
    //                 let c3 = document.createElement("div");
    //                 c3.classList.add("div-table-cell");
    //                 c3.textContent = r;
    
    //                 col1.appendChild(c1);
    //                 col2.appendChild(c2);
    //                 col3.appendChild(c3);
    
    //                 q /= di;
    //                 res.push(r.toString());
    //             }
    //             let result = res.reverse();
    
    //             let zeroDiv = document.createElement("div");
    //             zeroDiv.textContent = "0";
    //             col2.appendChild(zeroDiv);
    
    //             divTable1.appendChild(col1);
    //             divTable1.appendChild(col2);
    //             divTable1.appendChild(col3);
    
    //             let arrhead = document.createElement("div");
    //             arrhead.classList.add("arrhead");
    //             let arrtail = document.createElement("div");
    //             arrtail.classList.add("arrtail");
    //             let col4 = document.createElement("div");
    //             // col4.style.backgroundImage = "url(./images/arrow.svg)";
    //             // col4.classList.add("arrow");
    //             // col4.appendChild(arrhead);
    //             // col4.appendChild(arrtail);
    
    //             divTable1.appendChild(col4);
    
    //             step1Body.appendChild(divTable1);
    //             step1.appendChild(step1Body);
    //             explcontent.appendChild(step1);
    
    //             let step2 = document.createElement("div");
    //             step2.classList.add("step");
    
    //             let step2Header = document.createElement("div");
    //             step2Header.classList.add("step-header");
    
    //             let step2No = document.createElement("div");
    //             step2No.classList.add("stepno");
    //             step2No.textContent = "2)";
    
    //             let step2Title = document.createElement("div");
    //             step2Title.classList.add("step-title");
    //             step2Title.textContent = "Write the remainders as directed by the arrow.";
    
    //             step2Header.appendChild(step2No);
    //             step2Header.appendChild(step2Title);
    //             step2.appendChild(step2Header);
    
    //             let step2Body = document.createElement("div");
    //             step2Body.classList.add("step-body");
    
    //             let remtable = document.createElement("div");
    //             remtable.classList.add("remtable");
    
    //             let arrright = document.createElement("div");
    //             arrright.classList.add("arrright");
    
    //             let arrrighttail = document.createElement("div");
    //             arrrighttail.classList.add("arrrighttail");
    //             let arrrighthead = document.createElement("div");
    //             arrrighthead.classList.add("arrrighthead");
    
    //             arrright.appendChild(arrrighttail);
    //             arrright.appendChild(arrrighthead);
    
    //             remtable.appendChild(arrright);
    
    //             let rems = document.createElement("div");
    //             rems.classList.add("rems");
    
    //             result.forEach((rem) => {
    //                 let remi = document.createElement("div");
    //                 remi.textContent = rem;
    //                 rems.appendChild(remi);
    //             });
    
    //             remtable.appendChild(rems);
    
    //             step2Body.appendChild(remtable);
    
    //             step2.appendChild(step2Body);
    //             explcontent.appendChild(step2);
    
    //             let step3 = document.createElement("div");
    //             step3.classList.add("step");
    
    //             let step3Header = document.createElement("div");
    //             step3Header.classList.add("step-header");
    
    //             let step3No = document.createElement("div");
    //             step3No.classList.add("stepno");
    //             step3No.textContent = "3)";
    
    //             let step3Title = document.createElement("div");
    //             step3Title.classList.add("step-title");
    //             step3Title.textContent = "And it's done!";
    
    //             step3Header.appendChild(step3No);
    //             step3Header.appendChild(step3Title);
    //             step3.appendChild(step3Header);
    
    //             let step3Body = document.createElement("div");
    //             step3Body.classList.add("step-body");
    //             step3Body.classList.add("resd");
    
    //             // let resultDiv = document.createElement("div");
    //             // resultDiv.classList.add("resdiv");
    
    //             // let popen = document.createElement("div");
    //             // popen.textContent = "(";
    
    //             // let decnum = document.createElement("div");
    //             // decnum.textContent = n;
    
    //             // let pclose = document.createElement("div");
    //             // pclose.textContent = ")";
    
    //             // let b = document.createElement("sub");
    //             // b.textContent = "10";
    
    //             // pclose.appendChild(b);
    
    //             // resultDiv.appendChild(popen);
    //             // resultDiv.appendChild(decnum);
    //             // resultDiv.appendChild(pclose);
    
    //             // let eq = document.createElement("div");
    //             // eq.textContent = "=";
    
    //             // resultDiv.appendChild(eq);
    
    //             // popen = document.createElement("div");
    //             // popen.textContent = "(";
    
    //             // let binnum = document.createElement("div");
    //             // binnum.textContent = result.join("");
    
    //             // pclose = document.createElement("div");
    //             // pclose.textContent = ")";
    
    //             // resultDiv.appendChild(popen);
    //             // resultDiv.appendChild(binnum);
    
    //             // b = document.createElement("sub");
    //             // b.textContent = "8";
    
    //             // pclose.appendChild(b);
    
    //             // resultDiv.appendChild(pclose);
    
    //             // step3Body.appendChild(resultDiv);
    
    //             step3Body.appendChild(document.createTextNode(`(${n})`))
    //             let bas1=document.createElement('sub')
    //             bas1.textContent = "10";
    //             step3Body.appendChild(bas1)
    //             step3Body.appendChild(document.createTextNode(` = (${result.join("")})`))
    //             let bas2=document.createElement('sub')
    //             bas2.textContent = "8";
    //             step3Body.appendChild(bas2)
    
    //             step3.appendChild(step3Body);
    //             explcontent.appendChild(step3);
    //         },
    
    //         hex: (n) => {
    //             explcontent.replaceChildren();
    //             expltitle.replaceChildren();
    //             expltitle.appendChild(document.createTextNode(`Represent (${n})`));
    //             let bas = document.createElement("sub");
    //             bas.textContent = "10";
    //             expltitle.appendChild(bas);
    //             expltitle.appendChild(document.createTextNode(" in HexaDecimal."));
    
    //             let step1 = document.createElement("div");
    //             step1.classList.add("step");
    
    //             let step1Header = document.createElement("div");
    //             step1Header.classList.add("step-header");
    
    //             let step1No = document.createElement("div");
    //             step1No.classList.add("stepno");
    //             step1No.textContent = "1)";
    
    //             let step1Title = document.createElement("div");
    //             step1Title.classList.add("step-title");
    //             step1Title.textContent = `Repeatedly divide ${n} by 16 until the dividend becomes 0, and note down the remainders.`;
    
    //             step1Header.appendChild(step1No);
    //             step1Header.appendChild(step1Title);
    //             step1.appendChild(step1Header);
    
    //             let step1Body = document.createElement("div");
    //             step1Body.classList.add("step-body");
    
    //             let divTable1 = document.createElement("div");
    //             divTable1.classList.add("div-table");
    
    //             let col1 = document.createElement("div");
    //             let col2 = document.createElement("div");
    //             let col3 = document.createElement("div");
    //             col1.classList.add("div-table-col");
    //             col2.classList.add("div-table-col");
    //             col2.classList.add("brd");
    //             col3.classList.add("div-table-col");
    //             col3.classList.add("brd");
    
    //             let q = BigInt(n);
    //             let r,
    //                 res = [];
    //             let di = 16n;
    //             while (q) {
    //                 r = q % di;
    
    //                 let c1 = document.createElement("div");
    //                 c1.classList.add("div-table-cell");
    //                 c1.textContent = "8";
    
    //                 let c2 = document.createElement("div");
    //                 c2.classList.add("div-table-cell");
    //                 c2.textContent = q;
    
    //                 let c3 = document.createElement("div");
    //                 c3.classList.add("div-table-cell");
    //                 c3.textContent = r;
    
    //                 col1.appendChild(c1);
    //                 col2.appendChild(c2);
    //                 col3.appendChild(c3);
    
    //                 q /= di;
    //                 res.push(hexDef1[r.toString()]);
    //             }
    //             let result = res.reverse();
    
    //             let zeroDiv = document.createElement("div");
    //             zeroDiv.textContent = "0";
    //             col2.appendChild(zeroDiv);
    
    //             divTable1.appendChild(col1);
    //             divTable1.appendChild(col2);
    //             divTable1.appendChild(col3);
    
    //             let arrhead = document.createElement("div");
    //             arrhead.classList.add("arrhead");
    //             let arrtail = document.createElement("div");
    //             arrtail.classList.add("arrtail");
    //             let col4 = document.createElement("div");
    //             // col4.style.backgroundImage = "url(./images/arrow.svg)";
    //             // col4.classList.add("arrow");
    //             // col4.appendChild(arrhead);
    //             // col4.appendChild(arrtail);
    
    //             divTable1.appendChild(col4);
    
    //             step1Body.appendChild(divTable1);
    //             step1.appendChild(step1Body);
    //             explcontent.appendChild(step1);
    
    //             let step2 = document.createElement("div");
    //             step2.classList.add("step");
    
    //             let step2Header = document.createElement("div");
    //             step2Header.classList.add("step-header");
    
    //             let step2No = document.createElement("div");
    //             step2No.classList.add("stepno");
    //             step2No.textContent = "2)";
    
    //             let step2Title = document.createElement("div");
    //             step2Title.classList.add("step-title");
    //             step2Title.textContent = "Write the remainders as directed by the arrow.";
    
    //             step2Header.appendChild(step2No);
    //             step2Header.appendChild(step2Title);
    //             step2.appendChild(step2Header);
    
    //             let step2Body = document.createElement("div");
    //             step2Body.classList.add("step-body");
    
    //             let remtable = document.createElement("div");
    //             remtable.classList.add("remtable");
    
    //             let arrright = document.createElement("div");
    //             arrright.classList.add("arrright");
    
    //             let arrrighttail = document.createElement("div");
    //             arrrighttail.classList.add("arrrighttail");
    //             let arrrighthead = document.createElement("div");
    //             arrrighthead.classList.add("arrrighthead");
    
    //             arrright.appendChild(arrrighttail);
    //             arrright.appendChild(arrrighthead);
    
    //             remtable.appendChild(arrright);
    
    //             let rems = document.createElement("div");
    //             rems.classList.add("rems");
    
    //             result.forEach((rem) => {
    //                 let remi = document.createElement("div");
    //                 remi.textContent = rem;
    //                 rems.appendChild(remi);
    //             });
    
    //             remtable.appendChild(rems);
    
    //             step2Body.appendChild(remtable);
    
    //             step2.appendChild(step2Body);
    //             explcontent.appendChild(step2);
    
    //             let step3 = document.createElement("div");
    //             step3.classList.add("step");
    
    //             let step3Header = document.createElement("div");
    //             step3Header.classList.add("step-header");
    
    //             let step3No = document.createElement("div");
    //             step3No.classList.add("stepno");
    //             step3No.textContent = "3)";
    
    //             let step3Title = document.createElement("div");
    //             step3Title.classList.add("step-title");
    //             step3Title.textContent = "And it's done!";
    
    //             step3Header.appendChild(step3No);
    //             step3Header.appendChild(step3Title);
    //             step3.appendChild(step3Header);
    
    //             let step3Body = document.createElement("div");
    //             step3Body.classList.add("step-body");
    //             step3Body.classList.add("resd");
    
    //             // let resultDiv = document.createElement("div");
    //             // resultDiv.classList.add("resdiv");
    
    //             // let popen = document.createElement("div");
    //             // popen.textContent = "(";
    
    //             // let decnum = document.createElement("div");
    //             // decnum.textContent = n;
    
    //             // let pclose = document.createElement("div");
    //             // pclose.textContent = ")";
    
    //             // let b = document.createElement("sub");
    //             // b.textContent = "10";
    
    //             // pclose.appendChild(b);
    
    //             // resultDiv.appendChild(popen);
    //             // resultDiv.appendChild(decnum);
    //             // resultDiv.appendChild(pclose);
    
    //             // let eq = document.createElement("div");
    //             // eq.textContent = "=";
    
    //             // resultDiv.appendChild(eq);
    
    //             // popen = document.createElement("div");
    //             // popen.textContent = "(";
    
    //             // let binnum = document.createElement("div");
    //             // binnum.textContent = result.join("");
    
    //             // pclose = document.createElement("div");
    //             // pclose.textContent = ")";
    
    //             // resultDiv.appendChild(popen);
    //             // resultDiv.appendChild(binnum);
    
    //             // b = document.createElement("sub");
    //             // b.textContent = "16";
    
    //             // pclose.appendChild(b);
    
    //             // resultDiv.appendChild(pclose);
    
    //             // step3Body.appendChild(resultDiv);
    
    //             step3Body.appendChild(document.createTextNode(`(${n})`))
    //             let bas1=document.createElement('sub')
    //             bas1.textContent = "10";
    //             step3Body.appendChild(bas1)
    //             step3Body.appendChild(document.createTextNode(` = (${result.join("")})`))
    //             let bas2=document.createElement('sub')
    //             bas2.textContent = "16";
    //             step3Body.appendChild(bas2)
    
    //             step3.appendChild(step3Body);
    //             explcontent.appendChild(step3);
    //         },