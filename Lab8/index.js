const closeBlock = (button) => {
  const container = document.getElementById("blocks-container");
  const block = button.parentNode;

  const innerBlock = block.querySelector('.block');
  if (innerBlock) {
    container.appendChild(innerBlock);
}

  block.style.display = "none";
}

const toggleCell = (cell) => {
  cell.classList.toggle('active');
}

const calculateSum = () => {
  const activeCells = document.querySelectorAll('.active');
  let sum = 0;

  activeCells.forEach((cell) => {
      sum += parseInt(cell.textContent);
  });

  document.getElementById('result').textContent = 'Сума активованих комірок: ' + sum;
}

const resetCells = () => {
  const activeCells = document.querySelectorAll('.active');

  activeCells.forEach(function(cell) {
      cell.classList.remove('active');
  });

  document.getElementById('result').textContent = '';
}