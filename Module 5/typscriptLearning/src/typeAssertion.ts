//if i know better than typeScript is called type assertion.TypeScript will believe me blindly. and he will assume my type  is the right type.

let anything: any;

anything = 222;

// (anything as string).

const kgToGMConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(" ")
        return `Converted output is: ${Number(input) * 1000}`
    }
}

const result1 = kgToGMConverter(2) as number;
console.log(result1);
const result2 = kgToGMConverter("2 KG");
console.log(result1);


type CustomError = {
    message: string;
}


try {

} catch (err) {
    console.log((err as CustomError).message);
}
