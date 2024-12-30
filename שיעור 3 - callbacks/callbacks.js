const sayThankYou = () => {
    console.log('thank you for your purchas! we appreciate your business.');

}
/*
בנינו פונקציה שתדפיס ללקוח תודה על קנייתך
*/

const sayThankYouBigSpender = () => {
    console.log('thank you for your purchas! we appreciate your business. you are a big spender!');

}
/*
בנינו פונקציה שתדפיס ללקוח תודה על קנייתך
*/

const calcSum = (price1, price2, myFunc) => {
    const finalPrice = price1 + price2;
    console.log(`the total price is $${finalPrice}`);
    myFunc();
}

/*
בנינו פונקציה שתעשה חיבור בין שתי המספרים ולאחר מכן היא תדפיס ללקוח את המחיר הסופי
*/

const start = () => {
    const num1 = +prompt('enter the first price: ');
    const num2 = +prompt('enter the second price: ');
    if (num1 + num2 > 2000) {
        calcSum(num1, num2, () => {
            console.log('thank you for your purchas! we appreciate your business. you are a very very big spender!');
        })
        //פה יצרנו פונקציה על המקום במקום ליצור מחוץ ולקרוא לה בפנים
        //callback וזה נקרא פונקצית

    } else if (num1 + num2 > 1000) {
        calcSum(num1, num2, sayThankYouBigSpender);

    } else {
        calcSum(num1, num2, sayThankYou);
    }
}

/*
בנינו פונקציה שתבקש מהלקוח לתת לנו שתי מספרים ולעשות חיבור ביניהם ואם הסה״כ יותר גדול מ1000 תדפיס תודה על קנייתך אתה לקוח יקר
ושאם זה לא יותר גדול מ1000 תדפיס ללקוח תודה על קנייתך
*/

/*
callback פונקצית
זאת פונקציה שקראנו לה על המקום כמו שעשינו בשורה 31
לעומת ההתחלה שיצרנו פונקציות מבחוץ
 */