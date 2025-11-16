interface Delveloper<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X
}

interface BrandCharaWatch {
    heratRate: string;
    stopWatch: boolean;
}

interface AppleWatch {
    heratRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}

const poorDeveloper: Delveloper<BrandCharaWatch, {
    brand: 'Yamaha',
    engineCapacity: '200cc',
}> = {
    name: 'Mr.Poor',
    salary: 20,
    device: {
        brand: 'lenovo',
        model: 'A21',
        releasedYear: "2010"
    },
    smartWatch: {
        heratRate: "200",
        stopWatch: true,
    }

}
const richDeveloper: Delveloper<AppleWatch> = {
    name: 'Mr.Rich',
    salary: 100,
    device: {
        brand: 'hp',
        model: 'X34',
        releasedYear: "2050"
    },
    smartWatch: {
        heratRate: "200",
        callSupport: true,
        calculator: true,
        aiFeature: true,
    },
    bike: null,

}


const add = (num1: number, num2: number = 0) => num1 + num2;

add(2)