console.log("** local storage **");
// נמצע בדפדפן local storage 
///application < inspect

const save = () => {
    const name = document.getElementById('name');
    const title = document.getElementById('title');

    //בעצם פה אנחנו רוצים שזה ירשום שלום
    //input השם שיכניסו ב +
    title.innerHTML = "Hello " + name.value;
    //ואני רוצה שכל פעם שהמשתמש ייכנס לדפדפן אז השם שהוא הכניס פעם אחרונה שהוא נכנס לדפדפן ישמר
    //local storage ולזה נצטרך לפנות ל
    //יש לו כמה פרמטרים
    //clear שזה מחיקה
    //get item לשלוף
    //setitem פעולת השמה
    //key , value והיא מקבלת
    localStorage.setItem("name", name.value);
}

//ואני רוצה שכל פעם שהמשתמש ייכנס לדפדפן אז השם שהוא הכניס פעם אחרונה שהוא נכנס לדפדפן ישמר

const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');
    //כדי לעשות שפעם ראשונה שנכנסים לדפדפן זה יראה טוב והוא לא ירשום לי 
    //hello null
    //נעשה את זה ככה

    if (localStorage === null) {
        return;
    }

    const storageColorsHtml = localStorage.getItem("colors");
    const list = document.getElementById('list');
    //אם רוצים שיהיה קבוע מה שבחרנו
    //innerבעצם מה שרשמנו פה זה שמה שיש ב
    //local storageלמה שיש לנו ב = html

    //list.innerHTML = storageColorsHtml || "";

    title.innerHTML = "Hello " + storageName;
}
//אירוע שקורה בעת טעינת החלון
window.onload = load;

//אופ שנייה
/*
const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');
    //כדי לעשות שפעם ראשונה שנכנסים לדפדפן זה יראה טוב והוא לא ירשום לי
    //hello null
    //נעשה את זה ככה

    if (localStorage === null) {
        return;
    }

    title.innerHTML = "Hello " + (storageName || "guest");
}
window.onload = load;
*/

//אופ שלישית
/*
const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');
    //כדי לעשות שפעם ראשונה שנכנסים לדפדפן זה יראה טוב והוא לא ירשום לי 
    //hello null
    //נעשה את זה ככה

    if (localStorage !== null) {
        title.innerHTML = "Hello " + storageName;
    }

}
window.onload = load;
*/

//selectכדי לבצע פעולה בעת שינוי של ה
const pickColor = () => {
    const color = document.getElementById('colors').value;
    const colorLi = document.createElement('li');
    colorLi.innerHTML = color;
    colorLi.style.color = color;

    const list = document.getElementById('list');
    const colorsArr = Array.from(list.getElementsByTagName('li'));
    console.log(colorsArr);

    for (let i = 0; i < colorsArr.length; i++) {
        if (colorsArr[i].innerText === color) {
            alert("color already exists"); return
        }
    }

    list.appendChild(colorLi);
    localStorage.setItem("colors", list.innerHTML)
}

//אומרת לנו אם האיבר קיים במערך או לא includes
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// קיים במערך אז נקבל נכון  5
console.log(arr.includes(5)); //true
//לא קיים במערך אז נקבל לא נכון 50  
console.log(arr.includes(50)); //false

console.log("** ex **");

//ex
//מערך של אובייקטים
const people = [
    {
        name: "john",
        age: 25
    },
    {
        name: "jane",
        age: 30
    },
    {
        name: "jim",
        age: 35
    }
];

if (localStorage.getItem("people") === null) {
    const jsonString = JSON.stringify(people);

    console.log(people)
    console.log(jsonString);

    localStorage.setItem("people", jsonString)

    const data = localStorage.getItem("people");
    console.log(data);
    const parsed = JSON.parse(data)
    parsed.push({ name: "jack", age: 40 });
    console.log(parsed);

}
//לא יופיע לנו המערך יופיע local storage
//object object object object
//כדי שיופיע לנו נצטרך לעשות איזה מתורגמן למערך
//json ולדבר הזה יש לנו את 
//יש לו שתי פרמטרים

//פרמטר ראשון
//stringify
// Jsonל javascripty היא נועדה להפוך משהו 

//פרמטר שני
//parse
//Javascriptyל JSON היא נועדה להפוך משהו מ
//stringify בעצם בדיוק הפוך מ

console.log("******* ex ******");

/*1..צרו מערך המכיל שמות בעלי חיים והכניסו אותו ל-localStorage
*/

/*
2.. מישכו את המערך מהמחסן היפכו לאובייקט סטנדרטי והסירו ממנו את בעל החיים האחרון
*/

/*
3. הכניסו את המערך המעודכן בחזרה ל-localstorage
*/


/*
4.בידקו שכל המידע נכנס כמו שצריך 
*/
const animals = ["dog", "cat", "fish", "lion", "snake"];

const animalsToStorage = JSON.stringify(animals);
sessionStorage.setItem("animals", animalsToStorage);

const animalsFromStorage = sessionStorage.getItem("animals");
const parsedAnimals = JSON.parse(animalsFromStorage);
parsedAnimals.pop();

sessionStorage.setItem("new-animals", JSON.stringify(parsedAnimals));




