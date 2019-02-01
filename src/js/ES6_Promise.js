{
    // function timeOut(ms) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve, ms, 'done');
    //     })
    // }
    // timeOut(100).then((value) => {
    //     console.log(value);
    // });
}
/**
 *  在当前脚本所有同步任务执行完成后 才会执行promise指定的回调函数then，
 *  所以输出顺序为 promise -- hi -- resolved
 */
{
    var promise = new Promise(function (resolve, reject) {
        console.log('Promise');
        resolve();
    });
    promise.then(function () {
        console.log('resolved');
    });
    console.log('Hi');
}

/**
 * 调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。
 * 这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
 * 所以输出为 2 -- 1
 */
{
    new Promise((resolve, reject) => {
        resolve(1);
        console.log(2);
    }).then(r => {
        console.log(r);
    })
}

/**
 * 一般来说，调用resolve或reject以后，Promise 的使命就完成了，
 * 后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
 * 所以，最好在它们前面加上return语句
 */
{
    new Promise((resolve, reject) => {
        return resolve(1);
        // 后面的语句不会执行
        console.log(2);
    })
}

/**
 *  promise抛出一个错误，就被catch方法指定的回调函数捕获。
 */
{
    let promise = new Promise((resolve, reject) => {
        throw new Error('error test');
    })

    promise.catch((error) => {
        console.log(error);
    })
}

/**
 * then/catch 好于 then（resolved，reject），因为then/catch也可以捕获then方法中执行的错误
 *
 */
{
   let promise = new Promise((resolve, reject) => {
       console.log('promise resolved');
   });

   //then(resolved, reject)
   promise.then((data) => {
       console.log(data);
   }, (error) => {
       console.log(error);
   })

    //then/catch
    promise
        .then((data) => {
            console.log(data);
    })
        .catch((error) => {
            console.log(error);
        })
}


/**
 *  Promise 会吃掉错误 -- Promise 内部的错误不会影响到 Promise 外部的代码
 *  所以输出是：
 *  Uncaught (in promise) ReferenceError: x is not defined
 *  123
 */
{
    let someAsyncThing = () => {
        return new Promise((resolve, reject) => {
            resolve(x + 2);
        });
    };

    someAsyncThing().then(() => {
        console.log('every thing is fine.');
    });

    setTimeout(() => {
        console.log(123);
    }, 2000)
}