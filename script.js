const user = {}
for (let i = 1; i <= 10; i++) {
    user.name = prompt('Ваше имя?', 'Ivan')

    user.age = +prompt('Сколько вам лет?', '35')

    console.log(`пользователь ${i}  `);
    console.log(`имя ${user.name}`);
    console.log(`возраст ${user.age} `);
}