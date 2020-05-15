//https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
 grades.forEach((grade, index, arr)=>{
      if(grade>=38 && grade%5>=3){
          arr[index] = grade+5-grade%5
         } 
  })
return grades
}

