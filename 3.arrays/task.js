function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
   
    let result1 = users.filter(function (item) {return item.gender === gender});
  
    let sum = 0;
    let result = (result1.length < 1) ? 0 : (result1.reduce((accamulator, item) => accamulator + item.age, sum)) / result1.length;
  console.log(`result1.length = ${result1.length}
 result = ${result} \n\n`);
    
  return result;
    
}