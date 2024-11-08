const output = document.querySelector('#output') as HTMLParagraphElement;

const promise_1: Promise<string> = new Promise((resolve, reject) => {
    const success: boolean = true;
    if(success) {
        setTimeout(() => {
            resolve('Exercise 1 done.');
        }, 2000)
    } else {
        reject("We don't know if the Exercise has been done");
    }
})

const promise_2: Promise<string> = new Promise((resolve, reject) => {
    const success: boolean = true;
    if(success) {
        setTimeout(() => {
            resolve('Exercise 2 done.');
        }, 3000)
    } else {
        reject("We don't know if the Exercise has been done");
    }
})

const promise_3: Promise<string> = new Promise((resolve, reject) => {
    const success: boolean = true;
    if(success) {
        setTimeout(() => {
            resolve('Exercise 3 done.');
        }, 4000)
    } else {
        reject("We don't know if the Exercise has been done");
    } 
})

Promise.all([promise_1, promise_2, promise_3]).then((resp: [string, string, string]) => {
    resp.forEach((result) => {
        output.innerHTML += `<p>${result}</p>`;
    })
})
    .catch((error) => console.error(error))
    .finally(() => {
    output.innerHTML += '<p>Homework done</p>';
})