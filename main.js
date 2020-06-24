'use strict';

{
   document.querySelector('button').addEventListener('click', () => {
      let fizz = document.querySelectorAll('input')[0];
      let buzz = document.querySelectorAll('input')[1];

      let fizzValue = fizz.value;
      let BuzzValue = buzz.value;
      let FizzNumInput = parseInt(fizz.value); //FizzNumInput入力値を整数で取得
      let BuzzNumInput = parseInt(buzz.value); //FizzNumInput入力値を整数で取得

      let ul = document.querySelector('ul'); //ulを選択

      if (
         //小数を含むかどうかを判別
         fizzValue.match(/^-?[0-9]+\.[0-9]+$/) ||
         BuzzValue.match(/^-?[0-9]+\.[0-9]+$/) ||
         Number.isInteger(FizzNumInput) !== true ||
         Number.isInteger(BuzzNumInput) !== true ||
         FizzNumInput === 0 ||
         BuzzNumInput === 0 ||
         FizzNumInput === '' ||
         BuzzNumInput === ''
      ) {
         ul.textContent = '整数値を入力してください';
         return;
         //負の整数を入力するとループしてしまうのを防ぐため作成-記号が含まれていた場合の処理
      } else if (fizzValue.match(/^-[0-9]+$/) || BuzzValue.match(/^-[0-9]+$/)) {
         ul.textContent = '正の整数値を入力してください';
         return;
      }

      //¥　while文作成========================

      let i = 1;
      let j = 1;

      //Fizz Buzz FizzBuzzのアウトプット
      while (i * FizzNumInput <= 99 || j * BuzzNumInput <= 99) {
         let Li = document.createElement('li'); //Fizz用のliを生成
         if (i * FizzNumInput < j * BuzzNumInput) {
            Li.textContent = `Fizz ${i * FizzNumInput}`;
            ul.appendChild(Li);
            i++;
         } else if (j * BuzzNumInput < i * FizzNumInput) {
            Li.textContent = `Buzz ${j * BuzzNumInput}`;
            ul.appendChild(Li);
            j++;
         } else {
            Li.textContent = `FizzBuzz ${i * FizzNumInput}`;
            ul.appendChild(Li);
            i++;
            j++;
         }
      }
   });
}
