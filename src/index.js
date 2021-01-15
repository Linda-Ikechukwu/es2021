const str = "java is not javascript";
const newStr = str.replace("java", "type");
console.log(newStr);
const newStrAll = str.replaceAll("java", "type");
console.log(newStrAll);

class Person {
    #salt
    #someSecret

    get #secret() {
        return this.#someSecret
    }
    
    set #secret(secret) {
        this.#someSecret = secret
    }
    getSecret() {
        return this.#secret
    }
    constructor() {
        this.#salt = Math.random()
        this.#secret = "MySecret";
        // console.log(this.#salt + this.#secret)
      }
}

const p = new Person('michael')
// console.log(p.setSecret('mysecret'))
console.log(p.getSecret())

// const promise1 = new Promise((reject) => setTimeout(reject, 50, 'not allowed!'))
// const promise1 = Promise.reject("rejected!!!");

// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Speedy'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slowwwwwww'));

// const promises = [promise1, promise2, promise3];
// Promise.race(promises).then((value) => console.log(value));
//vs
// Promise.any(promises).then((value) => console.log(value)); //logs "quick"


//Logical Assignment Operator
x &&= y
x && (x = y)
if(x) {
    x = y
}

let someValue = "hel";
let valid = true;
valid &&= someValue !== "";
valid &&= someValue.length > 2;
// valid = valid && value !== "";
// valid = valid && value.length > 2;
console.log("some Value: ", valid);

var songLyrics = false;
var errorMsg = "This song has no lyrics!";
songLyrics ||= errorMsg
console.log(songLyrics)

function config(options) {
    options.duration ??= 100;
    options.speed ??= 25;
    console.log(options)
}
  
config({ duration: null });
config({ speed: undefined });
config({}); 
config({ duration: 9999 })
config({ duration: 9999, speed: 555 })