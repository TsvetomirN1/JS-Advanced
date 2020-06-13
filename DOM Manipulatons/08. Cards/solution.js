function solve() {
   const spans = document.getElementById('result').children;
   const history = document.getElementById('history');
   let [leftCard, rightCard] = ['', ''];

   const addEvent = (e) => e.addEventListener('click', clickEvent);
   Array.from(document.getElementsByTagName('img')).forEach(addEvent);

   function clickEvent(e) {
       const isLeftPlayer = e.target.parentNode['id'] === 'player1Div';

       if ((isLeftPlayer && leftCard) || (!isLeftPlayer && rightCard)) {
           return
       }

       e.target.src = 'images/whiteCard.jpg';
       e.target.removeEventListener('click', clickEvent);

       isLeftPlayer ? leftCard = e.target : rightCard = e.target;
       spans[isLeftPlayer ? 0 : 2].textContent = e.target.name;

       if (leftCard && rightCard) {
           const compareLeftToRight = Number(leftCard.name) - Number(rightCard.name);
           if (compareLeftToRight !== 0) {
               leftCard.style.border = (compareLeftToRight < 0) ? '2px solid red' : '2px solid green';
               rightCard.style.border = (compareLeftToRight > 0) ? '2px solid red' : '2px solid green';
           }
           history.textContent += `[${leftCard.name} vs ${rightCard.name}] `;
           [spans[0].textContent, spans[2].textContent, leftCard, rightCard] = ['', '', '', ''];
       }
   }
}