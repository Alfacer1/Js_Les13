const arrayLength = parseInt(prompt("Введіть кількість масивів:"));
const myArray = [];

for (let i = 0; i < arrayLength; i++) {
    const element = parseInt(prompt(`Введіть ${i + 1}-й елемент:`));
    myArray.push(element);
}
console.log("Початковий масив:", myArray);

myArray.sort((a, b) => a - b);
console.log("Відсортований масив:", myArray);

myArray.splice(2, 3);
console.log("Масив після видалення елементів від 2 по 4 включно:", myArray);
