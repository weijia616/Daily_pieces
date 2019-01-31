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
    let promise = new Promise((resolve, reject) => {
        console.log('Promise');
        resolve();
    });
    promise.then(() => {
        console.log('resolved');
    });
    console.log('Hi');
}
