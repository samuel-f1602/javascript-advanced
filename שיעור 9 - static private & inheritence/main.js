console.log("** static **");

//הוא למקרה ויש לנו שתי אנשים עם אותו שם idה
//בעצם מזהה איחודי כמו שיש לנו ת״ז
//אבל שום דבר לא עוצר אותי מלטעות ולתת להם את אותו מספר
/*
class person {
    firstName;
    lastName;
    age;
    email;
    id;

    constructor(id, firstName, lastName, age, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

const moshe = new person(1, 'Moshe', 'cohen', 30, 'moshe@mail.com');
const bob = new person(2, 'Bob', 'smith', 40, 'bop@mail.com');
const alice = new person(3, 'alice', 'johnson', 26, 'alice@mail.com');
*/

//האופציה השנייה והיותר טובה היא
//++ ליצור משתנה מבחוץ ולתת לו
/*
let count = 0;

class person {
    firstName;
    lastName;
    age;
    email;
    id;

    constructor(id, firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        count++;
        this.id = count;
    }
}

const moshe = new person('Moshe', 'cohen', 30, 'moshe@mail.com');
const bob = new person('Bob', 'smith', 40, 'bop@mail.com');
const alice = new person('alice', 'johnson', 26, 'alice@mail.com');
const alice2 = new person('alice', 'johnson', 30, 'alice@mail.com');

console.log(moshe);
console.log(bob);
//יצרנו עוד אליס עם אותם ערכים חוץ מהגיל והדפסנו לקונסול וקיבלנו מזהה איחודי שונה
console.log(alice);
console.log(alice2);
*/

//אם נשים אותו בתוך הפונקציה נצטרך לפעול אחרת כי הוא כבר שייך למחלקה
/*
class person {
    count = 0;
    firstName;
    lastName;
    age;
    email;
    id;

    constructor(id, firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.count++;
        this.id = this.count;
    }
}
*/
//אם נעשה את זה בצורה הבאה המזהה איחודי תמיד 
//static יהיה 0 צריך להוסיף לו 
//not a number = Nan אבל אז נקבל
//בגלל שהוא כבר לא שייך למופע אלא למחלקה נצטרך
//כדי לפנות אליו person. לשים לו
//כי הוא המופע וזה כבר נהייה במחלקה this במקום

class person {
    //static
    static count = 0;
    static people = [];
    firstName;
    lastName;
    age;
    email;
    #id;

    //constructor
    constructor(id, firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        person.count++;
        this.#id = person.count;
        person.people.push(this);
    }

    //method static
    changeName(newFirstName, newLastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }

    static getPersonCount() {
        console.log(`There are ${person.count} people`);

    }

    static getPeople() {
        console.log(...person.people);

    }
}

//אפשר גם לעשות את זה בצורה הבאה
//person להוסיף ++ לפני
/*
class person {
    static count = 0;
    firstName;
    lastName;
    age;
    email;
    id;

    constructor(id, firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.id = ++person.count;
    }
}
*/


const moshe = new person('Moshe', 'cohen', 30, 'moshe@mail.com');
const bob = new person('Bob', 'smith', 40, 'bop@mail.com');
const alice = new person('alice', 'johnson', 26, 'alice@mail.com');
const alice2 = new person('alice', 'johnson', 30, 'alice@mail.com');

console.log(moshe);
console.log(bob);

//יצרנו עוד אליס עם אותם ערכים חוץ מהגיל והדפסנו לקונסול וקיבלנו מזהה איחודי שונה
console.log(alice);
console.log(alice2);

//method static
alice2.changeName('ruth', 'levy');
console.log(alice2);

person.getPersonCount();
person.getPeople();

console.log("** Private# **");
bob.id = 50;
console.log(bob);

//כדי לגרום לאלמנט מסויים שלא יהיה ניתן לשנות אותו מחוץ לפונקציה
//נוסיף סולמית # לפני האלמנט

/*
class person {
    //static
    static count = 0;
    static people = [];
    firstName;
    lastName;
    #age;
    email;
    id;

    //constructor
    constructor(id, firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age;
        this.email = email;
        person.count++;
        this.id = person.count;
        person.people.push(this);
    }

    //method static
    changeName(newFirstName, newLastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }

    static getPersonCount() {
        console.log(`There are ${person.count} people`);

    }

    static getPeople() {
        console.log(...person.people);

    }
}
*/

//זה לא ייתן לי לשנות אותו זה יהיה לא חוקי שמתי עליו אבטחה כדי שלא יהיה ניתן לשנות אותו מבחוץ
//private הצרנו על אותו משתנה שהוא פרטי
//bob.#id = 50;

const moe = {
    firstName: 'Moe', lastName: 'Doe',
    email: 'moe@email.com'
}
console.log(moe);
moe.age = 25;
console.log(moe);

console.log("** הכמסה/כימוס - encapsulation **");
//זה בעצם נותן לי להראות למשתמש רק מה שהוא צריך לראות מה שלא רלוונטי אליו אני מחמיס
//לדוגמא שעון יד אנחנו רואים רק את הפונקציונליות של המחוגים של השעה והדקות זזים מה שקורה בפנים החמיסו לנו

console.log("** inheritence **");
person.getPeople();
//והיא יורשת user יש לנו דבר כזה שנקרא
//person ממחלקת
//password בנוסף לכל יש לה userל
//זה ההבדל ביניהם
//במקום לכתוב מחדש את כל הקוד אנחנו ניצור מחלקת  personeשהיא יורשת מ
//והיא מרחיבה בעצם מוסיפה סיסמא

//וככה עושים את זה יש מילה שמורה להרחבה

//super constructor כדי שזה יעבוד יש משהו שנקרא
//כדי לא לדרוס constructor הוא נותן לנו להוסיף
//את הקודם
//אבל עדייו נצטרך לתת את הפרמטרים אבל עם הרחבה של הסיסמא
//של האבא constructorזה ה super
class User extends person {
    password;

    constructor(firstName, lastName, age, email, password) {
        super(firstName, lastName, age, email);
        this.password = password;
    }
}

const user = new User('User', 'Name', 30, 'user@email.com', "1234");
console.log(user);

