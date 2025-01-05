console.log("** Promise **");
//הוא נועד לפעולת א-סינכרוני
//מקבל שתי פרמטרים promise
//callback פונקציית
//השנייה לא מעניינת אותנו אנחנו לא נשתמש בה
//ויש בה שתי מצבים
//resolve - הצלחה
//reject - אי הצלחה

const myPromise = new Promise((resolve, reject) => {//                  מספר רנדומלי בין 0 - 100
    const randomMumber = Math.floor(Math.random() * 100);
    //                    זוגי
    if (randomMumber % 2 === 0) {
        resolve(randomMumber);
        //            לא זוגי
    } else {
        reject(randomMumber + " is not even");
    }
});

/* resolve פה יצרתי פונקציה שתחזיר לי
אם המספר הוא זוגי זה אומר בעצם הצלחה כי הוא  true/false מחזיר לי ב
reject ואם המספר הוא אי זוגי הוא יחזיר לי
*/

console.log(myPromise);


//ואת המספר הזוגי fullfield אחרי שהרצנו קיבלנו
//אנחנו לא רוצים להדפיס כזה דבר אנחנו לא רוצים לעבוד עם דבר כזה
//Promis {<fullfield>: 92}
//אנחנו רוצים רק את המספר

//זה משהו מיוחד promise
//כדי שייצא לנו רק את המספר שאנחנו צריכים ולא את כל הדברים מסביב
//then יש לו דבר כזה שנקרא
//callback מצפה לקבל פונקציית then
//resolve יקרה רק אם זה קיבל הצלחה בעצם then
//בפונקציה שלנו זה יקרה אך ורק אם קיבלנו מספר זוגי

//הוא יודע לקבל כפרמטר את המספר שאנחנו רוצים ואפשר לקרוא לו איך שבא לנו
//value פה קראתי לו

myPromise.then((value) => {
    console.log('succes, promise resolved:' + value);
    console.log(value);
}).catch((value) => {
    console.log(value);
}).finally(() => {
    console.log('Promise is settled');
});

//catch למספרים זוגיים ישלנו את then כמו שיש לנו 
//למספרים אי זוגיים
//reject יקרה רק אם זה קיבל אי הצלחה בעצם catch
// בפונקציה שלנו זה יקרה אך ורק אם קיבלנו מספר אי זוגי
//כדי שזה יעבוד אנחנו חייבים לשרשר ביניהם בעצם לחבר ביניהם כדי שזה יעבוד אם נעשה את זה בצורה הבאה זה לא יעבוד
//myPromise.catch((value) => {
//console.log(value);
//});

//finally ואז יש לנו
//הוא יבוא בכל מקרה לא משנה מה

//פתח סקופ משלו ומה שנמצא בו הוא א-סנכרוני then
//כל מה שנריץ אחרי יקרא לפני
//לדוגמא
console.log('end of script');

//זה נכנס לתוך promise בעצם כל מה שנכנס לתוך
//נקודת זמן משלו





