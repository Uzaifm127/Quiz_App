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
  const sCorrectAns = questions[queInd].options[questions[queInd].correct[0]];
  marks += sCAns === sCorrectAns ? 4 : -1;
};

const multiCorrect = (mCAns) => {
  const correctOptions = questions[queInd].correct.map(
    (cAnsIndex) => questions[queInd].options[cAnsIndex]
  );
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
  options.forEach(
    (element, index) => (element.innerHTML = questions[queInd].options[index])
  );
};

const deselectOpt = () => {
  options.forEach((element) => element.classList.remove("optClick"));
};

const optHandler = (e) => {
  const currentElement = e.target;
  if (currentElement.classList.contains("optClick")) {
    if (questions[queInd].correct.length === 1) {
      currentElement.classList.remove("optClick");
      optValue = [];
    } else {
      currentElement.classList.remove("optClick");
      optValue.splice(optValue.indexOf(currentElement.innerHTML), 1);
    }
  } else {
    if (questions[queInd].correct.length === 1) {
      optValue = currentElement;
      deselectOpt();
    } else {
      optValue.push(currentElement.innerHTML);
    }
    e.target.classList.add("optClick");
  }
};

// Main Logic
options.forEach((element) => element.addEventListener("click", optHandler));

subBtn.addEventListener("click", submitLogic);

renderQuiz();
