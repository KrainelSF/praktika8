'use strict'

btn.addEventListener('mousedown', function(){
    btn.style.color = 'red';
})

btn.addEventListener('mouseup', function(){
    btn.style.color = '';
})



btn2.addEventListener('dblclick', function(){
    alert('Дабл клик')
})



btn3.addEventListener('mouseover', function(){ 
    btn3.style.background = 'yellow';
})

btn3.addEventListener('mouseout', function(){
    btn3.style.background = '';
})

let count = +counter.innerHTML;
btn4.addEventListener('mousemove', function(){
    count++;
    counter.innerHTML = count;
})



document.body.addEventListener('keydown', function(event){
if (event.key == 'r'){
    document.body.style.background = 'red'
}
if (event.key == 'R'){
    document.body.style.background = 'red'
}
})
document.body.addEventListener('keydown', function(event){
    if (event.key == 'g'){
        document.body.style.background = 'green'
    }
    if (event.key == 'G'){
        document.body.style.background = 'green'
    }
})
document.body.addEventListener('keydown', function(event){
    if (event.key == 'b'){
        document.body.style.background = 'blue'
    }
    if (event.key == 'B'){
        document.body.style.background = 'blue'
    }
})

document.body.addEventListener('keyup', function(event){
    if (event.key == 'r'){
        document.body.style.background = ''
    }
    if (event.key == 'R'){
        document.body.style.background = ''
    }
    })
    document.body.addEventListener('keyup', function(event){
        if (event.key == 'g'){
            document.body.style.background = ''
        }
        if (event.key == 'G'){
            document.body.style.background = ''
        }
    })
    document.body.addEventListener('keyup', function(event){
        if (event.key == 'b'){
            document.body.style.background = ''
        }
        if (event.key == 'B'){
            document.body.style.background = ''
        }
    })