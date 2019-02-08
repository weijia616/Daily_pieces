"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = require("jquery");
const $preview = jquery_1.default('img');
const $fileInput = jquery_1.default('#file_input');
$fileInput.off().on('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const img = new Image();
    reader.onload = () => {
        img.src = reader.result.toString();
        $preview.attr('src', img.src);
        console.log('data url');
        console.log($preview);
    };
    console.log('imageFile');
    console.log(file);
    if (file) {
        reader.readAsDataURL(file);
    }
});
