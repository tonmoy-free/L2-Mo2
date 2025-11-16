// type guard

// in typeof

type AlphaNeumaric = number | string;

const add = (num1: AlphaNeumaric, num2: AlphaNeumaric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {

        return num1 + num2;
    } else {
        num1.toString() + num2.toString()
    }
}

add(2, 2); //4

add(2, '2'); //22

add("2", 2)


// in guard

type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: "Admin"
};

const gertUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        console.log(`This ${user.name} and his role is : ${user.role}`);
    } else {
        console.log(`This ${user.name}`);
    }

};

gertUserInfo({ name: "Normal", role: "Admin" });
