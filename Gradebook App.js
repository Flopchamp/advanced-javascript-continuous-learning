function getAverage(arr){
  let average = 0;
  let sum = 0;
  for(let i =0;i <arr.length;i++){
    sum += arr[i]
    average = sum /arr.length
  }
  return average
}
function getGrade(score){
  let grade ="";
  switch(true){
    case(score ===100):
    grade ="A+";
    break;
    case (score >= 90 && score < 100):
    grade="A";
    break;
    case(score >= 80 && score < 99):
    grade="B";
    break;
    case(score >=70 && score < 80):
    grade="C";
    break;
    case(score >= 60 && score < 70):
    grade ="D";
    break;
    case (score >=0 && score < 60):
    grade="F"
    break;
    default:
    "invalid Score"
  }
  return grade
}
function hasPassingGrade(score){
  if(getGrade(score)==="F"){
    return false
  }else{
    return true
  }

}

function studentMsg(arr,score){
  const average =getAverage(arr);
  const grade = getGrade(score);
  const status = hasPassingGrade(score);
  if(status === true){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  }else{
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }
}
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));