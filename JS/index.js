import questions from "./questions.js";

// Variables
const mainQue = document.querySelector(".mainQue");
const queNum = document.querySelector(".queNum");
const mainBody = document.querySelector("#mainBody");
const options = document.querySelectorAll(".options");
const subBtn = document.querySelector(".submitBtn");
let [marks, queInd] = [0, 0];
let optValue = [];

// Functions
const singleCorrect = (sCAns) => {
  if (sCAns === questions[queInd].options[questions[queInd].correct[0]]) {
    marks += 4;
  } else {
    marks -= 1;
  }
};

const multiCorrect = (mCAns) => {
  const correctOptions = questions[queInd].correct.map((cAnsIndex) => {
    return questions[queInd].options[cAnsIndex];
  });
  const allOptCorrect = mCAns.every((element) =>
    correctOptions.includes(element)
  );
  if (correctOptions.length === mCAns.length) {
    marks += allOptCorrect ? 4 : -2;
  } else if (correctOptions.length > mCAns.length) {
    if (correctOptions.length === 2 && mCAns.length === 1) {
      marks += allOptCorrect ? 2 : -2;
    } else {
      marks += allOptCorrect ? mCAns.length : -2;
    }
  } else if (correctOptions.length < mCAns.length) {
    marks -= 2;
  }
};

const submitLogic = () => {
  if (queInd <= questions.length - 1) {
    if (optValue.length !== 0) {
      questions[queInd].correct.length === 1
        ? singleCorrect(optValue.innerHTML)
        : multiCorrect(optValue);
      optValue = [];
    } else {
      marks = marks;
    }
    deselectOpt();
    queInd++;
    queInd <= questions.length - 1 ? renderQuiz() : renderScore();
  }
  console.log(marks);
};

const renderScore = () => {
  mainBody.innerHTML = "";
  const scoreContainer = document.createElement("div");
  scoreContainer.classList.add("scoreContainer");
  scoreContainer.innerHTML = `Your Score is ${marks} out of ${
    questions.length * 4
  }`;
  mainBody.append(scoreContainer);
};

const renderQuiz = () => {
  queNum.innerHTML = "Q." + (queInd + 1); // Imp Concept
  mainQue.innerHTML = questions[queInd].question;
  options.forEach((element, index) => {
    element.innerHTML = questions[queInd].options[index];
  });
};

const deselectOpt = () => {
  options.forEach((element) => {
    element.classList.remove("optClick");
  });
};

const selectOpt = (e) => {
  if (questions[queInd].correct.length === 1) {
    optValue = e.target;
    deselectOpt();
  } else {
    optValue.push(e.target.innerHTML);
  }
  e.target.classList.add("optClick");
};

const unselectOpt = (e) => {
  e.target.classList.remove("optClick");
};

// Main Logic
options.forEach((element) => {
  element.addEventListener("click", selectOpt);
});

subBtn.addEventListener("click", submitLogic);

renderQuiz();
