// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let string = "";

// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         let btnText = e.target.innerHTML.trim();

//         if (btnText === '=') {
//             string = eval(string).toString();  // ✅ always keep it as string
//             input.value = string;
//         } else if (btnText === 'AC') {
//             string = "";
//             input.value = string;
//         } else if (btnText === 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } else {
//             string += btnText;
//             input.value = string;
//         }
//     });
// });



let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

// let arr = Array.from(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let btnText = button.innerHTML.trim();

        if (btnText === '=') {
            try {
                string = eval(string).toString();  // evaluate expression
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btnText === 'AC') {
            string = "";
            input.value = string;
        } else if (btnText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (btnText === '×') {
            string += '*';   // ✅ replace × with *
            input.value = string;
        } else if (btnText === '÷' || btnText === '/') {
            string += '/';   // ✅ replace ÷ or / with /
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});

