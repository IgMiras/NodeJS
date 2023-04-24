let button = document.querySelector("#generate_button")

let body = document.querySelector("body")

let row = document.querySelector(".row")

let n0 = document.querySelector(".number0")
n0.style.border = "1px solid #333";
n0.style.backgroundColor = "#671045";

let n1 = document.querySelector(".number1")
n1.style.border = "1px solid #333";
n1.style.backgroundColor = "#671045";

let n2 = document.querySelector(".number2")
n2.style.border = "1px solid #333";
n2.style.backgroundColor = "#671045";

let n3 = document.querySelector(".number3")
n3.style.border = "1px solid #333";
n3.style.backgroundColor = "#671045";

let n4 = document.querySelector(".number4")
n4.style.border = "1px solid #333";
n4.style.backgroundColor = "#671045";

let n5 = document.querySelector(".number5")
n5.style.border = "1px solid #333";
n5.style.backgroundColor = "#671045";

var i = 0

let numbers = []
let numbers_strings = []

function verify_if_includes(numbers, aux){
    if (numbers.includes(aux)){
        aux = Math.floor(Math.random()*60) + 1 // generate random numbers between 1 and 60
        verify_if_includes(numbers, aux)
    }
    numbers[i] = aux
}

function generateRandomNumbers(){
    for (i=0; i<6; i++){
        let aux = Math.floor(Math.random()*60) + 1 // generate random numbers between 1 and 60
        verify_if_includes(numbers, aux)
    }
}

button.addEventListener("click", () => {
    generateRandomNumbers()
    numbers_strings = numbers.map(number => number.toString())
    for (let j=0; j<5; j++){
        if (numbers[j] <= 9){
            numbers_strings[j] = "0" + numbers_strings[j]
        }
    }
    n0.innerHTML = numbers_strings[0]
    n1.innerHTML = numbers_strings[1]
    n2.innerHTML = numbers_strings[2]
    n3.innerHTML = numbers_strings[3]
    n4.innerHTML = numbers_strings[4]
    n5.innerHTML = numbers_strings[5]
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent = "space-between";
})