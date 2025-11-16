type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string;
        city: string;
    }
}



const user1: User = {
    id: 123,
    name: {
        firstName: 'mr',
        lastName: 'X',
    },
    gender: 'male',
    contactNo: '0177',
    address: {
        division: 'CTG',
        city: 'ctg'
    }
}

type isAdmin = true;
const isAdmin: boolean = true;

type Name = string;

const myName: Name = "Me.x"

//function

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => num1 + num2