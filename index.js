const questions = document.querySelector('#questions');
const QuestionOptions = document.querySelector('#QuestionOptions');
let index = 0;
let corr = 0
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Ribosome", "Nucleus", "Mitochondria", "Chloroplast"],
      answer: "Mitochondria"
    },
    {
      question: "Which country is famous for the tulip festival?",
      options: ["Netherlands", "Belgium", "France", "Italy"],
      answer: "Netherlands"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Lungs", "Skin"],
      answer: "Skin"
    },
    {
      question: "Which country is famous for the pyramids?",
      options: ["Greece", "Egypt", "Syria", "Iraq"],
      answer: "Egypt"
    }
  ];




const DisplayQuiz = () => {

    questions.textContent = quizQuestions[index]['question'];
    QuestionOptions.innerHTML = '';
    quizQuestions[index]['options'].forEach((element,OptionIndex) => {
        createElement(element,OptionIndex)
    });


}

function createElement(OptionsElement,OptionIndex) {
  const Element = document.createElement('li');
  Element.className = 'liOptions'
  Element.textContent = `option ${OptionIndex} ${OptionsElement}`
  QuestionOptions.appendChild(Element)
  
  Element.addEventListener('click',function (e) {
    console.log(OptionsElement)
    handleElements(OptionsElement)
  })

}


function handleElements(SelectedAnswer) {
console.log(SelectedAnswer)
const correctAnswer = quizQuestions[index]['answer']
    
if (SelectedAnswer === correctAnswer) {
    // console.log('correct Answer');
    corr++
}else{
    // console.log('False Answer');
}

index++;
if (index < quizQuestions.length) {
    DisplayQuiz();
} else {
    // console.log('Quiz Complete');
}
}

DisplayQuiz()