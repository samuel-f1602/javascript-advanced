console.log("** תכנות א-סנכרוני **");
//קוד נקרא מלמעלה למטה
//תכנות סנכרוני עובד בצורה הבאה
// 1
// |
// 2
// |
// 3
// |
// 4

//תכנות א-סנכרוני עובד בצורה הבאה
// 1 -------->
// |         |
// 2         |
// |         | 
// 3         |
// |         |
// 4 <--------
//מתחיל פונקצייה אחד ועד שהוא מסיים אותה הוא יכול לעשות כמה פונקציות ביחד
//לדוגמא תיקחו מסעדה ותארו לכם שהמלצרים היו רובוטים והמלצר היה לוקח הזמנה ומחכה כמו גולם עד שהמנה תהיה מוכנה במקום שבזמן הזה הוא יקח עוד הזמנות

//זה בעצם נוצר כדי שפונקציות אחרות ירוצו בזמן שפונקציה תסיים על רוץ על הפונקציה שלה
//אני שם בהערה כדי שיהיה לי ברור
/*
const fn1 = () => {
    setTimeout(() => {
        console.log('Function 1');

    }, 200);
};*/

const fn2 = () => {
    console.log('Function 2');
};

//fn1();
//fn2();

//יצרתי שתי פונקציות פונקציה ראשונה עיקבתי אותה מ2 שניות והפונקציה השנייה רגיל הרצתי את שתי הפונקציות ועד שהפונקציה הראשונה הסתיימה הפונקציה השנייה סיימה להריץ את עצמה
//וזה ידפיס לי קודם את הפונקציה השנייה ואז את הפונקצייה הראשונה כי עיכבתי אותה ב2 שניות
/*
const xml = () => {
    setTimeout(() => {
        console.log("\n** XMLHttpRequest **");
    }, 200);
};

xml();
*/

//API-שרת 
//קריאה לשרת
//ברגע שנקרא למשהו חיצוני ויהיה אחרי המשהו חיצוני תהיה פונקציה הפונקציה תקרה לפני כי כשמביאים משהו משרת חיצוני זה ייקח יותר זמן ממשהו שנמצא כבר במסמך

//חיצוני https כדי להביא new יש לנו את האובייקט
//שרתים יכולים לאפשר כמה סוגים של פעולות 

//method 1:
//get למשוך נתונים נקרא בקשת

//method 2;
//onload כדי להחליט מה קורה בזמן שבקשה נטענת נקרא

const getData = () => {
    //כל זה הגדרות
    const req = new XMLHttpRequest();
    //req=request זה ייתן לנו את כל המטודות
    console.log(req);

    req.onload = () => {

        //ואז הבעיה זה שזה מדפיס לנו אותו אבל לא קריא
        //console.log(req.response);

        console.log("** with JSON **");
        //JSON כדי שיהיה יותר קריא נצטרך להוסיף
        console.log(JSON.parse(req.response));

        //סטטוס מוצלח = 200
        console.log(req.status);

    }

    //אין לזה השפעה איפה נשים אותו אבל יותר הגיוני לקרוא לו בתחילת הפונקציה
    req.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle');
    //פה אני סיימתי את ההגדרות ואני שולח את הבקשה
    //לא תקרה לעולם open הבקשה sendבלי ה
    req.send();
}

//getData();

//כדי לקבל את התמונה של אותו אלמנט נכנסים ל
//ואז sprites
//back defaults ויהיה לנו את התמונה

console.log("************");
console.log("** ex **");

/*
const getCountry = (country) => {
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${country}`;

        request.onload = () => {
        const data = JSON.parse(request.response);

        //פה בחרנו את האינדקס אפס כי אנחנו רוצים רק את המדינה הראשונה שמופיע במערך כי מדינה כזאת יש רק אחת ובחרנו את היום הראשון של השבוע שנמצא במדינה הזאת
        //console.log(data[0].startOfWeek);
    };
    request.send();
 };

 getCountry('israel')
*/

const getCountry = (country) => {
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${country}`, false);
    //מגיע עם פרמטרים נוספים שהם בוליאני open
    //ובבוליאני מגיע גם א-סנכרוני
    //true/false בעצם יש לנו אופציה של 

    /*
    request.onload = () => {
        const data = JSON.parse(request.response);

        //פה בחרנו את האינדקס אפס כי אנחנו רוצים רק את המדינה הראשונה שמופיע במערך כי מדינה כזאת יש רק אחת ובחרנו את היום הראשון של השבוע שנמצא במדינה הזאת
        //console.log(data[0].startOfWeek);


        //בתרגיל מבקשים להחזיר
        //return data;
        //undefined
        //נמקם אותו undefined כדי שלא נקבל 
        //במקום אחר ולא פה
        //if ונעשה את זה בצורה אחרת עם
    };*/
    request.send();
    if (request.status === 200) {
        return JSON.parse(request.response);
    } else {
        return 'country not found'
    }
}
const printCountryData1 = (country) => {
    const data = getCountry(country);
    console.log(data);
    //put country flag in img
    const img1 = document.getElementById('flag1');
    img1.src = data[0].flags.png
    const img2 = document.getElementById('flag2');
    img2.src = data[0].flags.png
    const img3 = document.getElementById('flag3');
    img3.src = data[0].flags.png
    const img4 = document.getElementById('flag4');
    img4.src = data[0].flags.png
}
printCountryData1('germany');
printCountryData1('israel');
printCountryData1('usa');
printCountryData1('france');


const printCountryData2 = (country) => {
    const data = getCountry(country);
    console.log(data);
    //put country flag in img
    const img1 = document.getElementById('flag2');
    img1.src = data[0].flags.png
}

printCountryData2('israel');

const printCountryData3 = (country) => {
    const data = getCountry(country);
    console.log(data);
    //put country flag in img
    const img1 = document.getElementById('flag3');
    img1.src = data[0].flags.png
}

printCountryData3('usa');

const printCountryData4 = (country) => {
    const data = getCountry(country);
    console.log(data);
    //put country flag in img
    const img1 = document.getElementById('flag4');
    img1.src = data[0].flags.png
}

printCountryData4('germany');


//מדינה שלא קיימת
//printCountryData('francexexx');
//'country not found' קיבלנו