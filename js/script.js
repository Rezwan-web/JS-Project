let calculator =document.querySelector('.calculator')
let input =document.querySelector('input')
let button =document.querySelector('button')

button.addEventListener('click',function(){

    if( input.value == ''){
        alert('plsase enter an number')
    }

    for(let =i = 1; i<11; i++){

        calculator.innerHTML += input.value + 'x' + i + '=' + input.value*i + '<br>'
    }

})