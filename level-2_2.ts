function processDate(
    numArr: number[], 
    callback1: (numArr: number[]) => number[], 
    callback2: (numArr: number[]) => number[]
) {
    const duplicatedArray = callback2(callback1(numArr))

    const resultMap = new Map<number, string>();
    duplicatedArray.forEach(num => {
        resultMap.set(num, num.toString(16));
    });

    return resultMap;

}

function descendingSorter(numArr: number[]): number[]{
    return numArr.sort((a: number, b: number) => b - a);
}

function duplicator(numArr: number[]): number[]{
    return numArr.map((num) => num * 2)
}

const numArr1 = [6, 7, 90, 20, 44];
const numArr2 = [8, 2, 15, 72, 84];

console.log(processDate(numArr1, descendingSorter, duplicator));
console.log(processDate(numArr2, descendingSorter, duplicator));