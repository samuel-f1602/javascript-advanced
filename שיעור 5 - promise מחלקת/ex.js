//dataאנחנו ניצור פונקציה שהיא תחזיר לנו את ה

const getPokemons = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', false);

    request.send();

    if (request.status === 200) {
        return JSON.parse(request.response);
    } else {
        return 'Error';
    }
}

//זה בשיטה הרגילה
//console.log(getPokemons());
console.log("** method-1 **");

const myPromise = new Promise((resolve, reject) => {
    const pokemons = getPokemons();
    if (pokemons !== 'Error') {
        resolve(pokemons);
    } else {
        reject('Error');
    }
}).then((pokemons) => {
    console.log(pokemons);
}).catch((error) => {
    console.log(error.message);
}).finally(() => {
    console.log('promise finished');
});

//אופציה אחרת
console.log("** method-2 **");

const myPromise2 = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    request.onload = () => {
        if (request.status === 200) {
            resolve(JSON.parse(request.response));
        } else {
            reject('Error');
        }
    }
    request.send();
});

myPromise2.then((Pokemons) => {
    console.log(Pokemons);
    console.log('promise finish');
});