const thead = document.getElementById('thead'); 
// better to use `querySelector` and `addEventListener`
thead.onclick = (e) => {
  sortTable(e.target.cellIndex, e.target.getAttribute('data-type'));
}

function sortTable(col, dataType) {
  const tbody = document.getElementById('tbody');
  let tbodyRows = [...tbody.rows];
// if we know exactly what we search, better to use `switch`
  if (dataType === 'number') {
    tbodyRows.sort((current, next) => {
      return current.cells[col].innerText - next.cells[col].innerText;
    });
  } else if (dataType === 'string') {
    tbodyRows.sort((current, next) => {
      if (current.cells[col].innerText > next.cells[col].innerText) {
        return 1;
      } else if (current.cells[col].innerText < next.cells[col].innerText) {
        return -1;
      }
      return 0;
    });
  }

  tbody.innerHtml = ''; // why you need this?

  for (let i = 0; i < tbodyRows.length; i++) { . // try to use spread instead loop
    tbody.appendChild(tbodyRows[i]);
  }
}
