const cell = document.querySelector('.cells')
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
let turn0 =true
let turnX = false
const result = document.querySelector('.result')
const bord =document.querySelector('.frame')

// this part is coded in such a way that the 1st person will get X and other person 0 and this will go on and on 
one.addEventListener('click',function(){
    if(turn0){
    one.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{one.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
two.addEventListener('click',function(){
    if(turn0){
    two.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{two.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
three.addEventListener('click',function(){
    if(turn0){
    three.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{three.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
four.addEventListener('click',function(){
    if(turn0){
    four.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{four.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
five.addEventListener('click',function(){
    if(turn0){
    five.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{five.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
six.addEventListener('click',function(){
    if(turn0){
    six.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{six.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
seven.addEventListener('click',function(){
    if(turn0){
    seven.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{seven.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
eight.addEventListener('click',function(){
    if(turn0){
    eight.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{eight.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})
nine.addEventListener('click',function(){
    if(turn0){
    nine.innerHTML = 'X'
    turn0=false
    turnX=true
    }else{nine.innerHTML = '0'
        turnX=false
        turn0=true
    }
    calc()
})

// console.log(one.innerHTML)


function calc(){ // ihave not used if else ...i've just used if statement .since this is a lil bit faster and accurate ...using if else will take a lot of time due to iterating through the loop again and again in every round will increase its time to search the exact one we want 
    console.log('here')
    if (one.innerHTML != '' && two.innerHTML !='' && three.innerHTML !='') {
        if (one.innerHTML=='X' && two.innerHTML =='X'&& three.innerHTML =='X') {
            result.innerHTML = `<h1>X wins</h1>`
            bord.style.display = 'none';
            createRefreshButton() 

        }
        else if(one.innerHTML=='0' && two.innerHTML =='0'&& three.innerHTML =='0'){
            result.innerHTML = `<h1>X wins</h1>`
            bord.style.display = 'none';
            createRefreshButton()
        }
    }
     if (four.innerHTML != '' && five.innerHTML !='' && six.innerHTML !='') {
        if (four.innerHTML=='X' && five.innerHTML =='X'&& six.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none'; 

            createRefreshButton()

        }
        else if(four.innerHTML=='0' && five.innerHTML =='0'&& six.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none';
            createRefreshButton()
        }
    }
     if (seven.innerHTML != '' && eight.innerHTML !='' && nine.innerHTML !='') {
        if (seven.innerHTML=='X' && eight.innerHTML =='X'&& nine.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none'; 
            createRefreshButton()

        }
        else if(seven.innerHTML=='0' && eight.innerHTML =='0'&& nine.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none';
            createRefreshButton()
        }
    }
     if (one.innerHTML != '' && four.innerHTML !='' && seven.innerHTML !='') {
        if (one.innerHTML=='X' && four.innerHTML =='X'&& seven.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none';
            createRefreshButton()

        }
        else if(one.innerHTML=='0' && four.innerHTML =='0'&& seven.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none';
            createRefreshButton()
        }
    }
     if (five.innerHTML != '' && two.innerHTML !='' && eight.innerHTML !='') {
        if (five.innerHTML=='X' && two.innerHTML =='X'&& eight.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none'; 
            createRefreshButton()

        }
        else if(five.innerHTML=='0' && two.innerHTML =='0'&& eight.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none'
            createRefreshButton()
        }
    }
     if (six.innerHTML != '' && nine.innerHTML !='' && three.innerHTML !='') {
        if (six.innerHTML=='X' && nine.innerHTML =='X'&& three.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none '
            createRefreshButton()

        }
        else if(six.innerHTML=='0' && nine.innerHTML =='0'&& three.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none'
            createRefreshButton()
        }
    }
     if (one.innerHTML != '' && five.innerHTML !='' && nine.innerHTML !='') {
        if (one.innerHTML=='X' && five.innerHTML =='X'&& nine.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none'
            createRefreshButton() 

        }
        else if(one.innerHTML=='0' && five.innerHTML =='0'&& nine.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none';
            createRefreshButton()
        }
    }
     if (seven.innerHTML != '' && five.innerHTML !='' && three.innerHTML !='') {
        if (seven.innerHTML=='X' && five.innerHTML =='X'&& three.innerHTML =='X') {
            result.innerHTML = "<h1>X wins</h1>"
            bord.style.display = 'none'
            createRefreshButton() 

        }
        else if(seven.innerHTML=='0' && five.innerHTML =='0' && three.innerHTML =='0'){
            result.innerHTML = "<h1>0 wins</h1>"
            bord.style.display = 'none'
            createRefreshButton()
        }
    }

}

function createRefreshButton() {
    const refreshButton = document.createElement('button');
    refreshButton.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>';
    refreshButton.addEventListener('click', () => location.reload());
    result.appendChild(refreshButton);
}