let cList = [];
let gList = [];
var car = {};

function createCar() {
    car = {
        regNo: document.getElementById('regNo').value,
        make: document.getElementById('make').value,
        year: document.getElementById('yr').value,
        numFaults: document.getElementById('fault').value
    }
    let index = cList.length;
    cList[index] = car;
}

function checkCarIn() {
    for (let i = 0; i < cList.length; i++) {
        if (cList[i].regNo === document.getElementById('regNoIn').value) {
            gList[gList.length] = cList[i];
        }
    }
}

function checkCarOut() {
    for (let i = 0; i < gList.length; i++) {
        if (gList[i].regNo === document.getElementById('regNoOut').value) {
            gList.splice(gList[i], 1);
        }
    }
}

function outputGarage() {
    let d = document.getElementById('out');
    for (let i = 0; i < gList.length; i++) {
        let output = document.createElement("h3");
        output.textContent = (`${i + 1}) REG: ${gList[i].regNo}, MAKE: ${gList[i].make}, YEAR: ${gList[i].year}, NUMBER OF FAULTS: ${gList[i].numFaults}`);
        d.appendChild(output);
    }
    let barrier = document.createElement("h3");
    barrier.textContent = "----------------------------------------";
    d.appendChild(barrier);
}

function calcBill() {
    let total = 0;
    let r = "[REG NO]";
    for (let i = 0; i < gList.length; i++) {
        if (gList[i].regNo === document.getElementById('regNoBill').value) {
            total = ((gList[i].year) / 100 + (gList[i].numFaults) * 20);
            r = gList[i].regNo;
            let billOut = document.createElement("h3");
            let d = document.getElementById('bill');
            billOut.textContent = (`TOTAL PRICE FOR ${r}: ${total}`);
            d.appendChild(billOut);
        } else {
            let billOut = document.createElement("h3");
            let d = document.getElementById('bill');
            billOut.textContent = (`Could not find a car matching the registration number provided`);
            d.appendChild(billOut);
        }
    }

}

function runAdminCommand() {
    /*create car
    check car in command
    check car out
    output garage
    calculate bill*/
    let input = document.getElementById('adminInput').value;
    let list = document.createElement("ul");
    let d = document.getElementById('adminUI');

    if (input.includes("create")) {

    } else if (input.includes("output")) {
        for (let i = 0; i < gList.length; i++) {
            let item = document.createElement("li");
            item.textContent = (`${i + 1}) REG: ${gList[i].regNo}, MAKE: ${gList[i].make}, YEAR: ${gList[i].year}, NUMBER OF FAULTS: ${gList[i].numFaults}`);
            list.appendChild(item);
            d.appendChild(list);
        }
    } else if (input.includes("check in")) {

    } else if (input.includes("check out")) {

    } else if (input.includes("calculate")) {
        let delim = input.split(" ");
        let reg = delim[1];
        let year = 0;
        let faults = 0;
        let total = 0;
        for (let i = 0; i < gList.length; i++) {
            if (gList[i].regNo == reg) {
                year = gList[i].year;
                faults = gList[i].faults;
            }
        }
        let item = document.createElement("li");
        item.textContent = total;
        list.appendChild(item);
        d.appendChild(list);
    } else {
        let item = document.createElement("li");
        item.textContent = "Please enter a valid command";
        list.appendChild(item);
        d.appendChild(list);
    }
    //d.appendChild(list);
}