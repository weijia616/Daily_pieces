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
/**
 * Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 * 当所有的promise 都有结果返回了， 新的Promise.all才会调用回调函数
 * 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
 * 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
 * Output: ['hello', 'p2 has Error']
 */
{
    const p1 = new Promise(((resolve, reject) => {
        resolve('hello');
    }))
        .then(result => result)
        .catch(e => e);
    const p2 = new Promise(((resolve, reject) => {
        throw new Error('p2 has Error');
    }))
        .then(result => result)
        .catch(e => e);
    Promise.all([p1, p2])
        .then(result => console.log(result))
        .catch(e => console.log(e));
}
