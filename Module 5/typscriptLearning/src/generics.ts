//dynamically generalize: Generic

// type GenericArray<value> = Array<value>
type GenericArray<T> = Array<T>

// const friends: string[] = ['Mr.X', 'y', 'z']
const friends: GenericArray<string> = ['Mr.X', 'y', 'z']

// const rollNumber: number[] = [4, 7, 11];
const rollNumber: GenericArray<Number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true]

const sqrFunc = (value: number) => {
    return value * value;
}

sqrFunc(4);

type Coordinates<X, Y> = [X, Y]
const coordinates: Coordinates<number, number> = [20, 30];
const coordinates1: Coordinates<string, string> = ['20', '30'];

type User = {
    name: string, age: number
}

const userList: GenericArray<User> = [
    {
        name: 'Mr.X',
        age: 22,
    },
    {
        name: 'Mr.Y',
        age: 25
    }
]
