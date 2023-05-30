const btn = document.querySelector('.div-inp button');
const input = document.querySelector('#inp');
const lowOrHigh = document.querySelector('.high-or-low');
const chances = document.querySelector('p');

chances.textContent = 10;

function randomiser() {
  return Math.floor(Math.random() * 100) + 1;
}
  const randomResult = randomiser();

 btn.addEventListener('click', () => {
    
    if (randomResult > input.value) {
        lowOrHigh.textContent = 'too low';
        chances.textContent--
      } else if (randomResult < input.value) {
        lowOrHigh.textContent = 'too high';
        chances.textContent--
      } else if (randomResult == input.value) {
        lowOrHigh.textContent = 'you won';
        alert('YOU WON :DDD');
      }if(chances.textContent <= '0'){
        alert('YOU LOSE :((( RESTART THE PAGE')
      }
 })
