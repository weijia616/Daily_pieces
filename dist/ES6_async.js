var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function timeout(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve => {
                setTimeout(resolve, ms);
            }));
        });
    }
    function asyncConsoleLog(string, ms) {
        return __awaiter(this, void 0, void 0, function* () {
            yield timeout(ms);
            console.log(string);
        });
    }
    asyncConsoleLog('hello world after 50ms', 50);
}
{
    function getTitle(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(url);
            let html = yield response.text();
            return html.match(/<title>([\s\S]+)<\/title>/i)[1];
        });
    }
    getTitle('https://tc39.github.io/ecma262/').then(console.log);
}
