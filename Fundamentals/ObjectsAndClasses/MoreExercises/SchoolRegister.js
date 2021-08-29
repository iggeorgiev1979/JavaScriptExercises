function school(arr){

    class Student{
        constructor(name, grade, score){
            this.name = name;
            this.grade = Number(grade);
            this.score = Number(score);
        }

    }

    function register(str){
        let tmpArr = str.split(", ");
        let studentName = tmpArr[0].split(": ")[1];
        let studentGrade = tmpArr[1].split(": ")[1];
        let studentScore = tmpArr[2].split(": ")[1];

        let tmpObj = new Student(studentName, studentGrade, studentScore);
        if(tmpObj.score >= 3){
            if(!grades[tmpObj.grade + 1]){
                grades[tmpObj.grade + 1] = [];
            }
            grades[tmpObj.grade + 1].push(tmpObj);
        }
    }

    function print(element){
        let tmp = [];
        let tmpGrade = 0;
        for(el of grades[element]){
            tmp.push(el.name);
            tmpGrade += el.score;
        }
        tmpGrade /= grades[element].length;
        console.log(`${element} Grade \nList of students: ${tmp.join(", ")}\nAverage annual grade from last year: ${tmpGrade.toFixed(2)}\n`);

    }

    let grades = {};
    arr.forEach(element => register(element));
    Object.keys(grades).forEach(el => print(el));

}
school(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])