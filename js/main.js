"use strict";

// Получить кнопку "Начать расчет" через id
console.log(`Получить кнопку "Начать расчет" через id`);
let start = document.getElementById("start");
console.log(start);
// start.textContent = "Тест";

// Получить все блоки в правой части программы через классы 
// (которые имеют класс название-value, начиная 
// с <div class="budget-value"></div> 
// и заканчивая <div class="yearsavings-value"></div>)
console.log(`Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная 
    с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)`);
// Вариант 1
console.log("Вариант 1: ");
console.log(document.getElementsByClassName("budget-value")[0]);
console.log(document.getElementsByClassName("daybudget-value")[0]);
console.log(document.getElementsByClassName("level-value")[0]);
console.log(document.getElementsByClassName("expenses-value")[0]);
console.log(document.getElementsByClassName("optionalexpenses-value")[0]);
console.log(document.getElementsByClassName("income-value")[0]);
console.log(document.getElementsByClassName("monthsavings-value")[0]);
console.log(document.getElementsByClassName("yearsavings-value")[0]);

// Вариант 2
console.log("Вариант 2: ");
let elementsList = document.getElementsByTagName("div");
//console.log(elementsList);
for (let i = 0; i < elementsList.length; i++) {
    if (elementsList[i].className.indexOf("-value") >= 0) {
        console.log(document.getElementsByClassName(elementsList[i].className)[0]);
    }
}

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
console.log(`Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)`);
let expenses_item = document.getElementsByClassName('expenses-item');
for (let i = 0; i < expenses_item.length; i++) {
    console.log(expenses_item[i]);
}

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
console.log(`Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.`);
let btn = document.getElementsByTagName("button"); //псевдомассив
// console.log(btn);
for (let i = 0; i < btn.length; i++) {
    if (btn[i].textContent.indexOf("Утвердить") >= 0 || btn[i].textContent.indexOf("Рассчитать") >= 0 ) {
        console.log(btn[i]);
    }
}

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
console.log("Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll");
let optionalexpenses_item = document.querySelectorAll(".optionalexpenses-item");
for (let i = 0; i < optionalexpenses_item.length; i++) {
    console.log(optionalexpenses_item[i]);
}

// олучить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
console.log("Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)");
let choose_income = document.querySelector(".choose-income");
console.log(choose_income);
let checksavings = document.querySelector(".checksavings");
console.log(checksavings);
let choose_sum = document.querySelector(".choose-sum");
console.log(choose_sum);
let choose_percent = document.querySelector(".choose-percent");
console.log(choose_percent);
let year_value = document.querySelector(".year-value");
console.log(year_value);
let month_value = document.querySelector(".month-value");
console.log(month_value);
let day_value = document.querySelector(".day-value");
console.log(day_value);