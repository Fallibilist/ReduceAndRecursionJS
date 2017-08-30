console.log("The largest number in the array 1,2,33,4,5 is " + [1, 2, 33, 4, 5].reduce((previous, current) => previous > current ? previous : current))

let arrayToSort = [1, 2, 33, 4, 5, 9, 12, 23, 14, 38, 44, 36]

console.log("The sorted version of the array "+ arrayToSort + " is " + arrayToSort.reduce(
  (resultArray, numberToInsert) => {
    if(resultArray.length === 0) {
      resultArray.push(numberToInsert)
    } else {
      let numberInserted = false
      resultArray = resultArray.reduce(
        (reorderedArray, numberToCheck, indexOfReorderedArray) => {
          if(numberInserted) {
            reorderedArray.push(numberToCheck)
          } else {
            if(numberToCheck > numberToInsert) {
              reorderedArray.push(numberToCheck)
              if (indexOfReorderedArray === (resultArray.length - 1)) {
                reorderedArray.push(numberToInsert)
              }
            } else {
              reorderedArray.push(numberToInsert)
              reorderedArray.push(numberToCheck)
              numberInserted = true
            }
          }
          indexOfReorderedArray++
          return reorderedArray
        }, []
      )
    }
    return resultArray
  }, []
))
