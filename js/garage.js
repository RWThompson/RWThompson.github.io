let cList = [];

function checkCarIn() {
    let car = {
        regNo: document.getElementById('regNoIn').value,
        make: document.getElementById('makeIn').value,
        model: document.getElementById('modIn').value,
        colour: document.getElementById('colIn').value,
        year: document.getElementById('yrIn').value,
        numFaults: document.getElementById('faultIn').value
    };
    let index = cList.length;
    cList[index] = car;
}

function checkCarOut() {
    for (let i = 0; i < cList.length; i++) {
        if (cList[i].regNo === document.getElementById('regNoOut').value) {
            cList.splice(cList[i], 1);
        }
    }
}

function outputGarage() {
    let d = document.getElementById('out');
    for (let i = 0; i < cList.length; i++) {
        let output = document.createElement("h3");
        output.textContent = (`${i + 1}) REG: ${cList[i].regNo}, MAKE: ${cList[i].make}, MODEL: ${cList[i].model}, COLOUR: ${cList[i].colour}, YEAR: ${cList[i].year}, NUMBER OF FAULTS: ${cList[i].numFaults}`);
        d.appendChild(output);
    }
    let barrier = document.createElement("h3");
    barrier.textContent = "========================================";
    d.appendChild(barrier);
}

function calcBill() {
    let total = 0;
    let r = "[REG NO]";
    for (let i = 0; i < cList.length; i++) {
        if (cList[i].regNo === document.getElementById('regNoBill').value) {
            total = ((cList[i].year) / 100 + (cList[i].numFaults) * 20);
            r = cList[i].regNo;
        }
    }
    let billOut = document.createElement("h3");
    let d = document.getElementById('bill');
    billOut.textContent = (`TOTAL PRICE FOR ${r}: ${total}`);
    d.appendChild(billOut);
}