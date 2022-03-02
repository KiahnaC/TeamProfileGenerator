const inquirer = require("inquirer");
const Manager = require("./userPrompts/Manager.js");
const Intern = require("./userPrompts/Intern.js");
const Engineer = require("./userPrompts/Engineer.js");
const Employee = require("./userPrompts/Employee.js");

const teamMember = [];






const EmplQuestions = [ {
    type: "input",
    message: "What is the Employees ID?",
    name: "ID"
},
{
    type: "input",
    message: "What is the Employee's Email?",
    name: "Email"
},
{
    type: "input",
    message: "What is the Employees Name?",
    name: "name"
},
    {
        type: "input",
        message: "What is the Employee's GitHub?",
        name: "Github"
    },


]

const InternQuestions = [{
    
        type: "input",
        message: "What is the Intern's ID?",
        name: "ID"
    },{
        type: "input",
        message: "What is the Intern's Email?",
        name: "Email"
    },
    {
        type: "input",
        message: "What is the Intern's Name?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the Intern's School Name?",
        name: "School"
    },
]
const EngineQuestions = [{

        type: "input",
        message: "What is the Engineer's ID?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is the Engineer's Email?",
        name: "Email"
    },
    {
        type: "input",
        message: "What is the Engineer's Name?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the Engineer's GitHub?",
        name: "Github"
    },




]

const ManagQuestions = [{
        type: "input",
        message: "What is the Manager's ID?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is the Manager's Email?",
        name: "Email"
    },
    {
        type: "input",
        message: "What is the Manager's Name?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "phoneNumber"
    },
]

function getEmployee() {
inquirer.prompt(ManagQuestions).then(answers=> {
    console.log(answers)
    const manager = new Manager(answers.Name,answers.ID,answers.Email, answers.phoneNumber) 
    console.log(manager)
    teamMember.push(manager)
    employeeToggle()
})
}
getEmployee()


function getInternQA() {
    inquirer.prompt(InternQuestions).then(answers=> {
        console.log(answers)
        const intern = new Intern(answers.Name, answers.ID,answers.Email,answers.School) 
        console.log(intern)
        teamMember.push(intern)
        employeeToggle()
    })
    }
   


        function getEngineer() {
            inquirer.prompt(EngineQuestions).then(answers=> {
                console.log(answers)
                const engineer = new Engineer(answers.Name, answers.ID,answers.Email,answers.Github) 
                console.log(engineer)
                teamMember.push(engineer)
                employeeToggle()
            })
            }
           
            function employeeToggle () {
              inquirer.prompt([{
                type: 'list', 
                name: 'choice',
                choices: ['Would you like to add an Intern?','Would you like to add an Engineer?','Are you finished?']
              }]).then(answers=>{
                if (answers.choice === 'Would you like to add an Intern?'){
                getInternQA()
              }else if (answers.choice === 'Would you like to add an Engineer?'){
                getEngineer()
              }else {
                console.log('user is finished!')
              }
              })

            }

//teamMember array will have x amount of eng and x amount of interns
//run this tm array through a for loop and pull out manager, intern, and engineer
const mana = []
const eng = []
const int = []

for (var i = 0; i < teamMember.length; i++) {
             if (teamMember[i]=== "Manager") {
             mana.push(teamMember[i])
            }else if ( teamMember[i] === 'Engineer'){
              eng.push(teamMember[i])
            }else if( teamMember[i]=== 'Intern'){
              int.push(teamMember[i])
            }
            
}
          function engCards(eng) {
            let engHTML = []
            for (let i = 0; i < eng.length; i++) {
              let data = `
              <div class="row">
                    <div class="column">
                      <div class="card">
                        <h3>${eng[i].ID}</h3>
                        <p>${eng[i].Name}</p>
                        <p>${eng[i].Email}</p>
                        <p>${data[i].Github}t</p>
                      </div>
                    </div>`
                engHTML.push(data)
            }
            return engHTML
          }

          function intCards(int) {
            let intHTML = []
            for (let i = 0; i < int.length; i++) {
              let data = `
              <div class="row">
                    <div class="column">
                      <div class="card">
                        <h3>${int[i].ID}</h3>
                        <p>${int[i].Name}</p>
                        <p>${int[i].Email}</p>
                        <p>${int[i].School}t</p>
                        <p>${int[i].Github}t</p>
                      </div>
                    </div>`
                intHTML.push(data)
            }
            return intHTML
          }

           function generateMarkdown(data) {
            return (
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="style.css" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
            
                <title>Document</title>
            </head>
            <div class="nav-container">
                <nav class="nav-bar">My Team</nav>
            </div>
            <br>
            <body>
               
                <div class="row">
                    <div class="column">
                      <div class="card">
                        <h3>${data.Name}</h3>
                        <p>${data.Email}</p>
                        <p>${data.ID}</p>
                        <p>${data.phoneNumber}t</p>
                      </div>
                    </div>
                    ${engCards(eng)}
                    ${intCards(int)}

          `);
        
          }
          
          module.exports = generateMarkdown
          
              
             

//create variable that is an empty array "team" i.e
//after new variables are declared for every employee, push into empty array team.push(manager) i.e **LOWER CASE Variable 
//Return Html code. See Generate Markdown