const ordersDiv = document.getElementById('orders') as HTMLDivElement;

document.getElementById('startSimulation')?.addEventListener('click', () => {
    ordersDiv.innerHTML = '';

    processOrder(1, 'Cola', ordersDiv);
    processOrder(2, 'Sprite', ordersDiv);
    processOrder(3, 'Fanta', ordersDiv);
});

function order(customerNumber: number, customerDiv: HTMLDivElement) {
    return new Promise<HTMLDivElement>((resolve, reject) => {
        if(customerDiv) {
            customerDiv.innerHTML += `<h3>${customerNumber}. Person in der Reihe</h3>`;
            customerDiv.innerHTML += '<p>📝 Bestellung aufnehmen</p>';
            setTimeout(() => resolve(customerDiv), getRandomDurationInMilliseconds());
        } else { 
            reject('Error');
        }
    })
}

function pay(customerDiv: HTMLDivElement) {
    return new Promise<HTMLDivElement>((resolve, reject) => {
        if(customerDiv) {
            customerDiv.innerHTML += '<p>💳 Bezahlung durchführen</p>';
            setTimeout(() => resolve(customerDiv), getRandomDurationInMilliseconds());
        } else { 
            reject('Error!')
        }
    })
}

function makeBurger(customerDiv: HTMLDivElement) {
    return new Promise<HTMLDivElement>((resolve, reject) => {
        if(customerDiv) {
            customerDiv.innerHTML += '<p>🍔 Bereite einen Burger vor</p>';
            setTimeout(() => {
                customerDiv.innerHTML += '<p>🍔 Burger fertig</p>';
                resolve(customerDiv);
            }, getRandomDurationInMilliseconds())
        } else {
            reject('Error!')
        }
    })
}

function makeFries(customerDiv: HTMLDivElement) {
    return new Promise<HTMLDivElement>((resolve, reject) => {
        if(customerDiv) {
            customerDiv.innerHTML += '<p>🍟 Bereite Pommes vor</p>';
            setTimeout(() => {
                customerDiv.innerHTML += '<p>🍟 Pommes fertig</p>';
                resolve(customerDiv);
            }, getRandomDurationInMilliseconds())
        } else {
            reject('Error!')
        }
    })
}

function makeDrink(drink: string, customerDiv: HTMLDivElement) {
    return new Promise<HTMLDivElement>((resolve, reject) => {
        if(customerDiv) {
            customerDiv.innerHTML += `<p>🥤 Fülle ${drink} ein</p>`;
            setTimeout(() => {
                customerDiv.innerHTML += `<p>🥤 ${drink} fertig</p>`;
                resolve(customerDiv);
            }, getRandomDurationInMilliseconds())
        } else {
            reject('Error!')
        }
    })
}

function processOrder(customerNumber: number, drink: string, ordersDiv: HTMLDivElement) {
    
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');
    ordersDiv.appendChild(customerDiv);

    order(customerNumber, customerDiv)
    .then(() => pay(customerDiv))
    .then(() => makeBurger(customerDiv))
    .then(() => makeFries(customerDiv))
    .then(() => makeDrink(drink, customerDiv))
    .then(() => {
        customerDiv.innerHTML += '<p>✅ Bestellung abgeschlossen.</p>';
    })
    .catch((error) => console.log(error));
    
}

function getRandomDurationInMilliseconds(): number {
    const min = 2000;
    const max = 12000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}