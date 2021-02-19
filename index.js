let userInput = prompt('What is the first number?');
let secondUserInput = prompt('What is the other number?');
let FactorCalculator = (input) => {
  dividingNum = 1;
  factorArray = [];
  do{
    dividingNum = dividingNum + 1;
    if(input % dividingNum === 0) {
    do {
          input = input / dividingNum;
          factorArray.push(dividingNum);
      } while (input % dividingNum === 0)
    }
    } while (input !== 1)
    return factorArray; 
  };
    FirstArray = FactorCalculator(userInput);
    SecondArray = FactorCalculator(secondUserInput);
   let CommonArray = [];
  let len = FirstArray.length;
  let len2 = SecondArray.length;
    for (i = 0; i < len; i++) {
      for (j =0; j < len2; j++) {
        if(SecondArray[j] === FirstArray[i]) {
      CommonArray.push(FirstArray[i]);
      SecondArray.splice(j,1,1);
      FirstArray.splice(i,1,1)
    }; 
  };
};
let multiplier = (accumulator, currentValue) => accumulator * currentValue;
let MultipliedNumsArray = (Array1) => {
  let result = Array1.reduce(multiplier);
return result;
}; 
let multipliedUseInputs = userInput * secondUserInput;
if (CommonArray.length === 0) {
  console.log(`The LCM of ${userInput} and ${secondUserInput} is ${multipliedUseInputs}.`);
}else {
  let LCM = MultipliedNumsArray(FirstArray) *  MultipliedNumsArray(SecondArray) * MultipliedNumsArray(CommonArray);
console.log(`
The LCM of ${userInput} and ${secondUserInput} is ${LCM}.`);
};
