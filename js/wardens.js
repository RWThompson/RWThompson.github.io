// let warden = {
//     route: [],
//     gossip: 1,
// };

let warden0 = {
    route: [12, 23, 15, 2, 8, 20, 21, 3, 23, 3, 27, 20, 0],
    gossip: 1,
    pointer: 0
};
let warden1 = {
    route: [21, 14, 8, 20, 10, 0, 23, 3, 24, 23, 0, 19, 14, 12, 10, 9, 12, 12, 11, 6, 27, 5],
    gossip: 1,
    pointer: 0
};
let warden2 = {
    route: [8, 18, 27, 10, 11, 22, 29, 23, 14],
    gossip: 1,
    pointer: 0
};
let warden3 = {
    route: [13, 7, 14, 1, 9, 14, 16, 12, 0, 10, 13, 19, 16, 17],
    gossip: 1,
    pointer: 0
};
let warden4 = {
    route: [24, 25, 21, 4, 6, 19, 1, 3, 26, 11, 22, 28, 14, 14, 27, 7, 20, 8, 7, 4, 1, 8, 10, 18, 21],
    gossip: 1,
    pointer: 0
};
let warden5 = {
    route: [13, 20, 26, 22, 6, 5, 6, 23, 26, 2, 21, 16, 26, 24],
    gossip: 1,
    pointer: 0
};
let warden6 = {
    route: [6, 7, 17, 2, 22, 23, 21],
    gossip: 1,
    pointer: 0
};
let warden7 = {
    route: [23, 14, 22, 28, 10, 23, 7, 21, 3, 20, 24, 23, 8, 8, 21, 13, 15, 6, 9, 17, 27, 17, 13, 14],
    gossip: 1,
    pointer: 0
};
let warden8 = {
    route: [23, 13, 1, 15, 5, 16, 7, 26, 22, 29, 17, 3, 14, 16, 16, 18, 6, 10, 3, 14, 10, 17, 27, 25],
    gossip: 1,
    pointer: 0
};
let warden9 = {
    route: [25, 28, 5, 21, 8, 10, 27, 21, 23, 28, 7, 20, 6, 6, 9, 29, 27, 26, 24, 3, 12, 10, 21, 10, 12, 17],
    gossip: 1,
    pointer: 0
};
let warden10 = {
    route: [26, 22, 26, 13, 10, 19, 3, 15, 2, 3, 25, 29, 25, 19, 19, 24, 1, 26, 22, 10, 17, 19, 28, 11, 22, 2, 13],
    gossip: 1,
    pointer: 0
};
let warden11 = {
    route: [8, 4, 25, 15, 20, 9, 11, 3, 19],
    gossip: 1,
    pointer: 0
};
let warden12 = {
    route: [24, 29, 4, 17, 2, 0, 8, 19, 11, 28, 13, 4, 16, 5, 15, 25, 16, 5, 6, 1, 0, 19, 7, 4, 6],
    gossip: 1,
    pointer: 0
};
let warden13 = {
    route: [16, 25, 15, 17, 20, 27, 1, 11, 1, 18, 14, 23, 27, 25, 26, 17, 1],
    gossip: 1,
    pointer: 0
};

let warArr = [];

let stops = 0;

function allDone() {
    let count = 0;
    for (let i = 0; i < warArr.length; i++) {
        if (warArr[i].gossip === 14) {
            count++;
        }
    }
    return count;
}

function gossip() {
    warArr[0] = warden0;
    warArr[1] = warden1;
    warArr[2] = warden2;
    warArr[3] = warden3;
    warArr[4] = warden4;
    warArr[5] = warden5;
    warArr[6] = warden6;
    warArr[7] = warden7;
    warArr[8] = warden8;
    warArr[9] = warden9;
    warArr[10] = warden10;
    warArr[11] = warden11;
    warArr[12] = warden12;
    warArr[13] = warden13;

    console.log(warArr[0].route.length);
    console.log(warArr[1].route.length);
    console.log(warArr[2].route.length);
    console.log(warArr[3].route.length);
    console.log(warArr[4].route.length);
    console.log(warArr[5].route.length);
    console.log(warArr[6].route.length);
    console.log(warArr[7].route.length);
    console.log(warArr[8].route.length);
    console.log(warArr[9].route.length);
    console.log(warArr[10].route.length);
    console.log(warArr[11].route.length);
    console.log(warArr[12].route.length);
    console.log(warArr[13].route.length);

    do {
        for (let i = 0; i < warArr.length; i++) {
            if (warArr[i].pointer >= warArr[i].route.length) {
                warArr[i].pointer = 0;
            }
            for (let j = 1; j < 30; j++) {
                if (warArr[j].pointer >= warArr[j].route.length) {
                    warArr[i].pointer = 0;
                }
                console.log(typeof warArr[i].route[i]);
                console.log(typeof warArr[j].route[i]);
                let ind1 = warArr[i].pointer;
                let ind2 = warArr[j].pointer;
                if (warArr[i].route[ind1] === warArr[j].route[ind2]) {
                    if (warArr[i].gossip > warArr[j].gossip) {
                        warArr[j].gossip = warArr[i].gossip;
                        ind1++;
                        ind2++;
                    } else {
                        warArr[i].gossip = warArr[j].gossip;
                        ind1++;
                        ind2++;
                    }
                }
            }
        }
        let c = allDone();
    } while (c !== 14);

    // for (let i = 0; i < warArr.length; i++) {
    //     for (let j = 1; j < warArr[i]['route'].length - i; j++) {
    //         console.log(warArr[i]['route'][j]);
    //         console.log(typeof (warArr[i]['route'][j]));
    //         if (warArr[i]['route'][j] === warArr[i + 1]['route'][j]) { //breaks
    //             if (warArr[j]['gossip'] > warArr[j - 1]['gossip']) {
    //                 warArr[j - 1]['gossip'] = warArr[j]['gossip'];
    //                 stops++;
    //             } else {
    //                 warArr[j]['gossip'] = warArr[j - 1]['gossip'];
    //                 stops++;
    //             }
    //         }
    //     }
    // }
}

function run() {
    if (allDone() === 14) {
        console.log(stops);
    } else {
        gossip();
    }
}