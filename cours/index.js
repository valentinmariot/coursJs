// Selecteurs
const h4 = document.querySelector('h4');
const askContainer = document.querySelector('.click-event');


askContainer.addEventListener('click', () => {
    askContainer.classList.toggle('ask-clicked');
})
// console.log(askContainer);