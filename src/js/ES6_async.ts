{
    async function timeout(ms) {
        await new Promise((resolve => {
            setTimeout(resolve, ms);
        }))
    }

    async function asyncConsoleLog(string, ms) {
        await timeout(ms);
        console.log(string);
    }

    asyncConsoleLog('hello world after 50ms', 50);
}

{
    async function getTitle(url) {
        let response = await fetch(url);
        let html = await response.text();
        return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    }

    getTitle('https://tc39.github.io/ecma262/').then(console.log);
}