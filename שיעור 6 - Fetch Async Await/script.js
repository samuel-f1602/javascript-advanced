console.log("** Fetch **");
//יש במאחורי הקלעים שלו גם את fetch ב
//XMLHttpRequest
//promise
//כל אלה נמצאים במאחורי הקלעים שלו

//מקבל כמה פרמטרים ביניהם fetch
//URL
const getAllCountries = () => {
    const request = fetch("https://restcountries.com/v3.1/all");
    request.then((data) => {
        console.log(data);
        //יש שתי מתודות dataאת ה fetch כדי לחלץ מתוך
        //method-1
        //text
        //return data.text();
        //פחות קריא
        //data אני אקבל JSON רק אחרי שאני יכניס
        //method-2
        //JSON
        return data.json();
        //data.parse יש את fetch בתוך
        //כרשימה dataשזה ייתן לנו את ה

        //ולדבר הזה צריך promise הוא מחזיר fetchב
        //.then לתת
        //כמה שבא לנו then אפשר לשרשר
        //וכו then אחרי then כלומר
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
};

getAllCountries();


const getOneCountry = async (country) => {
    const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    //then במקום
    //requestנעשה ככה אבל אני רוצה שזה יגיע ל
    // async כדי שזה יקרה נוסיף dataאחרי ה
    //לפני הפרמטר למעלה
    //const getOneCountry = async (country)
    //אומר אל תתקע לי את התכנית תמשיך להריץ async
    //ניתן לו פקודה של להמתין await נוסיף פה
    //זאת אומרת שניתן לאחר פקודה
    //יגיע dataכאילו פה אני אומר לו תמתין שה
    //const data = await request;
    //אבל אנחנו לא חייבים לרשום את זה אפשר במקום
    //למעלה fetchלפני ה await זה להוסיף
    // JSON.parse וזה אחרי שהוא קיבל
    //כדי שיהיה לנו יותר קריא
    const Data = await request.json();
    return Data;
};

//module במקום לעשות
//try/catch נהוג לעשות עם
//try{
const Nigeria = await getOneCountry("Nigeria");
//async עובד רק בפונקצית await זה ייתן לנו שגיאה
//module וזה עובד רק 
//module נשים scriptב html נצטרך לשים במסמך
//<script src="./script.js" type="module"></script>
//נהיה חייבים לשים את זה כדי שיעבוד אם לא ,נקבל שגיאה
console.log(Nigeria);
console.log("hello");
//כדי לקבל משהו ספציפי מאותו אלמנט
//console.log(Nigeria[0].flags.png);
//} catch (error);
//}

//אופציה שלישית
/*
const Nigeria = await getOneCountry("Nigeria").then((data) => {
    console.log(data);
    }).catch((error) => {
        console.log(error);
        });
*/

const getOnClick = async (country) => {
    const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const Data = await request.json();
    return Data;
};

const clickMe = async () => {
    try {
        const israel = await getOnClick("israel");
        console.log(israel);
        console.log("hello world");
        console.log(israel[0].flags.png);
        console.log(israel[0].name.common);
    } catch (error) {
        console.log(error);
    }
}


const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    await clickMe();
    console.log("button clicked");
});

//אופציה שנייה ללא אירועי משתמש
/*
const getOnClick = async (country) => {
    const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const Data = await request.json();
    return Data;
};

window אנחנו חייבים להוסיף type=module בגלל זה
window.clickMe = async () => {
    try {
        const israel = await getOnClick("israel");
        console.log(israel);
        console.log("hello world");
        console.log(israel[0].flags.png);
        console.log(israel[0].name.common);
    } catch (error) {
        console.log(error);
    }
}


const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    await clickMe();
    console.log("button clicked");
});
*/