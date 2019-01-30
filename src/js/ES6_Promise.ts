
function timeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}

timeOut(100).then((value) => {
    console.log(value);
});