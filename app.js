const question = 'グーグルアドセンス申請後、不合格時にやってくるおじさんは？';
const answers =[
    '万歳おじさん',
    '腕組おじさん',
    '涙目おじさん',
    'お辞儀おじさん'
];
const correct = '腕組おじさん';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = answers[buttonIndex];
      buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
      } else {
        window.alert('不正解!');
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