const result = document.getElementById('result')
const history = document.getElementById('history')
const calculate = document.getElementById('calculate')
const reset = document.getElementById('reset')
const numbersElements = Array.from(document.querySelectorAll('.number'))
const operationElements = Array.from(document.querySelectorAll('.operation'))

let answer = 0

function main() {
    let prevNumber, nextNumber = 0
    let currentOperation = ""
    numbersElements.forEach(el => {
        el.addEventListener('click', () => {
            
            result.innerText += el.innerText
            prevNumber = Number(result.innerText)
            history.innerText += el.innerText
            
            return () => el.removeEventListener()
            
        })
        
    })


    operationElements.forEach(op => {
        op.addEventListener('click', () => {
            currentOperation = op.innerText
            history.innerText += op.innerText
            result.innerText = ""
            nextNumber = prevNumber
            prevNumber = 0

            return () => {}
        })
    })


    calculate.addEventListener('click', () => {
        answer += operation(prevNumber, nextNumber, currentOperation)
        result.innerText= answer
        console.log(answer)
        return () => {}
       
    })

    reset.addEventListener('click', () => {
        prevNumber, nextNumber,  answer = 0
        history.innerText = ""
        result.innerText = ""
        

    })

    
}

function operation(num1, num2, operator) {
    let result = 0
    switch (operator) {
        case "+":
            result += num1 + num2
            break;
        case "*":
            result += num1 * num2
            break;
        case "/":
            result += num1 / num2
            break;
        case "-":
        result += num1 - num2
            break;
    
        default:
            break;
    }
    return result
}




main()