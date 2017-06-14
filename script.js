
var questions=[
  {
    'question':'W którym roku nastąpił chrzest Polski?',
    'answer0':'966r.',
    'answer1':'1037r.',
    'answer2':'955r.',
    'answer3':'999r.',
    'correct_answer':'966r.',
    'been_or_not':false
  },
  {
    'question':'Największa bitwa pancerna?',
    'answer0':'Bitwa o Tobruk',
    'answer1':'Bitwa nad Sommą',
    'answer2':'Bitwa na Łuku Kurskim',
    'answer3':'Bitwa o Narwik',
      'correct_answer':'Bitwa na Łuku Kurskim',
    'been_or_not':false
  },
  {
  'question':'Z jakiego kraju trafiła do Polskii marchew?',
'answer0':'Z Niemiec',
'answer1':'Z Francji',
'answer2':'Z Hiszpanii',
'answer3':'Z Włoch',
  'correct_answer':'Z Włoch',
'been_or_not':false
    },
    {
'question':'Słowa którego dyktatora są treścią słynnej "Czerwonej książeczki"?',
'answer0':'Mao Zedong',
'answer1':'Włodzimierz Lenin',
'answer2':'Józef Stalin',
'answer3':'Czang Kaj-szek',
  'correct_answer':'Mao Zedong',
'been_or_not':false
    },
    {
'question':'Która z tych substancji psychoaktywnych nie zalicza się do psychodelików?',
'answer0':'Psylocybina',
'answer1':'Dimetylotryptamina (DMT)',
'answer2':'Meskalina',
'answer3':'Kodeina',
  'correct_answer':'Kodeina',
'been_or_not':false
    },
    {
'question':'Skąd pochodzą czarne łabędzie?',
'answer0':'Afryki',
'answer1':'Są mutacją łabędzi białych',
'answer2':'Australii',
'answer3':'Chin',
  'correct_answer':'Australii',
'been_or_not':false
}
];
document.addEventListener("DOMContentLoaded",function wywolanie(){
 // buttons();
changing_questions();
});
var win_score=0;
var getting_board=document.querySelector('.board');
var getting_question=getting_board.querySelector('.question');
var getting_answer=getting_board.querySelector('.answers');
var getting_answers=getting_answer.querySelectorAll('.answer');
function changing_questions(){
var number=Math.floor((Math.random()*questions.length-1)+1);
console.log(number);
if(questions[number].been_or_not==true){
  changing_questions();
}
else{
  questions[number].been_or_not=true;
  getting_question.textContent=questions[number].question;
  for(i=0;i<getting_answers.length;i++){
  getting_answers[i].textContent=questions[number][ `answer${ i }` ] ;
  getting_answers[i].value=questions[number][ `answer${ i }` ];
getting_answers[i].addEventListener('click',function answering(){
  if(this.value==questions[number].correct_answer){
    alert('wygrałeś');
    win();
  }
  else{
    alert('przegrałeś');
    // lose();
  }

});
}}};
function win(){
win_score++;
for(i=0;i<win_score;i++){
  var getting_prize=getting_board.querySelector('.prize');
  var getting_awards=getting_prize.querySelectorAll('.award');
  getting_awards[i].classList.add('active');
}
changing_questions();
}

// function lose(){
//   alert('przegrałeś');
// return;
//
// }
