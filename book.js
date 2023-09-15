document.getElementById('fetchBooks').addEventListener('click', function () {
    fetch('https://www.anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = ''; 
            data.forEach(book => {
                const row = bookList.insertRow();
                const cell = row.insertCell(0);
                
                cell.textContent = book.name;
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});