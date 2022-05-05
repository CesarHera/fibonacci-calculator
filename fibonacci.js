function fibonacci(n) {
    let sum, fn1 = 0, fn2 = 1;
    
    if(n <= 0) {
        return 0;
    } else if(n == 1) {
        return 0;
    } else if(n == 2) {
        return 1;
    }
    
    for(n -= 2; n > 0; n--) {
        sum = fn1 + fn2;
        fn1 = fn2;
        fn2 = sum;
    }
    
    return sum;
}

const list = document.querySelector('.list'); 
function printFibonaccis(n) {
    const fragment = document.createDocumentFragment();
    
    let child = list.lastElementChild;
    while(child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
    
    for(let i = 1; i <= n; i++) {
        if(i == 1478) {
            break;
        }

        let item = document.createElement('li');
        item.setAttribute('class', 'list__item');

        let item__index = document.createElement('span');
        item__index.setAttribute('class', 'list__item__index');
        item__index.textContent = `${i}`;
        item.appendChild(item__index);

        let item__result = document.createTextNode(`${fibonacci(i)}`);
        item.appendChild(item__result);

        fragment.appendChild(item);
    }
    
    list.appendChild(fragment);
}

function submit() {
    printFibonaccis(input.value);
}

const input = document.querySelector('.submit__fibonacci-input');
input.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        submitButton.click();
    }
});

const submitButton = document.querySelector('.submit__fibonacci-submit');
submitButton.toggleAttribute('onclick', true);
submitButton.setAttribute('onclick', `submit();`);