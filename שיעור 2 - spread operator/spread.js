const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr1; // Deep copy, arr2 will point to the same memory location as arr1
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
const person1 = {
    firstName: "john",
    lastName: "Doe",
    email: "john@email.com"
}

let person2 = { ...person1 };
person2.firstName = "jane";
person2.email = "jane@email.com";


console.log("person1", person1);
console.log("person2", person2);

/*
כדי ליצור מערך שמכיל מערכים נעשה את זה בצורה הבאה
const arrays = [
[1, 2, 3],
[4, 5, 6],
]
*/

/*
מה שראינו עד עכשיו שאם אנחנו עושים משתנה עם מערך וניצור משתנה חדש ששווה למשתנה הראשון עם המערך זה יושב על אותו זיכרון
spreadוהפיתרון לבעיה הזאת היה ה

*/

console.log("\n* shallow copy & Deep copy *");
//כאן זה יושב על אותו זיכרון
//deep copy = העתק עמוק / מדויק

//כאן זה לא יושב על אותו זיכרון
//shallow copy =  העתק רדוד / חלול

/*
shallow copy / עותק חלול = 
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = [...arr1];
*/

/*
Deep copy / עותק מדויק = 
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr1;
*/

console.log("** value vs reference **");

let word1 = "Hello";
let word2 = word1;

console.log(typeof word1); // string
console.log(typeof word2); // string

word2 = "World";

console.log(word1, word2);

//deep copy by reference = object & arrays
//shallow copy by value = מיקומי זיכרון

console.log("** try-catch **");
/*
const num = 0;
num = 5;

console.log("num", num);

console.log(num + 1000);
*/
//זה ידפיס לנו 
//Uncaught
//בעיה שהוא לא צפה מראש
//אני שם בו את כל try יש לנו משהו שנקרא
//מה שאני לא בטוח בו ושאני חושב שייכשל
//כדי שהוא עדיין יבצע את הפעולה יש לנו 
//finnaly

/*
const num = 0;

try {
    num = 5;

    console.log("num", num);

    console.log(num + 1000);
} catch (error) {
    console.log("there was an error", error);
}
*/

const num = 0;

try {
    num = 5;

    console.log("num", num);

} catch (error) {
    console.log("there was an error", error);
} finally {
    console.log("finally block");
    console.log(num + 1000);
}

//יש לנו שתי סוגים של שגיאות
//הראשונה - שגיאות שקורות בזמן התכנית
//השנייה - שגיאות שניתן לצפות מראש

// try catch מה הוא
//כלי לבטיחות בקוד

//finally מה תפקידו של
//היא מבצעת את הפעולה הסופית לא משנה מה

console.log("** ex **");

const num1 = 0;

let msg = "";

try {
    num1 = 5;
    console.log("num1", num1);
    msg = "success!!!";
} catch (error) {
    console.log("there was an error", error);
    msg = "error!!!";
} finally {
    console.log(msg);
    console.log(num1 + 1000);
    msg = "";
}
