//mapped types

//map

const arrayofNum: number[] = [1, 4, 3];
const arrayofstring: string[] = ["5", "2", "3"];

const arrayofStringUsingMap: string[] = arrayofNum.map((num) => num.toString());

console.log(arrayofStringUsingMap)

const user = {
    id: 222
}

type AreaofNum = {
    height: number;
    width: number;
}

type height = AreaofNum["height"];

// type AreaofString = {
//     height: string;
//     width: string;
// }

type AreaofString = {
    [key in "height" | "Width"]: string;
}

// type AreaofBool = {
//     [key in keyof AreaofNum]: boolean;
// }

type Area<T> = {
    [key in keyof T]: T[key];
}

//key >> height >> string
// key >> width >>number

// "height" | "width"

const area1: Area<{ height: string; width: number }> = {
    height: '50',
    width: 40,
}

