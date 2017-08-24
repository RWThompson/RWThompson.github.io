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
            gList.splice(i, 1);
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
    let input = document.getElementById('adminInput').value;
    let terminal = document.getElementById('adminOutput');

    if (input.includes("create")) {
        let delim = input.split(" ");
        car = {
            regNo: delim[2],
            make: delim[1],
            year: delim[3],
            numFaults: delim[4],
        };
        let index = cList.length;
        cList[index] = car;
        terminal.append("Car with registration number " + delim[2] + " created" + "\n");
    } else if (input.includes("output")) {
        for (let i = 0; i < gList.length; i++) {
            terminal.append((i + 1) + ") REG: " + gList[i].regNo + ", MAKE: " + gList[i].make + ", YEAR: " + gList[i].year + ", NUMBER OF FAULTS: " + gList[i].numFaults + "\n");
        }
    } else if (input.includes("check in")) {
        let delim = input.split(" ");
        for (let i = 0; i < cList.length; i++) {
            if (cList[i].regNo === delim[2]) {
                gList[gList.length] = cList[i];
            }
        }
        terminal.append("Car with registration number " + delim[2] + " has been checked in" + "\n");
    } else if (input.includes("check out")) {
        let delim = input.split(" ");
        for (let i = 0; i < gList.length; i++) {
            if (gList[i].regNo === delim[2]) {
                gList.splice(i, 1);
            }
        }
        terminal.append("Car with registration number " + delim[2] + " has been checked out" + "\n");
    } else if (input.includes("calculate")) {
        let delim = input.split(" ");
        let total = 0;
        for (let i = 0; i < gList.length; i++) {
            if (gList[i].regNo === delim[1]) {
                let year = parseInt(gList[i].year);
                let faults = parseInt(gList[i].numFaults);
                total = ((year / 100) + (faults * 20));
                terminal.append("Total for " + delim[1] + " is " + total + "\n");
            }
        }
    } else {
        terminal.append("Please enter a valid command" + "\n");
    }
}