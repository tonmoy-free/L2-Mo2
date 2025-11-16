//Spread operator

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['Arif', 'Nowrin'];

friends.push(...schoolFriends);

console.log(friends)

const user = { name: "Mezba", PhoneNo: " 0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo }
console.log(userInfo)


// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Sent Invitaion to ${friend1}`),
//         console.log(`Sent Invitaion to ${friend2}`),
//         console.log(`Sent Invitaion to ${friend3}`)
// };

// sendInvite('pintu', 'chintu', 'bulbil')


//rest operator
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send Invitaion to ${friend}`))
};

sendInvite('pintu', 'chintu', 'bulbil')