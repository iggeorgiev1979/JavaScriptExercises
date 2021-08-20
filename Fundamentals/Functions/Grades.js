function solve(grade){
    let currentGrade;
    if(grade < 3){
        currentGrade = "Fail";
        grade = 2
    }else if (grade >= 3 && grade < 3.5){
        currentGrade = "Poor";
    }else if (grade >= 3.5 && grade < 4.5){
        currentGrade = "Good";
    }else if (grade >= 4.5 && grade < 5.5){
        currentGrade = "Very good";
    }else{
        currentGrade = "Excellent"
    }
    if(grade < 3){
        console.log(`${currentGrade} (${grade})`);

    }else{
    console.log(`${currentGrade} (${grade.toFixed(2)})`);
    }
}
solve(2)