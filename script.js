let books = [
    {
        id: 1,
        title: 'The Book Thief',
        author: 'Markus Zusak'
    },
    {
        id: 2,
        title: 'Beautiful World Where Are You',
        author: 'Sally Rooney'
    },
    {
        id: 3,
        title: 'Island of the missing trees',
        author: 'Elif Shafak'
    },
    {
        id: 4,
        title: 'Tvrdjava',
        author: 'Mesa Selimovic'
    },
    {
        id: 5,
        title: 'The Promise',
        author: 'Damon Galgut'
    },
    {
        id: 6,
        title: 'The Stranger',
        author: 'Albert Camus'
    },
    {
        id: 7,
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens'
    },
    {
        id: 8,
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        id: 9,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J. K. Rowling'
    },
    {
        id: 10,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling'
    },
    {
        id: 11,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J. K. Rowling'
    },
    {
        id: 12,
        title: 'The Name of the Rose',
        author: 'Umberto Eco'
    },
    {
        id: 13,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J. K. Rowling'
    },
    {
        id: 14,
        title: 'Gone Girl',
        author: 'Gillian Flynn'
    },
    {
        id: 15,
        title: 'The Lovely Bones',
        author: 'Alice Sebold'
    }
];

const searchInput = document.getElementById('search');
const authorSelect = document.getElementById('authorSelect');
const tBody = document.querySelector('.table tbody');

let booksCopy = books;
let columnIds = ['id', 'title', 'author'];
const columns = columnIds.length;

function refresh(){

    tBody.innerHTML = '';
    loadBooks();

}

function loadBooks(){

    books.forEach(book => {
        let newRow = document.createElement('tr');
        columnIds.forEach(column => {
            let newCell = document.createElement('td');
            newCell.innerText = book[column];
            newRow.append(newCell);
        });
        
        tBody.appendChild(newRow);
    });
}

function filterTitle(titleInput){
    
    if(!titleInput || titleInput.length === 0){
        console.log('if');
        //books = booksCopy;
    } else{
        books = booksCopy.filter(book => book.title.toLowerCase().includes(titleInput.toLowerCase()));
        //console.log('else');
    }

    refresh();
}

function loadAuthorSelect(){

    let authors = booksCopy.map(book => {
        return book.author;
    });
    authors = Array.from(new Set(authors));

    authors.forEach(author => {
        const option = document.createElement('option');
        option.setAttribute('value', author);
        option.innerText = author;

        authorSelect.appendChild(option);
    });

}

function filterAuthor(selectedAuthor){

    if(!selectedAuthor){
        books = booksCopy;
    } else{
        books = booksCopy.filter(book => book.author.toLowerCase().includes(selectedAuthor.toLowerCase()));
    }

    refresh();

}

searchInput.addEventListener('input', () => {

    filterTitle(searchInput.value);
    //console.log(books);
    authorSelect.value = '';

});

authorSelect.addEventListener('change', () => {

    filterAuthor(authorSelect.value);
    searchInput.value = '';

});

loadBooks();
loadAuthorSelect();