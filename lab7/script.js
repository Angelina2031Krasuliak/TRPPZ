function changeHeadingText() {
    document.getElementById('heading').innerText = 'Заголовок змінено!';
}

function greetUser() {
    const name = prompt('Введіть ваше ім’я:');
    console.log('Привіт, ' + name + '!');
}

function checkAge() {
    let age = prompt('Введіть ваш вік:');
    if (isNaN(age) || age === null || age === '') {
        alert('Будь ласка, введіть число!');
        checkAge(); 
    } else {
        if (age < 18) {
            alert('Доступ заборонено');
        } else {
            alert('Доступ дозволено');
        }
    }
}

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.body.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomRGB();
});

document.getElementById('changeButton').addEventListener('click', changeHeadingText);
document.getElementById('greetButton').addEventListener('click', greetUser);
document.getElementById('checkAgeButton').addEventListener('click', checkAge);
