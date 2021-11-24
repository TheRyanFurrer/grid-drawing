let block = document.querySelector('.grid-block');

function changeColor() {
  console.log('hey');
  block.classList.toggle('filled');
}

block.addEventListener('click', changeColor);
