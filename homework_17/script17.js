const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}



let checkBalanceAnswer;
while (checkBalanceAnswer !== 'так' && checkBalanceAnswer !== 'ні') {
    checkBalanceAnswer = prompt(`Чи бажаєте подивитись баланс на карті? (введіть 'так' або 'ні')`).trim().toLowerCase();
}


function getMoney() {
    return new Promise((resolve, reject) => {
        if (checkBalanceAnswer == 'так') {
            resolve()
        } else if (checkBalanceAnswer == 'ні'){
            reject()
        } 
    }) 
}

getMoney()
    .then(checkBalance)
    .catch(takeCash)
    .finally( _ => console.log(`Дякую, гарного дня 😊`))


function checkBalance() {
    let checkBalanceAnswer = prompt(`Баланс якої валюти ви бажаєте подивитись?`).trim().toUpperCase();
    while (!userData.hasOwnProperty(checkBalanceAnswer)) {
        checkBalanceAnswer = prompt( `На вашому балансі немає такої валюти.
Баланс якої валюти ви бажаєте подивитись? `).trim().toUpperCase()
    }

    console.log(`Баланс становить ${userData[checkBalanceAnswer]} ${checkBalanceAnswer}.`)
}


function takeCash() {
    let currencyAnswer;
    const availableCurrencies = checkAvailableCurrency()
    while (!availableCurrencies.includes(currencyAnswer)) {
        currencyAnswer = prompt(`Яку валюту бажаєте зняти? Доступні валюти: ${availableCurrencies.join(', ')}`).trim().toUpperCase()
    }

    let sumToTake;
    while (isNaN(sumToTake) || sumToTake < 0) {
        sumToTake = +prompt(`Яку суму бажаєте зняти?`);
    }

    if (sumToTake > userData[currencyAnswer]) {
        console.log(`На вашому балансі недостатньо грошей`);
    } else if (sumToTake > bankData[currencyAnswer].max) {
        console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${bankData[currencyAnswer].max} `);
    } else if (sumToTake < bankData[currencyAnswer].min) {
        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currencyAnswer].min} `);
    } else {
        console.log(`Ось Ваші гроші - ${sumToTake} ${currencyAnswer} ${bankData[currencyAnswer].img}`);
    }
}


function checkAvailableCurrency() {
    const availableInBankomat = Object.keys(bankData).filter((item) => {
        return bankData[item].max > 0
    })
      
    const available = Object.keys(userData).filter((el) => availableInBankomat.includes(el))
    return available
}