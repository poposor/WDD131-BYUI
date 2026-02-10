
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const grades = ['A', 'B', 'C', 'D', 'F'];
function addGrade(student){
    let newStudent = student;
    newStudent.letterGrade = grades[Math.floor(Math.random()*5)];
    return newStudent;
};
let gradedStudents = students.map(addGrade);
console.log("Added a letter grade to every student. Note: Added grades are random");
console.log(gradedStudents);

gradedStudents.forEach((student) => {
    student.gradePoints = convert(student.letterGrade)
});
console.log("added grade points to every student")
console.log(gradedStudents);

console.log("students with grade C or higher");
console.log(gradedStudents.filter((student) => {
    return student.gradePoints >= 2;
}));

console.log("how many grade points if we add all the students together?");
console.log(gradedStudents.reduce((total, student) => {
    return total + student.gradePoints;
},0));

console.log("what index is the grape in?");
console.log(words.indexOf("grape"));

gradedStudents.forEach((student) =>{
    const studentHtml = `
        <div class="student">
            <h1>${student.first} ${student.last}</h1>
            <p>Grade: ${student.letterGrade}</p>
        </div>
    `;
    document.getElementById("students").innerHTML += studentHtml;
});