// GENERIC FORMATTING AND CALCULATION FUNCTIONS
//     - arrayToObjArr             -  (headersArr, valuesArr)  --->  Array of Objects
//     - arrayToObj                -  (headersArr, valuesArr)  --->  Object
//     - objArrToArray             -  (objArr)  --->  [headersArr, valuesArr]
//     - sumArrayValues            -  (valuesArr)  --->  Sum of values
//     - weightedMean              -  (factorsArray, weightsArray)  --->  Weighted Average
//     - sumObjValue               -  (objArr, key)  --->  Sum of values based on key
//     - compareTwoArrays          -  (arr1,arr2)  --->  true/false if arrays have common element
//
  function arrayToObjArr({headers, array}:{headers:string[],array:string[][]}) {
    let output = {}
    array.forEach((item, index) => {
      const obj = item.reduce((obj, value, index) => {
        obj[headers[index]] = value
        return obj
      }, {})
      output[index + 1] = obj
    })
    return Object.entries(output).map(a => a[1])
  }
  function objArrToArray(obj:{}[]) {
    let output:number[][] = []
    const itemList = Object.keys(obj)
    itemList.forEach((item:string) => {
      output.push(Object.values(obj[item]) as number[])
    })
    return output
  }
  function sumArrayValues(values:number[]) {
    return values.reduce((p,c) => p += +c, 0)
  }
  function weightedMean({factorsArray, weightsArray}:{factorsArray:number[], weightsArray:number[]}) {
    return sumArrayValues(factorsArray.map((factor, index) => factor * weightsArray[index])) / sumArrayValues(weightsArray)
  }
  function sumObjValue({objArr, key}:{objArr:{}[], key:string}) {
    let sum = 0;
    for (let i = 0; i < objArr.length; i++) {
      sum += +objArr[i][key];
    }
    return sum;
  }
  function compareTwoArrays({arr1,arr2}:{arr1:number[],arr2:number[]}) {
    let output = false
    arr1.forEach(item => {
      if (arr2.includes(item)) {
        output = true
      }
    })
    return output
  }
//