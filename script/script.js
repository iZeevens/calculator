'use strict'

const output = document.querySelector('.output-result'),
      calcBtns = document.querySelectorAll('.calculator-btn');

let lastNumber = 0,
    lastNumberFloat = 0.0,
    calcMethod = '';

const operatiors = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '/': (a, b) => (b !== 0) ? a / b : 'Ошибка: деление на ноль'
}


function specBtn(btn, output) {

    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target.textContent;

            if (!isNaN(target) || target == '.') {
                console.log('number')
                if (parseFloat(output.textContent) === 0) {
                    output.textContent = target;
                } else {
                    output.textContent += target;
                }
            } else {
                if (target !== '=' && target !== 'DEL' && target !== 'C' && target !== '.') {
                    calcMethod = target;
                    lastNumber = parseFloat(output.textContent);
                    output.textContent = '0';
                }  else if (target == 'DEL') {
                    if (output.textContent.length <= 1) {
                        output.textContent = '0'
                    } else {
                        output.textContent = output.textContent.slice(0, -1);
                        calcMethod = '';
                    }
                } else if (target == 'C') {
                    output.textContent = '0';
                    calcMethod = '';
                } else if (target == '=' && operatiors.hasOwnProperty(calcMethod)) {
                    const result = operatiors[calcMethod](lastNumber, parseFloat(output.textContent));

                    output.textContent = String(result);
                }
            }
        })
    })
}

specBtn(calcBtns, output)

// numberBtn.forEach(item => {
//     item.addEventListener('click', (e) => {
        
//         for (let i = 0; i <= 10; i++) {
//             if (parseInt(e.target.textContent) == i) {
//                 if (parseInt(output.textContent) == 0) {
//                     output.textContent = '';
//                     output.textContent += String(i);
//                     break
//                 }
//                 output.textContent += String(i);
//                 break;
//             }
//         }


//     })
// }); 

// for (let i = 0; i <= 10; i++) { Старый варинат
//     if (parseInt(target) == i) {
//         if (parseInt(output.textContent) == 0) {
//             output.textContent = '';
//             output.textContent += String(i);
//             break
//         }

//         output.textContent += String(i);
//         break;
//     }
// }

// specialBtn.forEach(item => {
//     item.addEventListener('click', (e) => {

//         switch(e.target.textContent) {
//             case '/':
//                 lastNumber = parseInt(output.textContent);
//                 output.textContent = '';
//                 calcMethod = '/';
//                 break;
//             case '×':
//                 lastNumber = parseInt(output.textContent);
//                 output.textContent = '';
//                 calcMethod = '*';
//                 break;
//             case '+':
//                 lastNumber = parseInt(output.textContent);
//                 output.textContent = '';
//                 calcMethod = '+';
//                 break;
//             case '-':
//                 lastNumber = parseInt(output.textContent);
//                 output.textContent = '';
//                 calcMethod = '-';
//                 break;
//             case 'C':
//                 output.textContent = '';
//                 calcMethod = '';
//                 break;
//             case 'DEL':
//                 output.textContent = output.textContent.slice(0, -1);
//                 calcMethod = '';
//         }

//         if (e.target.textContent == '=') {
//             console.log(lastNumber)
//             switch(calcMethod) {
//                 case '/':
//                     output.textContent = String(lastNumber / parseInt(output.textContent));
//                     break;
//                 case '*':
//                     output.textContent = String(lastNumber * parseInt(output.textContent));
//                     break;
//                 case '-':
//                     output.textContent = String(lastNumber - parseInt(output.textContent));
//                     break;
//                 case '+':
//                     output.textContent = String(lastNumber + parseInt(output.textContent));
//                     break;    
//             }
//         }        
//     })


// })