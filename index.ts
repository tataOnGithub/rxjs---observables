import { observable, of, from, interval, concat, filter, map, Observable } from "rxjs";

//1
const a$ = of(1, "aa", 3);
const b$ = of(4, 5, "bb");
const c$ = concat(a$, b$);
c$.pipe(map((x: string | number) => {
    if (typeof x === 'number') {
        return x * 10;
    }
    return x + x;
})).subscribe((x: string | number) => console.log(x));

//2
const obs$ = interval(1000);
obs$.pipe(filter((x: number) => x % 2 === 0), map((x: number) => x * 2)).subscribe((x: number) => console.log(x));

//3
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const users: User[] = [
    {
        firstName: 'giorgi',
        lastName: 'bazerashvili',
        age: 25
    },
    {
        firstName: 'meore',
        lastName: 'giorgi',
        age: 17
    }
];

const users$ = from(users);
users$.pipe(filter((x: User) => x.age >= 18), map((x) => `${x.firstName} ${x.lastName} ${x.age} years old`)).subscribe((x) => console.log(x));