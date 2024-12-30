const display = document.querySelector('.displayField')

function appendToDisplay(number){
    console.log('button pressed');
    display.value += number
}

function clearDisplay(){
    console.log('clear button clicked');
    display.value = "";
}

function evaluateEqn(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error'
    }
}