var myLibrary = localStorage.userLibrary ? JSON.parse(localStorage.userLibrary) : [
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

function setStorage() {
    localStorage.setItem("userLibrary", JSON.stringify(myLibrary));
}


function Book(title, author, pages, publishYear, genre, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishYear = publishYear;
    this.genre = genre;
    this.isRead = isRead;

    this.readBook = function() {
        // console.log('this is the readBook func');        
        console.log('this is a test of readBook!')
        // if (this.isRead === 'Yes') {
        //     this.isRead = 'No';

        // } else if (this.isRead === 'No') {
        //     this.isRead = 'Yes';
        // }
        

    }

}


const libInit = function() {
    myLibrary.forEach( (book) => {
        const library = document.getElementById('library');

        const newCard = document.createElement('div');
        newCard.classList.add('bookCard');
        newCard.setAttribute('id', 'bookCardId')

        const cardBookTitle = document.createElement('div')
        cardBookTitle.setAttribute('class', 'cardInfo');
        cardBookTitle.setAttribute('id', 'cardBookTitle');
        
        
        const cardBookAuthor = document.createElement('div')
        cardBookAuthor.setAttribute('class', 'cardInfo')
        cardBookAuthor.setAttribute('id', 'cardBookAuthor')
        
        const cardBookPages = document.createElement('div')
        cardBookPages.setAttribute('class', 'cardInfo')
        cardBookPages.setAttribute('id', 'cardBookPages')
        
        
        const cardBookPublished = document.createElement('div')
        cardBookPublished.setAttribute('class', 'cardInfo')
        cardBookPublished.setAttribute('id', 'cardBookPublished')
        
        const cardBookGenre = document.createElement('div')
        cardBookGenre.setAttribute('class', 'cardInfo')
        cardBookGenre.setAttribute('id', 'cardBookGenre')
        
        const cardBookIsRead = document.createElement('div')
        cardBookIsRead.setAttribute('class', 'cardInfo')
        cardBookIsRead.setAttribute('id', 'cardBookIsRead')
        
        const cardReadButton = document.createElement('button')
        cardReadButton.setAttribute('class', 'read-btn')
        cardReadButton.setAttribute('id', 'read-btn-id')
        
        
        const cardDeleteButton = document.createElement('button')
        cardDeleteButton.setAttribute('id', 'delete-btn')




        cardBookTitle.textContent = `Title: ${book.title}`;
        cardBookAuthor.textContent = `Author: ${book.author}`;
        cardBookPages.textContent = `Pages: ${book.pages}`;
        cardBookPublished.textContent = `Published: ${book.publishYear}`;
        cardBookGenre.textContent = `Genre: ${book.genre}`;
        // cardBookIsRead.textContent = `Have you read it: `;
        cardReadButton.textContent = `Have Read: ${book.isRead}`;
        cardDeleteButton.textContent = `Delete`;
        

        // Book.prototype.readBook = function() {



        library.appendChild(newCard);
        newCard.appendChild(cardBookTitle)
        newCard.appendChild(cardBookAuthor)
        newCard.appendChild(cardBookPages)
        newCard.appendChild(cardBookPublished)
        newCard.appendChild(cardBookGenre)
        newCard.appendChild(cardBookIsRead)
        newCard.appendChild(cardReadButton)
        newCard.appendChild(cardDeleteButton)

        cardReadButton.addEventListener('click', function () {
            
            if (book.isRead === 'Yes'){
                book.isRead = 'No'
                cardReadButton.setAttribute('id', 'read-btn-id-yes')
                cardReadButton.textContent = `Have Read: ${book.isRead}`;

            } else if (book.isRead === 'No') {
                book.isRead = 'Yes'
                cardReadButton.setAttribute('id', 'read-btn-id-no')
                cardReadButton.textContent = `Have Read: ${book.isRead}`;
                
            }

            setStorage()
        }) 


        cardDeleteButton.addEventListener('click', function() {
            this.parentElement.remove();
            const objRemove = myLibrary.findIndex(value => value.title === book.title )
            myLibrary.splice(objRemove, 1)
            setStorage()
        })


    })
}

libInit();

// function addBookToLibrary() {
//     // do stuff here

// }

const librarySubmitBtn = document.querySelector("#submit-btn")
librarySubmitBtn.addEventListener("click", addBookToLibrary, false)


function addBookToLibrary(event) {
    event.preventDefault();
    
    
    // document.querySelectorAll('#read-btn-id').addEventListener('click', function () {
    //     console.log("this is the prototype func");
    // })  
    
    const newBook = new Book(formBookTitle.value, 
        formBookAuthor.value,
                            formBookPages.value,
                            formBookPublish.value,
                            formBookGenre.value,
                            formBookHaveRead.value )

                            
    myLibrary.push(newBook)
    
    
    
    document.querySelectorAll('.bookCard').forEach(element => {
        element.remove();
    })
    
    libInit();
    setStorage()
    
}

setStorage();

console.log('test')

// form validation



const addBookForm = document.getElementById('add-book-form')

const formBookTitle = document.getElementById('book-title')
const bookTitleError = document.getElementById('book-title-error')

const formBookAuthor = document.getElementById('book-author')
const bookAuthorError = document.getElementById('book-author-error')

const formBookPages = document.getElementById('book-pages')
const bookPagesError = document.getElementById('book-pages-error')

const formBookPublish = document.getElementById('book-publish-year')
const bookPublishError = document.getElementById('book-publish-year-error') 

const formBookGenre = document.getElementById('book-genre')
const bookGenreError = document.getElementById('book-genre-error')

const formBookHaveRead = document.getElementById('have-read')






formBookTitle.addEventListener('input', (event) => {

    if (formBookTitle.validity.valid) {
        bookTitleError.textContent = "";
        bookTitleError.className = "error"

    } else {
        showTitleError();

    }
})

formBookAuthor.addEventListener('input', (event) => {

    if (formBookAuthor.validity.valid) {

        bookAuthorError.textContent = "";
        bookAuthorError.className = "error"

    } else {
        showAuthorError();

    }
})

formBookPages.addEventListener('input', (event) => {

    if (formBookPages.validity.valid) {
        bookPagesError.textContent = "";
        bookPagesError.className = "error"

    } else {
        showPagesError();

    }
})

formBookPublish.addEventListener('input', (event) => {

    if (formBookPublish.validity.valid) {
        bookPublishError.textContent = "";
        bookPublishError.className = "error"

    } else {
        showPublishError();
    }
})

formBookGenre.addEventListener('input', (event) => {

    if (formBookGenre.validity.valid) {
        bookGenreError.textContent = "";
        bookGenreError.className = "error"

    } else {
        showGenreError()

    }
})

addBookForm.addEventListener('submit', (event) => {
    if (!formBookTitle.validity.valid 
        // || 
        // !formBookAuthor.validity.valid ||
        // !formBookPages.validity.valid ||
        // !formBookPublish.validity.valid ||
        // !formBookGenre.validity.valid
        ) 
        {
            
            event.preventDefault()
            
            showTitleError();
            showAuthorError();
            showPagesError();
            showPublishError();
            showGenreError()
            
    }

})

function showTitleError() {
    if (formBookTitle.validity.valueMissing) {
        bookTitleError.textContent = "Please enter a book title"
    } else if (formBookTitle.validity.tooShort) {
        bookTitleError.textContent = "Please enter 2 or more characters"
    }

    bookTitleError.className = "error active"
}

function showAuthorError() {
    if (formBookAuthor.validity.valueMissing) {
        bookAuthorError.textContent = "Please enter the author's name";
    } else if (formBookAuthor.validity.tooShort) {
        bookAuthorError.textContent = "Please enter 3 or more characters"
    }

    bookAuthorError.className = "error active"
}

function showPagesError() {
    if (formBookPages.validity.valueMissing) {
        bookPagesError.textContent = "Please enter number of pages";
    } else if (formBookPages.validity.rangeOverflow) {
        bookPagesError.textContent = "Please read a shorter book"
    } else if (isNaN(formBookPages)) {
        bookPagesError.textContent = "Please enter numbers only"
    } else
    
    bookPagesError.className = "error active"

}

function showPublishError() {
    if (formBookPublish.validity.valueMissing) {
        bookPublishError.textContent = "Please enter year of publication";
    } else if (formBookPublish.validity.rangeOverflow) {
        bookPublishError.textContent = "Can't be a book published in the future"
    } else if (isNaN(formBookPublish)) {
        bookPublishError.textContent = "Please enter numbers only"
    }
    
    bookPublishError.className = "error active"

}

function showGenreError() {
    if (formBookGenre.validity.valueMissing) {
        bookGenreError.textContent = "Please enter the genre";
    } else if (formBookGenre.validity.tooShort) {
        bookGenreError.textContent = "Please enter 4 or more characters"
    }
    
    bookGenreError.className = "error active"

}