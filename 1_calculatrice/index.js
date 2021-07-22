let total = 0;

function addition(x) {
    total += x; 
    return total;
}

function substraction(x) {
    total -= x; 
    return total;
}

function division(x) {
    total === 0 ? total = x : total /= x;
    return total;
}

function multiplication(x) {
    total === 0 ? total = x : total *= x;
    return total;
}

function reset() {
    total = 0;
}