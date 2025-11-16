// Generic Function
// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number, name: string }) => {
//     return [value];
// }

// const createArrayWithGeneric = (value:) => [value]
const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}


const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: 'Joshim',
})

// tuple
const createArrayWithTuple = <X, Y>(param1: string, param2: string) => [
    param1,
    param2
];

const createArrayTupleWithGeneric = (param1: X, param2: Y) => [
    param1,
    param2
];

const res1 = createArrayTupleWithGeneric("Mezba", false);

const res2 = createArrayTupleWithGeneric(222, {
    name: "Mezba"
});

const addStudentCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};

const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};

const strdent2 = {
    id: 321,
    name: "Jankar Mahbub",
    hasCar: true,
    married: true,
}

const result = addStudentCourse(strdent2);
console.log(result);



