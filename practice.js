/*

 */
let hz1 = 4;
let hz2 = 44;
function comparezprices (hz1, hz2) {
    let hz2islower = (hz2 < hz1);
    if (hz2islower) {
        console.log("hz2 is a bad dude")
    } else if (hz1 < hz2) {
        console.log("hz1 is a the bad dude")
    } else {
        console.log("they are both baaad!")
    }
}
comparezprices(26,89)