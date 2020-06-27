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
         FizzNumInput === '' ||
         BuzzNumInput === ''
      ) {
         ul.textContent = '整数値を入力してください';
         return;
         //負の整数を入力するとループしてしまうのを防ぐため作成-記号が含まれていた場合の処理
      } else if (
         fizzValue.match(/^-[0-9]+$/) ||
         BuzzValue.match(/^-[0-9]+$/) ||
         FizzNumInput === 0 ||
         BuzzNumInput === 0
      ) {
         ul.textContent = '正の整数値を入力してください';
         return;
      }

      let j = 1;

      for (let i = 1; i < 100; i++) {
         // fizzbuzz の処理
         let Li = document.createElement('li'); //Fizz用のliを生成
         //入力値がかぶらないパターン
         if (i % FizzNumInput === 0 && i % BuzzNumInput === 0) {
            Li.textContent = `FizzBuzz ${i}`;
            ul.appendChild(Li);
            //FizzNumInputが倍数のパターン
         } else if (i % FizzNumInput === 0) {
            Li.textContent = `Fizz ${i}`;
            ul.appendChild(Li);
            //BuzzNumInputが倍数のパターン
         } else if (i % BuzzNumInput === 0) {
            Li.textContent = `Buzz ${i}`;
            ul.appendChild(Li);
         }
      }
   });
}
