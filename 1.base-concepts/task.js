"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let dis = b ** 2 - 4 * a * c;
  console.log(`dis=${dis}`);

  if (dis === 0) {
    let root = -b/(2*a);
    arr.push(root);
    }
    else if (dis > 0) {
      let root = (-b + Math.sqrt(dis) )/(2*a);
      let secondRoot = (-b - Math.sqrt(dis)) / (2* a);
      arr[0] = root;
      arr[1] = secondRoot;
  }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true) {
    console.log('Проценты введены неверно')
  };
  if (isNaN(contribution) === true) {
    console.log('Первоначальный взнос введён неверно')
  };
  if (isNaN(amount) === true) {
    console.log('Размер кредита введён неверно')
  };
  if (isNaN(countMonths) === true) {
    console.log('Количество месяцев введено неверно')
  };

  
  let percentPerMonth = (percent/100)/12;
// console.log(`проценты за месяц = ${percentPerMonth}`)
  
  let creditBody = amount - contribution;
// console.log(`тело кредита = ${creditBody}`)
  
  let monthlyPayment = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  // console.log(`ежемесячный платёж = ${monthlyPayment}`)
  
  let wholeCreditSum = (monthlyPayment * countMonths).toFixed(2);
  // console.log(`wholeCreditSum = ${wholeCreditSum}`)
  return wholeCreditSum;
}

calculateTotalMortgage();