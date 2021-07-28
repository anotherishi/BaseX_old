const errorWindow = document.getElementById("error");
// const expl = document.getElementById("expl");
// const explt = document.getElementById("expl-title");
// const explc = document.getElementById("expl-content");

const charactersAllowed = {
    binary: "01",
    octal: "01234567",
    decimal: "0123456789",
    hexaDecimal: "0123456789abcdefABCDEF",
};

let timeout;

let inputs = [];
Object.keys(charactersAllowed).forEach((base) => {
    inputs.push(document.getElementById(base));
});

inputs.forEach((input) => {
    input.value = "0";

    input.parentElement.querySelector('.copy').onclick = () => {
        input.select();
        document.execCommand("copy");
    }

    input.onfocus = () => {
        input.parentElement
            .querySelector(".explain")
            .setAttribute("hidden", "true");
    };
    input.onblur = () => {
        input.parentElement.querySelector(".explain").removeAttribute("hidden");
    };

    input.oninput = (inputEvent) => {
        console.log(inputEvent);
        let character = inputEvent.data;
        let cursorPosition = inputEvent.target.selectionStart;
        let data = input.value;

        if (
            charactersAllowed[input.id].includes(character) ||
            inputEvent.inputType === "deleteContentBackward" ||
            inputEvent.inputType === "deleteContentForward"
        ) {
            if (data.startsWith("0")) input.value = removeLeadingZeros(data);
            remove(inputs, input).forEach((el) => {
                el.value = window[input.id][el.id](data);
            });
        } else {
            clearTimeout(timeout);
            errorWindow.style.opacity = "1";
            errorWindow.textContent = character + " is not allowed";
            timeout = setTimeout(() => {
                errorWindow.style.opacity = "0";
                errorWindow.textContent = "";
            }, 1000);
            if (character) {
                input.value = input.value.replaceAll(character, "");
                inputEvent.target.setSelectionRange(
                    cursorPosition - 1,
                    cursorPosition - 1
                );
            }
        }

        if (data === "" || data === "0") {
            inputs.forEach((input) => {
                input.value = "0";
            });
            inputEvent.target.setSelectionRange(1, 1);
        }
    };
});

// conversion functions

// const decimal = {
//     binary: (number) => {
//         let explData = `<h3>Convert (${number})<sub>10</sub> to binary</h3>`;
//         explData +=
//             '<h4>Step 1:</h4> Repeatedly divide the number by 2 and note down remainders till the dividend becomes 0 <br><table border="1" >';
//         let quotient = BigInt(number);
//         let divisor = 2n;
//         let result = [];
//         let remainder;
//         while (quotient) {
//             remainder = quotient % divisor;
//             explData += `<tr><td>2</td> <td>${quotient}</td> <td>${remainder}</td></tr>`;
//             quotient = quotient / divisor;
//             result.push(remainder.toString());
//         }
//         explData +=
//             '<tr><td></td><td>0</td><td></td></tr></table> <img src="./images/arrow.svg">';
//         expl.innerHTML = explData;
//         return result.reverse().join("");
//     },
// };