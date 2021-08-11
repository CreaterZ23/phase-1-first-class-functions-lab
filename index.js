// Code your solution in this file!

const returnFirstTwoDrivers = function(list = [sally, mark, jack, zeon]) {
    return list.slice(0, 2);
}

const returnLastTwoDrivers = function(newList = [marry, keefer, noah, paige]) {
    return newList.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }

}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (anArray = [tom, sarah, ashley], returnFirstTwoDrivers) => {

    return returnFirstTwoDrivers(anArray);
}