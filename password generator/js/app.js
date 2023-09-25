const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercasesEl = document.getElementById('uppercase');
const lowercasesEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercasesEl.checked;
    const hasUpper = uppercasesEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerHTML = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    )
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount)
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log(typesArr)

    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log(funcName)
            generatePassword += randomFunc[funcName]();
        })
    }
    const finalPassword = generatePassword.slice(0, length);

    return finalPassword
}

function getRandomLower() {
    const lower = "abcdefghijklmnorpqstuvxyz";
    return lower[Math.floor(Math.random() * lower.length)]
}

function getRandomUpper() {
    const upper = "ABCDEFGHIJKLMNORPQSTUVYZ"
    return upper[Math.floor(Math.random() * upper.length)]
}

function getRandomNumber() {
    const number = "0123456789"
    return number[Math.floor(Math.random() * number.length)]
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*(){}[]=<>/,.";
    return symbol[Math.floor(Math.random() * symbol.length)]
}