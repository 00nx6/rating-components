
// grabbing containers
const preCont = document.querySelector('.pre');
const postCont = document.querySelector('.post');

const backBttn = document.querySelector('.postStar')
const review = document.querySelector('.userFeedback')

// assigning rating feedback + some style stuff
const bttns = Array.from(document.querySelectorAll('.bttn'));
const submitBttn = document.querySelector('.bttnSubmit');
let serviceRating = 0;
// removes submit bttn
bttns.pop()

bttns.forEach(bttn => {
    bttn.addEventListener('click', classToggle)
})

function classToggle() {
    // if one of the buttons already has a selected class, remove it
    bttns.forEach(bttn => {
        if (bttn.classList.contains('selected')) bttn.classList.remove('selected')
    })
    // adds selected class to current bttn
    this.classList.add('selected');
    // saves the value of current dataset
    serviceRating = this.dataset.key

}


submitBttn.addEventListener('click', submit);
backBttn.addEventListener('click', submit)

function submit() {
    preCont.classList.toggle('hidden');
    postCont.classList.toggle('hidden');
    review.innerText = `You selected ${serviceRating} out of 5`
}

