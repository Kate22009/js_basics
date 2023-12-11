//4 - створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
const engineer = {
    name: "",
    experience: 0,
    skills: [],
    introduction: function () {
        console.log(`Engineer: ${this.name}, Experience: ${this.experience} years, Skills: ${this.skills.join(', ')}`);
    }

}
// Create a QA_engineer object that inherits from engineer
let QA_engineer = Object.create(engineer);

// Customize QA_engineer properties
QA_engineer.name = "John Doe";
QA_engineer.experience = 5;
QA_engineer.skills = ["Testing", "Automation", "Bug Tracking"];

// Call introduction method for engineer and QA_engineer
engineer.introduction();    // Outputs: Engineer: , Experience: 0 years, Skills:
QA_engineer.introduction(); 