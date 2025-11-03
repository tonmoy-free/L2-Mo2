// const obj = {
//     nextlevel: { courseId: "Level2" },
//     "Programming Hero": { courseId: "Level2" }
// };


// console.log(obj["Programming Hero"]);



// const obj={};
// obj.nextlevel= {courseId : "Level2"};
// obj[true]= {couresId : " Level1"}
// console.log(obj)


const course1 ={name :  "Programming Hero"};
const course2 ={name : "Next Level Web Development"};

const map = new Map();

map.set(course1 ,{courseId :  "Level1"})
map.set(course2 ,{courseId :  "Level2"})


console.log(map)
console.log(map.size)
console.log(map.has(course1));
