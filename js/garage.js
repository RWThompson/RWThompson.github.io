let car = {
    regNo: "",
    make: "",
    model: "",
    colour: "",
    year: 0,
    numFaults: 0
};
let cList = [];

function checkCarIn() {
    car = (document.getElementById('regNoIn').value, document.getElementById('makeIn').value, document.getElementById('modIn').value, document.getElementById('colIn').value, document.getElementById('yrIn').value, document.getElementById('faultIn').value);
    let index = cList.length - 1;
    cList[index] = car;
    console.log(cList[0].regNo);
}

function checkCarOut() {
    for (let i = 0; i < cList.length; i++) {
        if (cList[i].regNo === document.getElementById('regNoOut')) {
            cList.splice(cList[i], 1);
        }
    }
}

function outputGarage() {
    for (let i = 0; i < cList.length; i++) {
        let output = document.createElement("h3");
        output.textContent = (`${cList[i].regNo}, ${cList[i].make}, ${cList[i].model}, ${cList[i].colour}, ${cList[i].year}, ${cList[i].numFaults}`)
        let d = document.getElementById('out');
        d.appendChild(output);
    }
}

function calcBill() {
    for (let i = 0; i < cList.length; i++) {
        if (document.getElementById('regNoBill') === cList[i].regNo) {
            let total = ((cList[i].year / 100) + (cList[i].numFaults * 20));
            let billOut = document.createElement("h3");
            let d = document.getElementById('bill');
            d.appendChild(billOut);
        }
    }
}