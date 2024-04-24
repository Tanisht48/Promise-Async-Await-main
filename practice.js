
function start() {
    
    outerAsyncFunction()
    .then(result => {
        console.log('Is This My result',result);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
}

start();

async function outerAsyncFunction() {
    try {
        const resultA = await asyncOperationA();
        console.log(resultA);
        
        const resultB = await asyncOperationB(resultA);
        console.log(resultB);

        const resultC = await asyncOperationC(resultB);
        console.log(resultC);
        
        return resultC;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function asyncOperationA() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Result A"), 1000);
    });
}

async function asyncOperationB(input) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Result B based on ${input}`), 1000);
    });
}

async function asyncOperationC(input) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Result C based on ${input}`), 1000);
    });
}

