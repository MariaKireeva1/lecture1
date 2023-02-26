const ITCompany = {
    id: 12332129,
    сompanyName: 'Playtika',
    type: 'product',
    vacancies: [
        {
            frontEnd: {
                salary: 1200
            },
        },
        {
            backEnd: {
                salary: 1500
            },
        },
        {
            scramMaster: {
                salary: 500
            },
        },
        {
            tester: {
                salary: 600
            },
        }
    ]
}


let workerName = prompt('Your name');
let workerPosition = prompt('Your position (available positions: frontEnd, backEnd, scramMaster, tester)');
let workerSalary = prompt('Your salary')


function addNewWorker(name, position, salary) {
    const worker = Object.create(ITCompany);

    worker.name = name;
    worker.position = position;
    worker.salary = salary;
    worker.greeeting = function (){
        document.write(`Hello, my name is ${this.name}, I'm ${this.position}  in ${this.сompanyName}`)
    }
    worker.greeeting();
    return worker;
} 


let notProperPositions = 0;
for (let i = 0; i < ITCompany.vacancies.length; i++) { 
    for (key in ITCompany.vacancies[i]) {
        if (key !== workerPosition) {
            notProperPositions = notProperPositions + 1;
        } else {
            for (j in ITCompany.vacancies[i][key]) {
                if (ITCompany.vacancies[i][key][j] == workerSalary) {
                    addNewWorker(workerName, workerPosition, workerSalary);
                    break;
                } else {
                    notProperPositions = notProperPositions + 1;
                }
            }
        }
    }
    if (notProperPositions === ITCompany.vacancies.length) {
        document.write(`${workerName}, you has significant skills at ${workerPosition} but we hired another developer, let's keep contact!`);
    }
}
