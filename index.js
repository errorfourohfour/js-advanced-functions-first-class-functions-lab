// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const drivers2 = ['Char', 'Mike', 'Chad', 'Zach']
const returnFirstTwoDrivers = function (driversSelection){
    const a = driversSelection[0];
    const b = driversSelection[1];
    return [a,b]
    // const Freddy = 
    // return drivers[1,2]
}

const returnLastTwoDrivers = function () {
         let myArray = ['Sally', 'Bob', 'Freddy', 'Claudia'];
         return myArray.slice(-2)
     }
     
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
 function createFareMultiplier(integer){

     function fareMultiplier(fare){
     return integer*fare
 }
 return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, selectDemDrivers){
    return  selectDemDrivers(arrayOfDrivers)
}