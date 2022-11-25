// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => [arr[0], arr[1]];
// // const returnFirstTwoDrivers = function() {
// // return [arr[0], arr[1]]
// } 
 

const returnLastTwoDrivers = (arr) => arr.slice(-2);
// // const returnLastTwoDrivers = function (){
//     return [arr[0].length-1, arr[1].length -2]
// }


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (fare) {
        return fare * multiplier;
    }
}

function fareDoubler (fare) {
    return fare * 2;
}

function fareTripler (fare) {
    return fare * 3;

}

function selectDifferentDrivers (arrdrivers, firstorlast) {
    return firstorlast(arrdrivers)

}
// firstorlast - First 2 drivers & Last Two drivers
// arr