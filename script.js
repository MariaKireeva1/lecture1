const ARRAY = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let amountOfPositive = 0;
const SUM = ARRAY.reduce((acc, current) => {
    if (current > 0) {
        amountOfPositive = amountOfPositive + 1;
        return acc + current
    } else {
        return acc
    }
}, 0)

console.log(`1) Сума позитивних елементів: ${SUM}. Їх кількість: ${amountOfPositive}`);

const MIN = ARRAY.reduce((acc, current, index) => {
    if (current < acc[0]) {
        return [current, index]
    } else {
        return acc
    }
}, [ARRAY[0], 0])

console.log(`2) Мінімальний елемент масиву: ${MIN[0]}, його індекс: ${MIN[1]}`);

const MAX = ARRAY.reduce((acc, current, index) => {
    if (current > acc[0]) {
        return [current, index]
    } else {
        return acc
    }
}, [ARRAY[0], 0])

console.log(`3) Максимальний елемент масиву: ${MAX[0]}, його індекс: ${MAX[1]}`);

let positiveEven = 0;
let positiveOdd = 0;
let negative = 0;
ARRAY.forEach((elem) => {
    if (elem < 0) {
        negative = negative + 1;
    }
    if ((elem > 0) && (elem % 2 == 0)) {
        positiveEven = positiveEven + 1;
    }
    if ((elem > 0) && (elem % 2 !== 0)) {
        positiveOdd = positiveOdd + 1;
    }
})
console.log(`4) Кількість негативних елементів: ${negative}`);
console.log(`5) Кількість непарних позитивних елементів: ${positiveOdd}`);
console.log(`6) Кількість парних позитивних елементів: ${positiveEven}`);

const SUM_OF_POSITIVE_EVEN = ARRAY.reduce((acc, current) => {
    if ((current > 0) && (current % 2 == 0)) {
        return acc = acc + current
    } else {
        return acc
    }
}, 0)

console.log(`7) Сума парних позитивних елементів: ${SUM_OF_POSITIVE_EVEN}`);

const SUM_OF_POSITIVE_ODD = ARRAY.reduce((acc, current) => {
    if ((current > 0) && (current % 2 !== 0)) {
        return acc = acc + current
    } else {
        return acc
    }
}, 0)

console.log(`8) Сума непарних позитивних елементів: ${SUM_OF_POSITIVE_ODD}`);

const PRODUCT_OF_POSITIVE = ARRAY.reduce((acc, current) => {
    if (current > 0) {
       return acc = acc * current
    } else {
        return acc
    }
}, 1)

console.log(`9) Добуток позитивних елементів: ${PRODUCT_OF_POSITIVE}`);


const NEW_ARRAY = ARRAY.map((elem) => {
    if (elem !== MAX[0]) {
        return elem = 0;
    } else {
        return elem
    }
})
console.log(NEW_ARRAY);