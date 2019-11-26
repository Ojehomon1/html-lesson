class fbw3{
    constructor(student,age,hobby){
        this.student = student;
        this.age = age;
        this.hobby = hobby;
    }

    studentInfo(){
        console.log('The student is:',this.student)
        console.log('And he likes to do ',this.hobby)
    }

    obtainAge(){
        return this.age
    }
    
}

module.exports = fbw3;