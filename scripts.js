

const students = [
    {name: 'Rodolfo', testGrade: 7 }, 
    {name: 'Maria', testGrade: 5 },
    {name: 'João', testGrade: 8 },
    {name: 'Bruno', testGrade: 9 },
    {name: 'Carla', testGrade: 3 },
    {name: 'Ana', testGrade: 2 },
    {name: 'Julio', testGrade: 10 },
]

const newStudents = students.map( student =>{
    return { 
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Promoted' : 'Failed'
    }
} )

console.log(newStudents)