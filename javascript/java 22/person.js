class Person{

    constructor(firstName,lastName,birthday,address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
    }

    greeting(){
        alert("Hello "+ this.firstName + " " + this.lastName);
    }

    getBirthDay(){
        let today = " ";   // 18.07.2019

        if( today = this.birthday){
            alert("Happy Birthday"+ this.firstName)
        }
    }
}

class Student extends Person {
    constructor(firstName,lastName,birthday,address,id,university){
        super(firstName,lastName,birthday,address);
        this.id = id;
        this.university = university;
    
}
getAge(){
    let birthYear = "";
    return 2019 - birthYear;  // 2019 - 2000 = 19
}
studentInfo(){
    // all info about the student
}


}