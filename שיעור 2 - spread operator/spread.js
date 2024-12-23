const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr1; // deep copy, arr2 will point to the same memory location as arr1
arr2[0] = 100;  // arr1[0] will also change

console.log("arr1", arr1);
console.log("arr2", arr2);

//בעצם יצרנו משתנה שיש בו מערך
//ויצרנו משתנה שני שהוא שווה למשתנה הראשון
//ועשינו שהמערך השני באינדקס 0 שווה ל100
//הבעיה שיש לנו פה זה שגם המשתנה הראשון 
//וגם משתנה השני באינדקס 0 יהיה לו 100 בשתיהם
//spread והפיתרון לזה הוא
//אם היינו עושים מערך חדש על המשתנה השני אז זה כן היה עובד לנו
console.log("** spread operator **");
//זה אופרטור שמפזר את האיברים של מערך
//spread ...
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4 = [...arr3]; // shallow copy, Spread Operator will create a new array and copy the values of arr3
arr4[0] = 200; // arr3[0] will not change

console.log("arr3", arr3);
console.log("arr4", arr4);
//פה הוא בעצם לקח את המערך הראשון מבלי לשנות אותו והוא הוסיף אותו למערך החדש עם האינדקס הראשון 200 והדפסנו את שתי המערכים ולא בוצע בראשון שום שינוי זאת אומרת שהוא העתיק אותו למערך החדש ועשה על המערך החדש את השינוי
console.log(...arr4); // 200 2 3 4 5 6 7 8 9 10

console.log("\n** Rest Parameter **");

const sum = (...args) => {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    console.log("sum", sum);

}

sum(100, 469, 250);
//חייב להיות אחרון מבין הפרמטרים spread
const sum1 = (operator, ...args) => {
    let sum1 = 0;
    for (const arg of args) {
        if (operator === "+") {
            sum1 += arg;
        } else if (operator === "-") {
            sum1 -= arg;
        }
    }
    console.log("sum1", sum1);

}

sum1("+", 100, 469, 250);
sum1("-", 100, 469, 250);

const printSum = (operator, ...items) => {
    let sum = 0;
    for (const arg of items) {
        if (operator === "+") {
            sum += arg;
        } else if (operator === "-") {
            sum -= arg;
        }
    }
    console.log("Sum", sum);
}
printSum("+", 100, 469, 250, 234);

console.log("ֿ** spread object **");

