// object destructuring
// array destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Mezbaul',
        middleName: 'Abedin',
        lastName: 'Forhan',
    },
    gender: "male",
    favouriteColor: "black",
};

const myFavouriteColor = user.favouriteColor
const myMiddleName = user.name.middleName

const { favouriteColor: myFavouriteColorN } = user;
console.log(myFavouriteColorN);

const friends = ["karim", "Rahim", "Mahim"];

// const myBestFriend = friends[1];
const [A, myBestFriend, C] = friends;
console.log(myBestFriend)