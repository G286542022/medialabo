// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let k = document.querySelector('span#kaisu');
k.textContent = kaisu;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  let a = document.querySelector('span#answer ');
  a.textContent = yoso;



  let p = document.querySelector('p#result')
for(let i = 0; i < kaisu; i=i+1){
  
  if(kotae === yoso){
    p.textContent = '正解です．おめでとう!';
  }else if(kotae <= yoso){
    p.textContent = 'まちがい．答えはもっと小さいですよ';
  }else if(kotae >= yoso){
    p.textContent = 'まちがい．答えはもっと大きいですよ';
  }
  
}
  
}
