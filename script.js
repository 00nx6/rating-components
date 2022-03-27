/*
grab the buttons
when clicked, add class "active"
when clicked somewhere else, remove clicked class
after clicked, check which has click
get its data key and add it rating variable

when clicked submit, export selected value
*/ 

const bttnsCont = document.querySelector('.buttonCont');
const bttns = Array.from(bttnsCont.children)
bttns.pop()
bttns.forEach(bttn => {
    bttn.addEventListener('click', classToggle)
});

function classToggle() {
    this.classList.add('selected');
    
}