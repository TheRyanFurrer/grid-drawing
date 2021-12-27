function paintGrid() {
  let grid = document.querySelector('#grid-container');

  grid.addEventListener('click', (event) => {
    if (event.target.className === 'grid-block unfilled') {
      event.target.classList.add('filled');
    } else if (event.target.className === 'grid-block unfilled filled') {
      event.target.classList.remove('filled');
    }
  });
}

function resetGrid() {
  const reset = document.querySelector('#reset-btn');
  let filledBlocks = document.querySelectorAll('.filled');

  reset.addEventListener('click', (event) => {
    if (event.target.id === 'reset-btn') {
      for (let elem of filledBlocks) {
        elem.classList.remove('filled');

        console.log('reset');
      }
    }
  });
}

paintGrid();
resetGrid();
