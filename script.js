const birth = +prompt('Ваш год рождения');
const userName = prompt('Ваше имя');
const userSurname = prompt('Ваша фамилия');
const currentYear = 2023;
const userAge = currentYear - birth;
alert(`User Bio: ${userName} ${userSurname}, ${userAge} years old;`);