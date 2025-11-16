//keyof : type Operator

type RichPeoplesVehicle = {
    car: string;  //key : value
    bike: string;
    cng: string;
};

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle1 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle = "bike";
const myVehicle1: MyVehicle1 = "bike";

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: "Mezba",
    address: {
        city: "ctg",
    },
};

// const myId = user.id;
const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

// console.log(myId, myAddress, myName)

const getPropretyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
};

// const result = getPropretyFromObj(user, "name")

// console.log(result)

const product = {
    brand: 'HP'
}

const result1 = getPropretyFromObj(product, "brand");

console.log(result1)



