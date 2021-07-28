// function makeTextFile(text) {
//     // if (textFile !== null) {
//     //     window.URL.revokeObjectURL(textFile);
//     // }
//     var data = new Blob([text], { type: "text/plain" });
//     let textFile = window.URL.createObjectURL(data);
//     let a = document.createElement("a");
//     a.download = true;
//     a.href = textFile;
//     a.click();
// }

// let header = [
//     "SR No.",
//     "Student's name",
//     "Father's name",
//     "Mother's name",
//     "Reg No.",
//     "Student SR",
//     "DOB",
//     "Admission Date",
//     "Father/Mother name as per aadhar",
//     "IFSC",
//     "Name of Bank",
//     "Name of Branch",
//     "Branch Address",
//     "Acc Holder name",
//     "Acc No.",
//     "Acc holder mobile",
//     "same family member",
//     "aadhar availability",
//     "student availabilty",
//     "Address",
//     "forwarded amt",
//     "rice",
//     "wheat",
// ];

function dld(n) {
    f = [];
    for (i = 0; i < n; i++) {
        let tr = document.querySelector(`#showColor_${i}`);
        f.push([
            tr.querySelectorAll("td")[1].innerText,
            tr.querySelector(`#Person_Name_${i}`).value,
            tr.querySelector(`#PersonFname_${i}`).value,
            tr.querySelector(`#PersonMname_${i}`).value,
            tr.querySelector(`#PersonRegNo_${i}`).innerText,
            tr.querySelector(`#SRNumber_${i}`).value,
            tr.querySelector(`#Stu_DateOfbirth_${i}`).value,
            tr.querySelector(`#StudentAdmissionDate_${i}`).value,
            tr.querySelector(`#Father_OR_Mother_Name_As_Per_StudentAdhaar_${i}`)
                .value,
            tr.querySelector(`#IfscNo_${i}`).value,
            tr.querySelector(`#BANK_Name_${i}`).value,
            '"' + tr.querySelector(`#BRANCH_${i}`).value + '"',
            '"' + tr.querySelector(`#ADDRESS_${i}`).value + '"',
            tr.querySelector(`#ACHolderName_${i}`).value,
            tr.querySelector(`#Acount_Number_${i}`).value,
            tr.querySelector(`#MobileNo_${i}`).value,
            tr.querySelector(`#SameFamilyMember_${i}`).value,
            tr.querySelector(`#AdhaarAvaiabile_${i}`).value,
            tr.querySelector(`#StudentAvilableOrNot_${i}`).value,
            '"' + tr.querySelector(`#AddressForExcel_${i}`).value + '"',
            tr.querySelector(`#Cooking_Cost_${i}`).value,
            tr.querySelector(`#Rise_In_Kg_${i}`).value,
            tr.querySelector(`#Wheat_In_Kg_${i}`).value,
        ]);
    }
    resstr =
        "SR No,Student name,Father name,Mother name,Reg No,Student SR,DOB,Admission Date,Father Mother name as per aadhar,IFSC,Name of Bank,Name of Branch,Branch Address,Acc Holder name,Acc No,Acc holder mobile,same family member,aadhar availability,student availabilty,Address,forwarded amt,rice,wheat\n";
    f.forEach((w) => {
        resstr += w.join(",") + "\n";
    });
    var data = new Blob([resstr], { type: "text/csv" });
    let textFile = window.URL.createObjectURL(data);
    let a = document.createElement("a");
    a.download =
        Array.from(document.getElementById("ddlPsClass").children).filter(
            (o) => o.selected
        )[0].innerText + ".csv";
    a.href = textFile;
    a.click();
}

function g(n) {
    f = [];
    for (i = 0; i < n; i++) {
        dk = document.querySelector(`#showColor_${i}`);
        dk.querySelector(`#Chkinput_${i}`).click();
        w = dk.querySelector(`#AddressForExcel_${i}`);
        xs = dk.querySelector(`#SRNumber_${i}`);
        if (xs.value < 120) xs.value = parseInt(xs.value) + 1510;
        if (w.value.startsWith("BHOJ")) {
            w.value =
                "BHOJPUR, H/O DALLUKHEDA, PO- BHITAULI KALA, TEH- NAWABGANJ, BBK";
        } else if (w.value.startsWith("DALLU")) {
            w.value = "DALLUKHEDA, PO- BHITAULI KALA, TEH- NAWABGANJ, BBK";
        } else if (w.value.startsWith("BANDIK")) {
            w.value =
                "BANDIK PURVA, H/O TINDHWANI, PO- BARAULI JATA, TEH- NAWABGANJ, BBK";
        } else if (w.value.startsWith("KAITHI")) {
            w.value =
                "KAITHI, H/O TINDHWANI, PO- BARAULI JATA, TEH- NAWABGANJ, BBK";
        }
    }
}
