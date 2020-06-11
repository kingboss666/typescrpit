function sayHello(person: string) {
    return "hello " + person
}

let user: string = "king"
console.log(sayHello(user))
// 对象
let arr: number[]
arr = [1]

interface Obj {
    [index: number]: number;
    length: number;
    callee: Function;
}
function sun(b: number, c: number): Obj {
    let a: IArguments = arguments
    return a
}
console.log(sun(1, 2))

// 函数
interface SearchFun {
    (source: string, subString: string): boolean
}
let mySearch: SearchFun
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}
console.log(mySearch("ab", "a"))

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else {
        return x.split('').reverse().join('')
    }
}
console.log(reverse('abc'))