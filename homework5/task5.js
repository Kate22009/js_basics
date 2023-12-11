//5 - унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
// Define the base object 'person'
let person = {
    name: "",
    age: 0,
    introduction: function () {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
};

// Create an 'engineer' object that inherits from 'person'
let engineer = Object.create(person, {
    experience: { value: 0, writable: true },
    skills: { value: [], writable: true },
    introduction: {
        value: function () {
            console.log(`Engineer: ${this.name}, Age: ${this.age}, Experience: ${this.experience} years, Skills: ${this.skills.join(', ')}`);
        }
    }
});

// Create a 'QA_engineer' object that inherits from 'engineer'
let QA_engineer = Object.create(engineer, {
    automationSkills: { value: [], writable: true },
    introduction: {
        value: function () {
            console.log(`QA Engineer: ${this.name}, Age: ${this.age}, Experience: ${this.experience} years, Skills: ${this.skills.join(', ')}, Automation Skills: ${this.automationSkills.join(', ')}`);
        }
    }
});

// Create instances of 'person', 'engineer', and 'QA_engineer'
let personInstance = Object.create(person);
personInstance.name = "John Doe";
personInstance.age = 25;

let engineerInstance = Object.create(engineer);
engineerInstance.name = "Alice";
engineerInstance.age = 30;
engineerInstance.experience = 5;
engineerInstance.skills = ["JavaScript", "HTML", "CSS"];

let QA_engineerInstance = Object.create(QA_engineer);
QA_engineerInstance.name = "Bob";
QA_engineerInstance.age = 28;
QA_engineerInstance.experience = 3;
QA_engineerInstance.skills = ["Manual Testing", "Bug Tracking"];
QA_engineerInstance.automationSkills = ["Selenium", "Jenkins"];

// Call introduction method for 'person', 'engineer', and 'QA_engineer'
personInstance.introduction();       // Outputs: Person: John Doe, Age: 25
engineerInstance.introduction();     // Outputs: Engineer: Alice, Age: 30, Experience: 5 years, Skills: JavaScript, HTML, CSS
QA_engineerInstance.introduction();  // Outputs: QA Engineer: Bob, Age: 28, Experience: 3 years, Skills: Manual Testing, Bug Tracking, Automation Skills: Selenium, Jenkins

