/*
מה שעשינו פה בעצם יש לנו דבר כזה שנקרא
modules
ארוך מדי ומה js והוא נוצר כדי שלא יהיה לנו קובץ js שהוא עושה זה נותן לנו אופציה לקשר בין קבצי
import - export ע״י
יש לנו קובץ ראשי ויש לנו תתי קבצים
לדוגמא export בתתי קבצים נכניס
export { changeCar, printCar };
לדוגמא import ובקובץ הראשי נכניס
*/
import { changeCar, printCar } from "./car";
//נוסף attribute אבל כדי שזה יעבוד נצטרך להוסיף
//script ב type="module" והוא html במסמך 
//לדוגמא
//<script src="../modules/index.js" type="module"></script>


console.log("** before change **");
printCar();

changeCar('Toyota', 'corolla', 2020)

console.log("** after change **");
printCar();


