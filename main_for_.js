'use strict';

{
   document.querySelector('button').addEventListener('click', () => {
      let fizz = document.getElementById('fizzInput');
      let buzz = document.getElementById('BuzzInput');

      let fizzValue = fizz.value;
      let BuzzValue = buzz.value;
      let FizzNumInput = parseInt(fizz.value); //FizzNumInput入力値を整数で取得
      let BuzzNumInput = parseInt(buzz.value); //FizzNumInput入力値を整数で取得

      let ul = document.querySelector('ul'); //ulを選択

      for (let i = 1; i < 100; i++) {
         // fizzbuzz の処理
         let Li = document.createElement('li'); //Fizz用のliを生成
         //両方の入力値が同じ倍数のパターン
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

         if (
            Number.isInteger(FizzNumInput) !== true || Number.isInteger(BuzzNumInput) !== true
         ) {
            ul.textContent = '整数値を入力してください';
         }

         if (
            fizzValue.match(/^-?[0-9]+\.[0-9]+$/) || BuzzValue.match(/^-?[0-9]+\.[0-9]+$/)
         ) {
            ul.textContent = '少数ではなく、整数を入力してください';
         }
      }
   });
}
