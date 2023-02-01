const userName = prompt('Ваше имя');
const userSurname = prompt('Ваша фамилия');
const birthMonth = +prompt('В каком месяце по счету вы родились?');
const birthDate = +prompt('Число вашего рождения');
const birthYear = +prompt('В каком году вы родились?');
const currentYear = 2022;
const userAge = currentYear - birthYear;


let zodiac;

if (((birthMonth === 1 && birthDate >= 20)||(birthMonth === 2 && birthDate <= 18))) {
    zodiac = 'Aquarius';
} else if (((birthMonth === 2 && birthDate >= 19) || (birthMonth === 3 && birthDate <= 20))) {
    zodiac = 'Pisces';
} else if(((birthMonth === 3 && birthDate >= 21) || (birthMonth === 4 && birthDate <= 19))) {
    zodiac = 'Aries';
} else if (((birthMonth === 4 && birthDate >= 20) || (birthMonth === 5 && birthDate <= 20))) {
    zodiac = 'Taurus';
} else if (((birthMonth === 5 && birthDate >= 21) || (birthMonth === 6 && birthDate <= 20))) {
    zodiac = 'Gemini';
} else if(((birthMonth === 6 && birthDate >= 21) || (birthMonth === 7 && birthDate <= 22))) {
    zodiac = 'Cancer';
} else if(((birthMonth === 7 && birthDate >= 23) || (birthMonth === 8 && birthDate <= 22))) {
    zodiac = 'Leo';
} else if(((birthMonth === 8 && birthDate >= 23) || (birthMonth === 9 && birthDate <= 22))) {
    zodiac = 'Virgo';
} else if(((birthMonth === 9 && birthDate >= 23) || (birthMonth === 10 && birthDate <= 22))) {
    zodiac = 'Libra';
} else if(((birthMonth === 10 && birthDate >= 23) || (birthMonth === 11 && birthDate <= 21))) {
    zodiac = 'Scorpio';
} else if(((birthMonth === 11 && birthDate >= 22) || (birthMonth === 12 && birthDate <= 21))) {
    zodiac = 'Sagittarius';
} else if(((birthMonth === 12 && birthDate >= 22) || (birthMonth === 1 && birthDate <= 19))) {
    zodiac = 'Capricorn';
} else {
    zodiac = 'impossible to determine your zodiac sign';
}


if ((birthYear % 4) === 0 || (birthYear % 400) === 0) {
    document.write(`User Bio: ${userName} ${userSurname}, ${userAge} years old (leap year), ${zodiac};`)
} else {
    document.write(`User Bio: ${userName} ${userSurname}, ${userAge} years old, ${zodiac};`)
}