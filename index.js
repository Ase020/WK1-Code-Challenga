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

gradeGenerator(23);
