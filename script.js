const myLibrary = [
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 256,
        publishYear: 1772,
        genre: 'Military Strategy',
        isRead: 'Yes',
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        pages: 311,
        publishYear: 1932,
        genre: 'Dystopian Fiction',
        isRead: 'Yes',
    },    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 256,
        publishYear: 1772,
        genre: 'Military Strategy',
        isRead: 'Yes',
    },    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 256,
        publishYear: 1772,
        genre: 'Military Strategy',
        isRead: 'Yes',
    },    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 256,
        publishYear: 1772,
        genre: 'Military Strategy',
        isRead: 'Yes',
    },
];

function Book(title, author, pages, publishYear, genre, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishYear = publishYear;
    this.genre = genre;
    this.isRead = isRead;

}

function addBookToLibrary() {
    // do stuff here
}





myLibrary.forEach( (book) => {
    const library = document.getElementById('library');

    const newCard = document.createElement('div');
    newCard.classList.add('bookCard');

    const cardBookTitle = document.createElement('div')
    const cardBookAuthor = document.createElement('div')
    const cardBookPages = document.createElement('div')
    const cardBookPublished = document.createElement('div')
    const cardBookGenre = document.createElement('div')
    const cardBookIsRead = document.createElement('div')
    const cardReadButton = document.createElement('button')
    const cardDeleteButton = document.createElement('button')


    cardBookTitle.setAttribute('class', 'cardInfo');
    cardBookTitle.setAttribute('id', 'cardBookTitle');
    cardBookAuthor.setAttribute('class', 'cardInfo')
    cardBookAuthor.setAttribute('id', 'cardBookAuthor')
    cardBookPages.setAttribute('class', 'cardInfo')
    cardBookPages.setAttribute('id', 'cardBookPages')
    cardBookPublished.setAttribute('class', 'cardInfo')
    cardBookPublished.setAttribute('id', 'cardBookPublished')
    cardBookGenre.setAttribute('class', 'cardInfo')
    cardBookGenre.setAttribute('id', 'cardBookGenre')
    cardBookIsRead.setAttribute('class', 'cardInfo')
    cardBookIsRead.setAttribute('id', 'cardBookIsRead')
    cardReadButton.setAttribute('id', 'read-btn')
    cardDeleteButton.setAttribute('id', 'delete-btn')


    cardBookTitle.textContent = `Title: ${book.title}`;
    cardBookAuthor.textContent = `Author: ${book.author}`;
    cardBookPages.textContent = `Pages: ${book.pages}`;
    cardBookPublished.textContent = `Published: ${book.publishYear}`;
    cardBookGenre.textContent = `Genre: ${book.genre}`;
    cardBookIsRead.textContent = `Have you read it: ${book.isRead}`;
    cardReadButton.textContent = `Read?`;
    cardDeleteButton.textContent = `Delete`;


    library.appendChild(newCard);
    newCard.appendChild(cardBookTitle)
    newCard.appendChild(cardBookAuthor)
    newCard.appendChild(cardBookPages)
    newCard.appendChild(cardBookPublished)
    newCard.appendChild(cardBookGenre)
    newCard.appendChild(cardBookIsRead)
    newCard.appendChild(cardReadButton)
    newCard.appendChild(cardDeleteButton)



})

// prototype functions for delete button, 'have read' button



function haveRead() {
    const haveReadBtn = document.getElementById('read-btn')
    haveReadBtn.click =  function() {
        console.log('read button working');
    }
}

Book.prototype.read = haveRead();
