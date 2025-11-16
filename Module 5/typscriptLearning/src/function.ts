//function
//arow function, normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}


const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(1, 2)

//object=> function =>method

const poorUser = {
    name: "mezba",
    balance: 0,
    addBalacce(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorUser.addBalacce(10000);


const arr: number[] = [1, 4, 6]

const sqrArray = arr.map((elem: number): number => elem * elem)