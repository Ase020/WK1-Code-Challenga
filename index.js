// Challenge 1: Student Grade Generator
function gradeGenerator(grade) {
   if (grade <= 100 && grade >= 0) {
      if (grade > 79) {
         return "Grade: A";
      } else if (grade >= 60 && grade < 79) {
         return "Grade: B";
      } else if (grade >= 49 && grade <= 59) {
         return "Grade: C";
      } else if (grade >= 40 && grade < 49) {
         return "Grade: D";
      } else {
         //  console.log(grade);
         return "Grade: E";
      }
   } else {
      console.log("Input number between 0-100");
   }
}
// gradeGenerator(23);

// Challenge 2: Speed Detector
function speedDetector(speed) {
   let points = 0;
   if (speed > 70) {
      points = Math.floor((speed - 70) / 5);
      //   console.log(`Points: ${points}`);
      if (points > 12) {
         return "License suspended";
      }
      return `Points: ${points}`;
   } else {
      //   console.log("Ok");
      return "Ok";
   }
}
speedDetector(164);

// Challenge 3: Net Salary Calculator
function salaryCalculator(basicPay, benefits) {
   const grossPay = basicPay + benefits;
   const nssfOldRates = 200;
   const pension = 0.06 * grossPay;
   //    Calculates the taxable Income
   const taxableIncome = grossPay - (nssfOldRates + pension);

   //    tax relief calculator
   const taxReliefCalculator = (taxableIncome) => {
      if (taxableIncome < 24000) {
         return (taxRelief = 0);
      } else {
         return (taxRelief = 2400);
      }
   };

   //    Payroll parameters
   const taxReliefConst = taxReliefCalculator(taxableIncome);
   const taxPayableConst = taxCalculator(taxableIncome);
   const nhifConst = nhifCalculator(grossPay);
   const netPay = grossPay - nssfOldRates - pension - (taxPayableConst - taxReliefConst) - nhifConst;

   console.log(`Gross pay: ${grossPay}`);
   console.log(`NSSF: ${nssfOldRates}`);
   console.log(`Pension: ${pension}`);
   //    taxCalculator(grossPay, nssfOldRates, pension);

   return `Gross Salary: Ksh ${grossPay}, NSSF: Ksh ${nssfOldRates}, Pension: Ksh ${pension}, Tax payable: Ksh ${taxPayableConst}, Tax Relief: Ksh ${taxReliefConst}, NHIF: Ksh ${nhifConst}, Net Pay: Ksh ${netPay.toLocaleString()}`;
}

// Gross Salary calculator
function taxCalculator(taxableIncome) {
   if (taxableIncome >= 24000) {
      let taxBracket1;
      let taxBracket2;
      let taxBracket3;
      let taxPayable;
      if (taxableIncome < 24001) {
         taxBracket1 = 0.1 * taxableIncome;
         taxPayable = Math.round(taxBracket1);
         //  console.log(`tax payable: ${taxPayable}`);
         return taxPayable;
      } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
         taxBracket1 = 0.1 * 24000;
         taxBracket2 = 0.25 * (taxableIncome - 24000);
         taxPayable = Math.round(taxBracket1 + taxBracket2);
         //  console.log(`tax payable: ${taxPayable}`);
         return taxPayable;
      } else if (taxableIncome > 32333) {
         taxBracket1 = 0.1 * 24000;
         taxBracket2 = 0.25 * (32333 - 24000);
         taxBracket3 = 0.3 * (taxableIncome - 32333);
         taxPayable = Math.round(taxBracket1 + taxBracket2 + taxBracket3);
         //  console.log(`tax payable: ${taxPayable}`);
         return taxPayable;
      }
   }
}

// console.log(taxCalculator(65450, 200, 3927));

// NHIF Calculator
function nhifCalculator(grossPay) {
   let nhifRate;
   if (grossPay <= 5999) {
      nhifRate = 150;
      return nhifRate;
   } else if (grossPay >= 6000 && grossPay <= 7999) {
      nhifRate = 300;
      return nhifRate;
   } else if (grossPay >= 8000 && grossPay <= 11999) {
      nhifRate = 400;
      return nhifRate;
   } else if (grossPay >= 12000 && grossPay <= 14999) {
      nhifRate = 500;
      return nhifRate;
   } else if (grossPay >= 15000 && grossPay <= 19999) {
      nhifRate = 600;
      return nhifRate;
   } else if (grossPay >= 20000 && grossPay <= 24999) {
      nhifRate = 750;
      return nhifRate;
   } else if (grossPay >= 25000 && grossPay <= 29999) {
      nhifRate = 850;
      return nhifRate;
   } else if (grossPay >= 30000 && grossPay <= 34999) {
      nhifRate = 900;
      return nhifRate;
   } else if (grossPay >= 35000 && grossPay <= 34999) {
      nhifRate = 950;
      return nhifRate;
   } else if (grossPay >= 40000 && grossPay <= 44999) {
      nhifRate = 1000;
      return nhifRate;
   } else if (grossPay >= 45000 && grossPay <= 49999) {
      nhifRate = 1100;
      return nhifRate;
   } else if (grossPay >= 50000 && grossPay <= 59999) {
      nhifRate = 1200;
      return nhifRate;
   } else if (grossPay >= 60000 && grossPay <= 69999) {
      nhifRate = 1300;
      return nhifRate;
   } else if (grossPay >= 70000 && grossPay <= 79999) {
      nhifRate = 1400;
      return nhifRate;
   } else if (grossPay >= 80000 && grossPay <= 89999) {
      nhifRate = 1500;
      return nhifRate;
   } else if (grossPay >= 90000 && grossPay <= 99999) {
      nhifRate = 1600;
      return nhifRate;
   } else if (grossPay >= 100000) {
      nhifRate = 1700;
      return nhifRate;
   }
}

console.log(salaryCalculator(95000, 5000));
