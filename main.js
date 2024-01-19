function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

}

let randomString = prompt("Введіть довільний рядок")

let userId = +prompt("Введіть ID від 1 до 4 ")

switch (userId) {
    case 1:
        let charIndex = +prompt("Введіть індекс символу")
        let valueUnicode = randomString.charCodeAt(charIndex)
        console.log(`Значення символу за індексом ${charIndex}: ${valueUnicode}`)
        break;

    case 2:
        let deleteIndex = +prompt("Введіть індекс символа який треба видалити")
        let updateString = randomString.slice(0, deleteIndex) + randomString.slice(deleteIndex + 1)
        console.log(`Рядок після видалення символу за індексом ${deleteIndex}: ${updateString}`)
        break;

    case 3:
        let replaceIndex = +prompt("Введіть індекс символа який треба замінити")
        let smiles = ["😊", "😎", "🥳", "😍", "🤔", "😜", "🤩", "😇", "😂", "👍"]
        let randomSmile = smiles[getRandomIntInclusive(0, smiles.length - 1)]
        let stringWithSmile = randomString.slice(0, replaceIndex) + randomSmile + randomString.slice(replaceIndex + 1)
        console.log(`Рядок після заміни символу за індексом ${replaceIndex}: ${stringWithSmile}`)
        break;

    case 4:
        let countLetter = randomString.replace(/\s/g, "").length
        console.log(`Кількість літер без пробілів ${countLetter}`)
        break;

    default:
        console.log("Невірний ID")
}