///grab everything
const ACCORDION = document.querySelector(".accordion");
const items = ACCORDION.querySelectorAll("li");
const questions = ACCORDION.querySelectorAll(".question");
//functions


function toggleAnswer() {
    const toggleOpen = this.parentNode;

    //when one li is clicked other ones are closed
    items.forEach(item => {
        if (toggleOpen == item) {
            toggleOpen.classList.toggle("open");
            return;///after this nothing else happens
        }
        console.log(this.parentNode);
        item.classList.remove("open");
    });



}

//event listeners

questions.forEach(question => {
    question.addEventListener("click", toggleAnswer);
});