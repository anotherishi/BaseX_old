let expltitle = document.getElementById("expl-title"),
    explcontent = document.getElementById("expl-content");

const expls = {
    dec: {
        bin: (n) => {
            explcontent.replaceChildren();
            expltitle.textContent = `Represent (${n})`;
            let bas = document.createElement("sub");
            bas.textContent = "10";
            explcontent.textContent += "in Binary.";

            let step1 = document.createElement("div");
            step1.classList.add("step");

            let step1Header = document.createElement("div");
            step1Header.classList.add("step-header");

            let step1No = document.createElement("div");
            step1No.classList.add("stepno");
            step1No.textContent = "1)";

            let step1Title = document.createElement("div");
            step1Title.classList.add("step-title");
            step1Title.textContent = `Repeatedly divide ${n} by 2 until the dividend becomes 0, and note down the remainders.`;

            step1Header.appendChild(step1No);
            step1Header.appendChild(step1Title);
            step1.appendChild(step1Header);

            let step1Body = document.createElement("div");
            step1Body.classList.add("step-body");

            let divTable1 = document.createElement("div");
            divTable1.classList.add("div-table");

            let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let col3 = document.createElement("div");
            col1.classList.add("div-table-col");
            col2.classList.add("div-table-col");
            col2.classList.add("brd");
            col3.classList.add("div-table-col");
            col3.classList.add("brd");

            let q = BigInt(n);
            let r,
                res = [];
            let di = 2n;
            while (q) {
                r = q % di;

                let c1 = document.createElement("div");
                c1.classList.add("div-table-cell");
                c1.textContent = "2";

                let c2 = document.createElement("div");
                c2.classList.add("div-table-cell");
                c2.textContent = q;

                let c3 = document.createElement("div");
                c3.classList.add("div-table-cell");
                c3.textContent = r;

                col1.appendChild(c1);
                col2.appendChild(c2);
                col3.appendChild(c3);

                q /= di;
                res.push(r.toString());
            }
            let result = res.reverse();

            let zeroDiv = document.createElement("div");
            zeroDiv.textContent = "0";
            col2.appendChild(zeroDiv);

            divTable1.appendChild(col1);
            divTable1.appendChild(col2);
            divTable1.appendChild(col3);

            let arrhead = document.createElement("div");
            arrhead.classList.add("arrhead");
            let arrtail = document.createElement("div");
            arrtail.classList.add("arrtail");
            let col4 = document.createElement("div");
            // col4.style.backgroundImage = "url(./images/arrow.svg)";
            col4.classList.add("arrow");
            col4.appendChild(arrhead);
            col4.appendChild(arrtail);

            divTable1.appendChild(col4);

            step1Body.appendChild(divTable1);
            step1.appendChild(step1Body);
            explcontent.appendChild(step1);

            let step2 = document.createElement("div");
            step2.classList.add("step");

            let step2Header = document.createElement("div");
            step2Header.classList.add("step-header");

            let step2No = document.createElement("div");
            step2No.classList.add("stepno");
            step2No.textContent = "2)";

            let step2Title = document.createElement("div");
            step2Title.classList.add("step-title");
            step2Title.textContent = "Write the remainders as directed by the arrow.";

            step2Header.appendChild(step2No);
            step2Header.appendChild(step2Title);
            step2.appendChild(step2Header);

            let step2Body = document.createElement("div");
            step2Body.classList.add("step-body");

            let remtable = document.createElement("div");
            remtable.classList.add("remtable");

            let arrright = document.createElement("div");
            arrright.classList.add("arrright");

            let arrrighttail = document.createElement("div");
            arrrighttail.classList.add("arrrighttail");
            let arrrighthead = document.createElement("div");
            arrrighthead.classList.add("arrrighthead");

            arrright.appendChild(arrrighttail);
            arrright.appendChild(arrrighthead);

            remtable.appendChild(arrright);

            let rems = document.createElement("div");
            rems.classList.add("rems");

            result.forEach((rem) => {
                let remi = document.createElement("div");
                remi.textContent = rem;
                rems.appendChild(remi);
            });

            remtable.appendChild(rems);

            step2Body.appendChild(remtable);

            step2.appendChild(step2Body);
            explcontent.appendChild(step2);

            let step3 = document.createElement("div");
            step3.classList.add("step");

            let step3Header = document.createElement("div");
            step3Header.classList.add("step-header");

            let step3No = document.createElement("div");
            step3No.classList.add("stepno");
            step3No.textContent = "3)";

            let step3Title = document.createElement("div");
            step3Title.classList.add("step-title");
            step3Title.textContent = "And it's done!";

            step3Header.appendChild(step3No);
            step3Header.appendChild(step3Title);
            step3.appendChild(step3Header);

            let step3Body = document.createElement("div");
            step3Body.classList.add("step-body");

            let resultDiv = document.createElement("div");
            resultDiv.classList.add("resdiv");

            let popen = document.createElement("div");
            popen.textContent = "(";

            let decnum = document.createElement("div");
            decnum.textContent = n;

            let pclose = document.createElement("div");
            pclose.textContent = ")";

            let b = document.createElement("sub");
            b.textContent = "10";

            pclose.appendChild(b);

            resultDiv.appendChild(popen);
            resultDiv.appendChild(decnum);
            resultDiv.appendChild(pclose);

            let eq = document.createElement("div");
            eq.textContent = "=";

            resultDiv.appendChild(eq);

            popen = document.createElement("div");
            popen.textContent = "(";

            let binnum = document.createElement("div");
            binnum.textContent = result.join("");

            pclose = document.createElement("div");
            pclose.textContent = ")";

            resultDiv.appendChild(popen);
            resultDiv.appendChild(binnum);

            b = document.createElement("sub");
            b.textContent = "2";

            pclose.appendChild(b);

            resultDiv.appendChild(pclose);

            step3Body.appendChild(resultDiv);
            step3.appendChild(step3Body);
            explcontent.appendChild(step3);
        },

        oct: (n) => {
            explcontent.replaceChildren();

            expltitle.textContent = `Represent (${n})`;
            let bas = document.createElement("sub");
            bas.textContent = "10";
            expltitle.appendChild(bas)
            expltitle.appendChild(document.createTextNode(" in Octal."));

            let step1 = document.createElement("div");
            step1.classList.add("step");

            let step1Header = document.createElement("div");
            step1Header.classList.add("step-header");

            let step1No = document.createElement("div");
            step1No.classList.add("stepno");
            step1No.textContent = "1)";

            let step1Title = document.createElement("div");
            step1Title.classList.add("step-title");
            step1Title.textContent = `Repeatedly divide ${n} by 8 until the dividend becomes 0, and note down the remainders.`;

            step1Header.appendChild(step1No);
            step1Header.appendChild(step1Title);
            step1.appendChild(step1Header);

            let step1Body = document.createElement("div");
            step1Body.classList.add("step-body");

            let divTable1 = document.createElement("div");
            divTable1.classList.add("div-table");

            let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let col3 = document.createElement("div");
            col1.classList.add("div-table-col");
            col2.classList.add("div-table-col");
            col2.classList.add("brd");
            col3.classList.add("div-table-col");
            col3.classList.add("brd");

            let q = BigInt(n);
            let r,
                res = [];
            let di = 8n;
            while (q) {
                r = q % di;

                let c1 = document.createElement("div");
                c1.classList.add("div-table-cell");
                c1.textContent = "8";

                let c2 = document.createElement("div");
                c2.classList.add("div-table-cell");
                c2.textContent = q;

                let c3 = document.createElement("div");
                c3.classList.add("div-table-cell");
                c3.textContent = r;

                col1.appendChild(c1);
                col2.appendChild(c2);
                col3.appendChild(c3);

                q /= di;
                res.push(r.toString());
            }
            let result = res.reverse();

            let zeroDiv = document.createElement("div");
            zeroDiv.textContent = "0";
            col2.appendChild(zeroDiv);

            divTable1.appendChild(col1);
            divTable1.appendChild(col2);
            divTable1.appendChild(col3);

            let arrhead = document.createElement("div");
            arrhead.classList.add("arrhead");
            let arrtail = document.createElement("div");
            arrtail.classList.add("arrtail");
            let col4 = document.createElement("div");
            // col4.style.backgroundImage = "url(./images/arrow.svg)";
            col4.classList.add("arrow");
            col4.appendChild(arrhead);
            col4.appendChild(arrtail);

            divTable1.appendChild(col4);

            step1Body.appendChild(divTable1);
            step1.appendChild(step1Body);
            explcontent.appendChild(step1);

            let step2 = document.createElement("div");
            step2.classList.add("step");

            let step2Header = document.createElement("div");
            step2Header.classList.add("step-header");

            let step2No = document.createElement("div");
            step2No.classList.add("stepno");
            step2No.textContent = "2)";

            let step2Title = document.createElement("div");
            step2Title.classList.add("step-title");
            step2Title.textContent = "Write the remainders as directed by the arrow.";

            step2Header.appendChild(step2No);
            step2Header.appendChild(step2Title);
            step2.appendChild(step2Header);

            let step2Body = document.createElement("div");
            step2Body.classList.add("step-body");

            let remtable = document.createElement("div");
            remtable.classList.add("remtable");

            let arrright = document.createElement("div");
            arrright.classList.add("arrright");

            let arrrighttail = document.createElement("div");
            arrrighttail.classList.add("arrrighttail");
            let arrrighthead = document.createElement("div");
            arrrighthead.classList.add("arrrighthead");

            arrright.appendChild(arrrighttail);
            arrright.appendChild(arrrighthead);

            remtable.appendChild(arrright);

            let rems = document.createElement("div");
            rems.classList.add("rems");

            result.forEach((rem) => {
                let remi = document.createElement("div");
                remi.textContent = rem;
                rems.appendChild(remi);
            });

            remtable.appendChild(rems);

            step2Body.appendChild(remtable);

            step2.appendChild(step2Body);
            explcontent.appendChild(step2);

            let step3 = document.createElement("div");
            step3.classList.add("step");

            let step3Header = document.createElement("div");
            step3Header.classList.add("step-header");

            let step3No = document.createElement("div");
            step3No.classList.add("stepno");
            step3No.textContent = "3)";

            let step3Title = document.createElement("div");
            step3Title.classList.add("step-title");
            step3Title.textContent = "And it's done!";

            step3Header.appendChild(step3No);
            step3Header.appendChild(step3Title);
            step3.appendChild(step3Header);

            let step3Body = document.createElement("div");
            step3Body.classList.add("step-body");

            let resultDiv = document.createElement("div");
            resultDiv.classList.add("resdiv");

            let popen = document.createElement("div");
            popen.textContent = "(";

            let decnum = document.createElement("div");
            decnum.textContent = n;

            let pclose = document.createElement("div");
            pclose.textContent = ")";

            let b = document.createElement("sub");
            b.textContent = "10";

            pclose.appendChild(b);

            resultDiv.appendChild(popen);
            resultDiv.appendChild(decnum);
            resultDiv.appendChild(pclose);

            let eq = document.createElement("div");
            eq.textContent = "=";

            resultDiv.appendChild(eq);

            popen = document.createElement("div");
            popen.textContent = "(";

            let binnum = document.createElement("div");
            binnum.textContent = result.join("");

            pclose = document.createElement("div");
            pclose.textContent = ")";

            resultDiv.appendChild(popen);
            resultDiv.appendChild(binnum);

            b = document.createElement("sub");
            b.textContent = "8";

            pclose.appendChild(b);

            resultDiv.appendChild(pclose);

            step3Body.appendChild(resultDiv);
            step3.appendChild(step3Body);
            explcontent.appendChild(step3);
        },

        hex: (n) => {
            explcontent.replaceChildren();

            expltitle.textContent = `Represent (${n})`;
            let bas = document.createElement("sub");
            bas.textContent = "10";
            expltitle.appendChild(bas)
            explcontent.textContent += "in HexaDecimal.";

            let step1 = document.createElement("div");
            step1.classList.add("step");

            let step1Header = document.createElement("div");
            step1Header.classList.add("step-header");

            let step1No = document.createElement("div");
            step1No.classList.add("stepno");
            step1No.textContent = "1)";

            let step1Title = document.createElement("div");
            step1Title.classList.add("step-title");
            step1Title.textContent = `Repeatedly divide ${n} by 16 until the dividend becomes 0, and note down the remainders.`;

            step1Header.appendChild(step1No);
            step1Header.appendChild(step1Title);
            step1.appendChild(step1Header);

            let step1Body = document.createElement("div");
            step1Body.classList.add("step-body");

            let divTable1 = document.createElement("div");
            divTable1.classList.add("div-table");

            let col1 = document.createElement("div");
            let col2 = document.createElement("div");
            let col3 = document.createElement("div");
            col1.classList.add("div-table-col");
            col2.classList.add("div-table-col");
            col2.classList.add("brd");
            col3.classList.add("div-table-col");
            col3.classList.add("brd");

            let q = BigInt(n);
            let r,
                res = [];
            let di = 16n;
            while (q) {
                r = q % di;

                let c1 = document.createElement("div");
                c1.classList.add("div-table-cell");
                c1.textContent = "8";

                let c2 = document.createElement("div");
                c2.classList.add("div-table-cell");
                c2.textContent = q;

                let c3 = document.createElement("div");
                c3.classList.add("div-table-cell");
                c3.textContent = r;

                col1.appendChild(c1);
                col2.appendChild(c2);
                col3.appendChild(c3);

                q /= di;
                res.push(hexDef1[r.toString()]);
            }
            let result = res.reverse();

            let zeroDiv = document.createElement("div");
            zeroDiv.textContent = "0";
            col2.appendChild(zeroDiv);

            divTable1.appendChild(col1);
            divTable1.appendChild(col2);
            divTable1.appendChild(col3);

            let arrhead = document.createElement("div");
            arrhead.classList.add("arrhead");
            let arrtail = document.createElement("div");
            arrtail.classList.add("arrtail");
            let col4 = document.createElement("div");
            // col4.style.backgroundImage = "url(./images/arrow.svg)";
            col4.classList.add("arrow");
            col4.appendChild(arrhead);
            col4.appendChild(arrtail);

            divTable1.appendChild(col4);

            step1Body.appendChild(divTable1);
            step1.appendChild(step1Body);
            explcontent.appendChild(step1);

            let step2 = document.createElement("div");
            step2.classList.add("step");

            let step2Header = document.createElement("div");
            step2Header.classList.add("step-header");

            let step2No = document.createElement("div");
            step2No.classList.add("stepno");
            step2No.textContent = "2)";

            let step2Title = document.createElement("div");
            step2Title.classList.add("step-title");
            step2Title.textContent = "Write the remainders as directed by the arrow.";

            step2Header.appendChild(step2No);
            step2Header.appendChild(step2Title);
            step2.appendChild(step2Header);

            let step2Body = document.createElement("div");
            step2Body.classList.add("step-body");

            let remtable = document.createElement("div");
            remtable.classList.add("remtable");

            let arrright = document.createElement("div");
            arrright.classList.add("arrright");

            let arrrighttail = document.createElement("div");
            arrrighttail.classList.add("arrrighttail");
            let arrrighthead = document.createElement("div");
            arrrighthead.classList.add("arrrighthead");

            arrright.appendChild(arrrighttail);
            arrright.appendChild(arrrighthead);

            remtable.appendChild(arrright);

            let rems = document.createElement("div");
            rems.classList.add("rems");

            result.forEach((rem) => {
                let remi = document.createElement("div");
                remi.textContent = rem;
                rems.appendChild(remi);
            });

            remtable.appendChild(rems);

            step2Body.appendChild(remtable);

            step2.appendChild(step2Body);
            explcontent.appendChild(step2);

            let step3 = document.createElement("div");
            step3.classList.add("step");

            let step3Header = document.createElement("div");
            step3Header.classList.add("step-header");

            let step3No = document.createElement("div");
            step3No.classList.add("stepno");
            step3No.textContent = "3)";

            let step3Title = document.createElement("div");
            step3Title.classList.add("step-title");
            step3Title.textContent = "And it's done!";

            step3Header.appendChild(step3No);
            step3Header.appendChild(step3Title);
            step3.appendChild(step3Header);

            let step3Body = document.createElement("div");
            step3Body.classList.add("step-body");

            let resultDiv = document.createElement("div");
            resultDiv.classList.add("resdiv");

            let popen = document.createElement("div");
            popen.textContent = "(";

            let decnum = document.createElement("div");
            decnum.textContent = n;

            let pclose = document.createElement("div");
            pclose.textContent = ")";

            let b = document.createElement("sub");
            b.textContent = "10";

            pclose.appendChild(b);

            resultDiv.appendChild(popen);
            resultDiv.appendChild(decnum);
            resultDiv.appendChild(pclose);

            let eq = document.createElement("div");
            eq.textContent = "=";

            resultDiv.appendChild(eq);

            popen = document.createElement("div");
            popen.textContent = "(";

            let binnum = document.createElement("div");
            binnum.textContent = result.join("");

            pclose = document.createElement("div");
            pclose.textContent = ")";

            resultDiv.appendChild(popen);
            resultDiv.appendChild(binnum);

            b = document.createElement("sub");
            b.textContent = "16";

            pclose.appendChild(b);

            resultDiv.appendChild(pclose);

            step3Body.appendChild(resultDiv);
            step3.appendChild(step3Body);
            explcontent.appendChild(step3);
        },
    },
    bin: {
        oct: (n) => {
            expltitle.replaceChildren();
            explcontent.replaceChildren();
            expltitle.textContent = `Represent (${n})`;
            let bas = document.createElement("sub");
            bas.textContent = "2";
            expltitle.appendChild(bas)
            expltitle.appendChild(document.createTextNode(" in Octal."));

            let step1 = document.createElement("div");
            step1.classList.add("step");

            let step1Header = document.createElement("div");
            step1Header.classList.add("step-header");

            let step1No = document.createElement("div");
            step1No.classList.add("stepno");
            step1No.textContent = "1)";

            let step1Title = document.createElement("div");
            step1Title.classList.add("step-title");
            step1Title.textContent = `Divide ${n} into groups of three starting from the right. (Also add zeros to the left as needed; to fill the group.)`;

            step1Header.appendChild(step1No);
            step1Header.appendChild(step1Title);
            step1.appendChild(step1Header);

            let step1Body = document.createElement("div");
            step1Body.classList.add("step-body");

            let chunktable = document.createElement("div");
            chunktable.classList.add('chunktable')

            chunk(n, 3).forEach(c=> {
                let chunkdiv = document.createElement("div");
                chunkdiv.textContent = c
                chunktable.appendChild(chunkdiv)
            })

            step1Body.appendChild(chunktable)

            step1.appendChild(step1Body)

            explcontent.appendChild(step1)

            let step2 = document.createElement("div");
            step2.classList.add("step");

            let step2Header = document.createElement("div");
            step2Header.classList.add("step-header");

            let step2No = document.createElement("div");
            step2No.classList.add("stepno");
            step2No.textContent = "2)";

            let step2Title = document.createElement("div");
            step2Title.classList.add("step-title");
            step2Title.textContent = ``;

            step2Header.appendChild(step2No);
            step2Header.appendChild(step2Title);
            step2.appendChild(step2Header);

            let step2Body = document.createElement("div");
            step2Body.classList.add("step-body");

            chunktable = document.createElement("div");
            chunktable.classList.add('chunktable')

            chunk(n, 3).forEach(c=> {
                let chunkdiv = document.createElement("div");
                chunkdiv.textContent = c
                chunktable.appendChild(chunkdiv)
            })

            step2Body.appendChild(chunktable)

            step2.appendChild(step2Body)

            explcontent.appendChild(step2)
        }
    }
};

expls.bin.oct('10101101011110')