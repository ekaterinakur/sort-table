const thead = document.querySelector('#thead');

thead.addEventListener('click', (e) => {
  sortTable(e.target.cellIndex, e.target.getAttribute('data-type'));
});

function sortTable(col, dataType) {
  const tbody = document.querySelector('#tbody');
  let tbodyRows = [...tbody.rows];

  switch (dataType) {
    case 'number':
      tbodyRows.sort((current, next) => {
        return current.cells[col].innerText - next.cells[col].innerText;
      });
      break;
    case 'string':
      tbodyRows.sort((current, next) => {
        if (current.cells[col].innerText > next.cells[col].innerText) {
          return 1;
        } else if (current.cells[col].innerText < next.cells[col].innerText) {
          return -1;
        }
        return 0;
      });
  }
  
  tbody.append(...tbodyRows); 
}
