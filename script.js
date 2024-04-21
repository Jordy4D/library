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
    }
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
    console.log(book);

    const newCard = document.createElement('div');
    newCard.classList.add('bookCard');

    newCard.textContent = `Title: ${book.title}`;
    // newCard.textContent = `Author: ${book.author}`;
    // newCard.textContent = `pages: ${book.pages}`;
    // newCard.textContent = `Published: ${book.publishYear}`;
    // newCard.textContent = `Genre: ${book.genre}`;
    // newCard.textContent = `Have you read it: ${book.isRead}`;

    library.appendChild(newCard);
 
})
