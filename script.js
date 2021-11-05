let answers = ["Наш менеджер перезвонит Вам в ближайшее время!", "Уточнить детали можно по телефону 0553125613", "Оставайтесь на связи!", "Сегодня прекрасная погода!", "С Вами очень приятно общаться!"];
while(true) {
let str = "Ты кто? — Я бот Вася";
let bye = "Пока";
let rand = Math.floor(Math.random() * answers.length);
let n = prompt("Введите фразу, что бы начать чат с ботом");
if (n == "Привет") {
    alert(str);
    n = prompt("Как я могу Вас звать?");
    alert("Приветсвую, " + n + ". " + answers[rand]);
    break;
}
if (n == bye) {
    str = "До свидания, рад был пообщаться!";
    alert(str);
    break;
}
if (n == "") {
    alert("Ошибка");
}
alert(answers[rand]);
}