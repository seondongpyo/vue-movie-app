function a() {
    console.log('a');
}

function b() {
    console.log('b');
}

a();    // a
b();    // b

//==================================

function a() {
    setTimeout(function () {
        console.log('a');
    }, 1000);
}

function b() {
    console.log('b');
}

a();
b();

// b
// a

// ==================================

function a(cb) {
    setTimeout(function () {
        console.log('a');
        cb();
    }, 1000);
}

function b() {
    console.log('b')
}

a(function () {
    b();
});

// a
// b

// ===================================

function a(cb) {
    setTimeout(function () {
        console.log('a');
        cb();
    }, 1000);
}

function b(cb) {
    setTimeout(function () {
        console.log('b');
        cb();
    }, 1000);
}

function c(cb) {
    setTimeout(function () {
        console.log('c');
        cb();
    }, 1000);
}

function d(cb) {
    setTimeout(function () {
        console.log('d');
        cb();
    }, 1000);
}

// callbak 지옥
a(function () {
    b(function () {
        c(function () {
            d();
        });
    });
});

// ====================================

// Promise
function a() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('a');
            resolve();
        }, 1000);
    });
}

function b() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('b');
            resolve();
        }, 1000);
    });
}

function c() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('c');
            resolve();
        }, 1000);
    });
}

function d() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('d');
            resolve();
        }, 1000);
    });
}

// a().then(() => {
//     return b();
// }).then(() => {
//     return c();
// })

a()
    .then(() => b())
    .then(() => c())
    .then(() => d());

// await : Promise를 리턴하는 함수 앞에 사용 가능
// → a라는 함수가 실행되는 동안 대기하고 나서 이후 코드가 실행됨
// → async 함수 내에서만 작동함!!
async function asyncFunction() {
    await a()
    await b()
    await c()
    await d()
    console.log('done');
}

// reject : 비동기 코드에서 에러가 발생했을 때 실행
function a() {
    return new Promise((resolve, reject) => {
        if (isError) {
            reject('Error Message!');
        }

        setTimeout(() => {
            console.log('a');
            resolve('Done!');
        }, 1000);
    });
}

a()
    .then((res) => {   // resolve가 실행될 때
        console.log(res);
    }) 
    .catch((error) => {  // reject가 실행될 때
        console.log(error);
    })
    .finally(() => {

    });

// Example
async function asyncFunc() {
    // async, await의 then(), catch()를 사용하려면 try ~ catch 구문을 사용해야 함
    try {
        const res = await a();
        console.log(res);

    } catch (error) {    // reject가 실행될 때
        console.log(error);

    } finally {
        console.log('Done!');
    }
}    

asyncFunc();
