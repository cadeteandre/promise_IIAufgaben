function sayHello(name: string, callback: (message: string) => void) {
    callback(name)
}

function greetingCallback(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello('Lukas', greetingCallback);
sayHello('Laura', greetingCallback);
sayHello('Juliana', greetingCallback);