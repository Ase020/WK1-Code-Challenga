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

console.log(speedDetector(164));
