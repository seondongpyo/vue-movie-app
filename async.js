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
    .then(() => d())