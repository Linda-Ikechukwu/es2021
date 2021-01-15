// string replace all
const str = "java is not javascript";
const newStr = str.replace("java", "type");
console.log(newStr);
const newStrAll = str.replaceAll("java", "type");
console.log(newStrAll);

// class private methods/fields/accessors
class Password {
    #salt
    #password
    #hiddenSecret 

    get #secret(){
        return this.#hiddenSecret
    }
    set #secret(password){
        this.#hiddenSecret = password
    }

    #getSecret() {
        return this.#hiddenSecret
    }

    constructor(password) {
        this.#salt = Math.random()
        this.#password = password;
        this.#secret = this.#salt + this.#password
    }
}

const p = new Password('password')
// console.log(p.#getSecret()) //will not work

// Promise.any / Promise.race
// const promise1 = new Promise((reject) => setTimeout(reject, 40, 'not allowed!'))
const promise1 = Promise.reject("rejected!!!");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Speedy'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slowwwwwww'));
const promises = [promise1, promise2, promise3];
// Promise.race(promises).then((value) => console.log(value));
Promise.any(promises).then((value) => console.log(value));

// Logical Assignment Operator
// x &&= y
let someValue = "";
let valid = true;
valid &&= someValue !== "";
valid &&= someValue.length > 2;
console.log(valid)

// x ||= y
// falsy!
let songLyrics = false;
let errorMsg = "This song does not have Lyrics!"
songLyrics ||= errorMsg
console.log(songLyrics)

// ?? === if null or undefined
// x ??= y
function config(options) {
    options.duration ??= 100
    options.speed ??= 25;
    console.log(options)
}
config({})
config({ duration: null })
config({ duration: 200, speed: 50 })
config({ duration: 0 })
config({ duration: '0' })
