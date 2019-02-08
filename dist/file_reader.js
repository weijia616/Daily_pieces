"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = require("jquery");
const $preview = jquery_1.default('img');
const $fileInput = jquery_1.default('#file_input');
$fileInput.off().on('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const img = new Image();
    let tempCanvas, ctx, newDataUrl;
    reader.onload = () => {
        img.src = reader.result.toString();
        img.width = 100;
        img.height = 40;
        $preview.attr('src', img.src);
        img.onload = () => {
            tempCanvas = document.createElement("canvas");
            tempCanvas.width = 100;
            tempCanvas.height = 40;
            ctx = tempCanvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 100, 40);
            newDataUrl = tempCanvas.toDataURL(file.type, 0.7);
            console.log(newDataUrl);
            var newImg = document.createElement("img");
            newImg.src = newDataUrl;
            $preview.attr('src', newDataUrl);
            console.log(newImg);
        };
    };
    // console.log('imageFile');
    // console.log(file);
    if (file) {
        reader.readAsDataURL(file);
    }
});
// references: https://github.com/josefrichter/resize/blob/master/public/preprocess.js
