const quiz = [
  {
    question: 'グーグルアドセンス申請後、不合格時にやってくるおじさんは？',
    answers: [
      '万歳おじさん',
      '腕組おじさん',
      '涙目おじさん',
      'お辞儀おじさん'
    ],
    correct:'腕組おじさん'
  },{
    question: '2022年度の流行語大賞は？',
    answers: [
      '知らんけど',
      'ブラボー！',
      'きつねダンス',
      '村神様'
    ],
    correct: '村神様'
  },{
    question: '2022年度の紅白歌合戦で大トリを務めた白組の歌手は？',
    answers: [
      'KinKi Kids',
      'ゆず',
      '福山雅治',
      '星野源'
    ],
    correct: '福山雅治'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
      } else {
        window.alert('不正解!');
      }

    quizIndex++;
    
    if(quizIndex < quizLength){
      //問題文がまだあればこちらを実行
      setupQuiz();
    } else {
      //問題数がもうなければこちらを実行
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {  
    clickHandler(e);
  });
 handlerIndex++;
}
