// array ,object

let bazarList: string[] = ["egg", " milk", "sugar"];

bazarList.push("dim")

let mixeArr: (string | number)[] = ["agg", 12, "milk", 1]

mixeArr.push("alu")

let coordinates: [number, number] = [20, 30]

let couple = ["Husband", "Wife"];

let MezbaNameAndRoll: [string, number] = ["Mezba", 79]

MezbaNameAndRoll[0] = "halalu"

let destination: [string, string, number] = ["Dhaka", "Chattagram", 3];

//reference type : object

const user: {
    // readonly organization: string; //access modifier .Only see no access to change

    organization: string;

    //organization: "Programming Hero"; ata name change hobe na.

    firstName: string;
    middleName?: string; //dite o pare. na o dite pare
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Pogramming Hero",
    firstName: 'Mazba',
    middleName: 'Abedin',
    lastName: 'Forhan',
    isMarried: true,
}

user.organization = "metleaf";

console.log(user)