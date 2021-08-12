
// add selector
let inputLable = document.querySelector('#inout_lable')
function handleButton(obj) {
    let valuButton = obj.innerHTML
    // console.log(valuButton);

    if (valuButton == '=') {
        inputLable.innerHTML = eval(inputLable.innerHTML)
    } else if (valuButton == 'AC') {
        inputLable.innerHTML = '0'
    } else {
        if (inputLable.innerHTML == '0') {
            inputLable.innerHTML=valuButton;
        }else{
            inputLable.innerHTML +=valuButton
        }
    }
}
