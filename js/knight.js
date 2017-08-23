pointMaker = function (x, y) {
    let pt = {};
    pt.x = x;
    pt.y = y;
    return pt;
};

// const v1 = pointMaker(1, 2);
// const v2 = pointMaker(1, -2);
// const v3 = pointMaker(-1, -2);
// const v4 = pointMaker(-1, 2);
// const v5 = pointMaker(-2, -1);
// const v6 = pointMaker(-2, 1);
// const v7 = pointMaker(2, 1);
// const v8 = pointMaker(2, -1);

//EXPECT 5 ""
// const start = pointMaker(0, 0);

function tour() {
    let target = pointMaker(Number(document.getElementById('x').value), Number(document.getElementById('y').value));
    let count = 0;
    let tmp = target;
    let i = 1;
    console.log(JSON.stringify(tmp));
    do {
        if (tmp.x >= 2 && tmp.y >= 1 && tmp.x > tmp.y) { // BOTH POS
            tmp.x -= 2;
            tmp.y -= 1;
            count++;
            console.log("1st " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x >= 1 && tmp.y >= 2 && tmp.x < tmp.y) { // BOTH POS
            tmp.x -= 1;
            tmp.y -= 2;
            count++;
            console.log("2nd " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -1 && tmp.y <= -2 && tmp.x > tmp.y) { // BOTH NEG
            tmp.x += 1;
            tmp.y += 2;
            count++;
            console.log("3rd " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -2 && tmp.y <= -1 && tmp.x < tmp.y) { // BOTH NEG
            tmp.x += 2;
            tmp.y += 1;
            count++;
            console.log("4th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -1 && tmp.y >= 2 && tmp.x < tmp.y) { //X is NEG
            tmp.x += 1;
            tmp.y -= 2;
            count++;
            console.log("5th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -2 && tmp.y >= 1 && tmp.x < tmp.y) { //X is NEG
            tmp.x += 2;
            tmp.y -= 1;
            count++;
            console.log("6th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x >= 1 && tmp.y <= -2 && tmp.x > tmp.y) { //Y is NEG
            tmp.x -= 1;
            tmp.y += 2;
            count++;
            console.log("7th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x >= 2 && tmp.y <= -1 && tmp.x > tmp.y) { //Y is NEG
            tmp.x -= 2;
            tmp.y += 1;
            count++;
            console.log("8th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x === 0 && tmp.y >= 2) {
            tmp.x += 1;
            tmp.y -= 2;
            count++;
            console.log("9th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x === 0 && tmp.y >= 1) {
            tmp.x += 2;
            tmp.y -= 1;
            count++;
            console.log("10th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x === 0 && tmp.y <= -2) {
            tmp.x -= 1;
            tmp.y += 2;
            count++;
            console.log("11th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x === 0 && tmp.y <= -1) {
            tmp.x -= 2;
            tmp.y += 1;
            count++;
            console.log("12th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x >= 2 && tmp.y === 0) {
            tmp.x -= 2;
            tmp.y += 1;
            count++;
            console.log("13th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x >= 1 && tmp.y === 0) {
            tmp.x -= 1;
            tmp.y += 2;
            count++;
            console.log("14th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -2 && tmp.y === 0) {
            tmp.x += 2;
            tmp.y -= 1;
            count++;
            console.log("15th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if (tmp.x <= -1 && tmp.y === 0) {
            tmp.x -= 1;
            tmp.y -= 2;
            count++;
            console.log("16th " + count);
            console.log("Values :" + tmp.x + "," + tmp.y);
        } else if ((tmp.x === tmp.y) && (tmp.x !== 0) && (tmp.y !== 0)) {
            tmp.x -= 2;
            tmp.y -= 1;
            count++;
            console.log("end " + count);
        } else if (tmp.x === 0 && tmp.y === 0) {
            i = 0;
        }
    } while (i === 1);//(tmp.x !== 0) && (tmp.y !== 0));//
    alert("Solution: " + count);
    console.log("Solution: " + count);
}