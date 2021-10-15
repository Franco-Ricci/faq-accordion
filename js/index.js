let accordion = document.querySelectorAll(".container__questions");
let arrows = document.getElementsByClassName("arrow");
let answer = document.querySelectorAll(".faq__answer");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    for (let j = 0; j < answer.length; j++) {
      if (j == i) {
        answer[j].classList.toggle("show");
        answer[j].classList.remove("hide");
        addStyle(j);
      } else {
        answer[j].classList.add("hide");
        answer[j].classList.remove("show");
        remove(j);
      }
    }
  });
}

const addStyle = (i) => {
  arrows[i].classList.toggle("arrow-rotate");
  accordion[i].classList.toggle("bold");
};

const remove = (i) => {
  arrows[i].classList.remove("arrow-rotate");
  accordion[i].classList.remove("bold");
};
