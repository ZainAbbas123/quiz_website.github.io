var tot_question = questions.length;
var cuurentquestion = 0;
var previousquestion = 0;
var score = 0;
var container = document.getElementById('quizContainer');
var question = document.getElementById('question');
var opt1 =  document.getElementById('opt1');
var opt2 =  document.getElementById('opt2');
var opt3 =  document.getElementById('opt3');
var opt4 =  document.getElementById('opt4');
var nextButton = document.getElementById('next-button');
var resultCont = document.getElementById('result');
var ty = document.getElementById("opt5");

function loadQuestion(question_index)
{
  var q = questions[question_index];
  question.textContent = (question_index + 1) +'.' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}


function loadnextquestion()
{
  var selected_Option = document.querySelector('input[type=radio]:checked');
  if(!selected_Option)
  {
    alert("please select your answer");
    return;
  }

  ty.textContent = ' ';

  var answer = selected_Option.value;
  if(questions[cuurentquestion].answer == answer)
  {
    score = score + 1;
  }
  selected_Option.checked = false;
  cuurentquestion++;
  if(cuurentquestion == tot_question - 1)
  {
    nextButton.textContent = "finish";
  }
  if(cuurentquestion == tot_question)
  {
    container.style.display = 'none';
    resultCont.style.display = '';

    if(score == tot_question)
    {
      swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
         });
           resultCont.textContent = 'Your Score' + '  '+'  is'  +' ' + score;
           return;
    }
    else {
      container.style.display = 'none';
      resultCont.style.display = 'text-align:center';
      resultCont.textContent = 'Your Score' + '  '+'  is'  +' ' + score;
      return;
    }

  }
  loadQuestion(cuurentquestion);
}
loadQuestion(cuurentquestion);

function loadshowanswer()
{
  question_index = cuurentquestion;
  var q = questions[question_index];
  ty.textContent = q.reason;
  return;
}
function loadpreviousquestion()
{
  previousquestion = cuurentquestion;
 if(previousquestion == 0){
    alert("sorry This is your First Question");
    return;
 }
 
    cuurentquestion--;

question_index = cuurentquestion;
 var q = questions[question_index];
  question.textContent = (question_index + 1) +'.' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;

  var selected_Option = document.querySelector('input[type=radio]:checked');
  ty.textContent = ' ';
  var answer = selected_Option.value;
  if(questions[cuurentquestion].answer == answer)
  {
    score = score;
  }
  else
  {
    score--;
  }
  selected_Option.checked = false;
}