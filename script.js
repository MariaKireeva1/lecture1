const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]


function getInfo(array, tableName) {
    if (Array.isArray(array)) {
        let result = ``;
        array.forEach((elem) => {  
            let emoji = elem[0]
            let type = elem[1]
            let description = elem[2]
           result = result + `<tr><td>${emoji}</td><td>${type}</td><td>${description}</td></tr>`;
        })
        document.write(`<table><th>${tableName}</th>${result}</table>`)
    }
}

getInfo(animals, 'Animals')
getInfo(food, 'Food')
getInfo(universes, 'Universes')