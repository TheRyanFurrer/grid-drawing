function paintGrid() {
  let grid = document.querySelector('#grid-container');

  grid.addEventListener('click', event => {
    if (event.target.className === 'grid-block unfilled') {
      event.target.classList.add('filled');
    } else if (event.target.className === 'grid-block unfilled filled') {
      event.target.classList.remove('filled');
    }
  });
}

paintGrid();

