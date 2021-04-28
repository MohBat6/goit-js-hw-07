let inputVal = document.getElementById('validation-input');
let totalLength = inputVal.getAttribute('data-length');
let intTotalLength = parseInt(totalLength, 10);
inputVal.oninput = function () {
    if (inputVal.value.length === intTotalLength) {
        inputVal.classList.remove('invalid');
        inputVal.classList.add('valid');
        return;
    }
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
};