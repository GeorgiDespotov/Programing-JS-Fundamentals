function solve(arr) {
    let username = arr.shift();
    let pass = username.split('').reverse().join('');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i == 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA'])