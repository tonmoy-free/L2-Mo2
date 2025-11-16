//constrain : give strict rules

type Student = { id: number, name: string }

const addStudentCourse = <T extends Student>(studentInfo: T) => {
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



