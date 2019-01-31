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
