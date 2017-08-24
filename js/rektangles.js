function rektangles() {
    let inp = document.getElementById('input').value;
    let delim = inp.split(" ");
    let word = delim[0];
    let width = delim[1];
    let length = delim[2];

    let chars = word.length;
    let out = document.getElementById('output');

    // let line1 = (word.charAt(0) + "\t" + word.charAt(1) + "\t" + word.charAt(2) + "\t" + word.charAt(3));
    // let line2 = (word.charAt(1) + "\t" + "\t" + "\t" + word.charAt(2));
    // let line3 = (word.charAt(2) + "\t" + "\t" + "\t" + word.charAt(1));
    // let line4 = (word.charAt(3) + "\t" + word.charAt(2) + "\t" + word.charAt(1) + "\t" + word.charAt(0));
    // console.log(line1);
    // console.log(line2);
    // console.log(line3);
    // console.log(line4);
    let loop = ((width * chars) - width);
    let loopCounter = 0;
    console.log(loop);
    let count = 0;
    // do {
    //     if (count === 0) {
    //         for (let i = 0; i < chars; i++) {
    //             out.append(word.charAt(i) + "\t");
    //             count++;  
    //         }
    //         out.append("\n");
    //     } else if (count === chars - 1) {
    //         count -= 1;
    //         for (let j = (chars - 2); j >= 0; j--) {
    //             out.append(word.charAt(j) + "\t");
    //             count--;
    //         }
    //         out.append("\n");
    //     }
    // } while (loopCounter < loop);

    //for (let loopCounter = 0; loopCounter < loop; loopCounter++) {
    do {
        if (loopCounter === 0) {
            for (let i = 0; i < chars; i++) {
                out.append(word.charAt(i) + "\t");
                loopCounter++;
            }
        } else if (loopCounter === 3) {
            for (let i = (chars - 2); i >= 0; i--) {
                out.append(word.charAt(i) + "\t");
                loopCounter++;
            }
        } else if (loopCounter % 2 === 0) {
            for (let i = 0; i < chars; i++) {
                out.append(word.charAt(i) + "\t");
                loopCounter++;
            }
        } else if (loopCounter % 2 === 1) {
            for (let i = (chars - 2); i >= 0; i--) {
                out.append(word.charAt(i) + "\t");
                loopCounter++;
            }
        }
    } while (loopCounter < loop);

    // for (let i = 0; i < loop; i++) {
    //     if (count < chars) {
    //         out.append(word.charAt(i) + "\t");
    //         count++;
    //     } else if (i >= chars) {

    //     }

    //     //console.log(word.charAt(i) + "\t");
    // }
}