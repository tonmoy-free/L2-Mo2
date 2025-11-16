// ?  :ternary operator : decision making
// ?? : nullish coalescing operator
//?  : optional chaining 

const userAge = 21

const biyerJonnoEligible = (age: number) => {
    if (age >= 21) {
        console.log("You are eligible");
    } else {
        console.log("You are not eligible !");
    }
};

biyerJonnoEligible(20);

const userTheme = undefined; //null

const selectedTheme = userTheme ?? 'Light theme'

console.log(selectedTheme)

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "u r gust";

const resultWithNulish = isAuthenticated ?? 'u r guest';

console.log({ resultWithTernary }, { resultWithNulish })


//optional chaining
const user: {
    address: {
        city: string;
        town: string;
        postalcode?: string;
    };
} = {
    address: {
        city: "Dhaka",
        town: "Bonani",
    },
}

const postalcode = user.address.postalcode;
console.log(postalcode)

