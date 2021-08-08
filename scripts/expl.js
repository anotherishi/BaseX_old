let expltitle = document.getElementById("expl-title"),
    explcontent = document.getElementById("expl-content");

const expls = {
    dec: {
        bin: (n) => {
            explcontent.replaceChildren()
            expltitle.innerHTML = `Represent (${n})<sub>10</sub> in Binary.`;

            let step1 = document.createElement("div");
            step1.classList.add("step");

            let step1Header = document.createElement("div");
            step1Header.classList.add("step-header");

            let step1No = document.createElement("div");
            step1No.classList.add("stepno");
            step1No.textContent = "Step-1";

            let step1Title = document.createElement("div");
            step1Title.classList.add("step-title");
            step1Title.textContent = "Repeatedly divide the number by 2 and note down remainders till the dividend becomes 0";

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
        },
    },
};

expls.dec.bin('673')