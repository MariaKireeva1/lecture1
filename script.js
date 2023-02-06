let userEmail = prompt('Write your email');
let userPassword = prompt('Write your password');
let attempts = 3;
let error = '';


while ((userEmail.length > 15 || userEmail.startsWith(' ') || userEmail.endsWith(' ') || userEmail.startsWith('@') || userEmail.endsWith('@') || !userEmail.includes('@') || !userEmail.endsWith('.com') || userPassword.search(/[A-Z]/g) == -1 || userPassword.length < 4 || userPassword.length > 12) &&  attempts > 0) {
    
    
    if (userEmail.length > 15) {
        error = error + `* Email should consist less than 15 symbols
        `
    }   

    if (userEmail.startsWith(' ')) {
        error = error + `* Email must not start with a gap
        `
    }

    if (userEmail.endsWith(' ')) {
        error = error + `* Email must not end with a gap
        `
    }

    if (userEmail.startsWith('@') || userEmail.endsWith('@')) {
        error = error + `* Email must not start/end with '@'
        `
    }

    if (!userEmail.includes('@')) {
        error = error + `* Email must include at least one '@'
        `
    }

    if (!userEmail.endsWith('.com')) {
        error = error + `* You have to end your email with ' .com'
        `
    }

    if (userPassword.length < 4) {
        error = error + `* Password should not be less than 4 symbols
        `;
    }
    if (userPassword.length > 12) {
        error = error + `* Password should not be more than 12 symbols
        `;
    }
    if (userPassword.search(/[A-Z]/g) == -1) {
        error = error + `* Password should include at least one capital letter
        `;
    }

    alert(`You have ${attempts} more attempts.
        ${error}`);
        error = '';
    attempts = attempts - 1;
    userEmail = prompt('Write your email again');
    userPassword = prompt('Write your password again');
}

if (attempts <= 0) {
    alert(`Sorry, you don't have any more attempts.`)
    error = true;
}


if(error) {
    document.write(`Your account was not registered.`);
} else {
    document.write(`<pre>
    Your account succesfully registered!
    email: ${userEmail}
    password: ${userPassword}
    </pre>`);
}