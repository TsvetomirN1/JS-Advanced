function solve() {
  const searchField = document.getElementById('searchField');
  const searchButton = document.getElementById('searchBtn');
  const rows = document.querySelectorAll('tbody td');

  searchButton.addEventListener('click', doSearch);
  searchField.onkeypress = function (event) { if ((event.key || event.code) === 'Enter') doSearch();};

  function doSearch() {
      clearSelection();
      selectRows(searchField.value.toLowerCase())
  }

  function selectRows(text) {
      if (text) {
          for (let i = 0; i < rows.length; i++) {
              if (rows[i].textContent.toLowerCase().includes(text)) {
                  rows[i].parentNode.className = 'select';
              }
          }
          searchField.value = '';
      }
  }

  function clearSelection() {
      Array.from(document.getElementsByClassName('select')).forEach(e => e.classList.remove('select'));
      // [...document.getElementsByClassName('select')].forEach(e => e.classList.remove('select'));
  }
}