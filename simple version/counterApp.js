let output = document.querySelector('#output');

const displayMessage = () => {
    alert('Goood Morniiing Vietnam!');
}

document.addEventListener('click',(event) => {
    if (event.target.id === 'add'){
        let result = Number(output.innerText) + 1;

        if (result > 10){
            displayMessage();
            result = 0;
        }

        output.innerText = result;
    }
    else if (event.target.id === 'subtract'){
        let result = Number(output.innerText) - 1;

        if (result < 10){
            displayMessage();
            result = 0;
        }

        output.innerText = result;
    }
})