function timeOut(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    });
}
timeOut(100).then(function (value) {
    console.log(value);
});
