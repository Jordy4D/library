const myLibrary = [
    // {
    //     title: 'The Art of War',
    //     author: 'Sun Tzu',
    //     pages: 256,
    //     publishYear: 1772,
    //     genre: 'Military Strategy',
    //     isRead: 'Yes',
    // },
    // {
    //     title: 'Brave New World',
    //     author: 'Aldous Huxley',
    //     pages: 311,
    //     publishYear: 1932,
    //     genre: 'Dystopian Fiction',
    //     isRead: 'Yes',
    // },    {
    //     title: 'The Art of War',
    //     author: 'Sun Tzu',
    //     pages: 256,
    //     publishYear: 1772,
    //     genre: 'Military Strategy',
    //     isRead: 'Yes',
    // },    {
    //     title: 'The Art of War',
    //     author: 'Sun Tzu',
    //     pages: 256,
    //     publishYear: 1772,
    //     genre: 'Military Strategy',
    //     isRead: 'Yes',
    // },    {
    //     title: 'The Art of War',
    //     author: 'Sun Tzu',
    //     pages: 256,
    //     publishYear: 1772,
    //     genre: 'Military Strategy',
    //     isRead: 'Yes',
    // },
];



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

// Book.prototype.readBook = function() {
//     document.getElementById('read-btn-id').addEventListener('click', function () {
//         console.log("this is the prototype func");
//     })
// }

// const libInitReformed = function(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         const library = document.getElementById('library');

//         const newCard = document.createElement('div');
//         newCard.classList.add('bookCard');

//         const cardBookTitle = document.createElement('div')
//         const cardBookAuthor = document.createElement('div')
//         const cardBookPages = document.createElement('div')
//         const cardBookPublished = document.createElement('div')
//         const cardBookGenre = document.createElement('div')
//         const cardBookIsRead = document.createElement('div')
//         const cardReadButton = document.createElement('button')
//         const cardDeleteButton = document.createElement('button')


//         cardBookTitle.setAttribute('class', 'cardInfo');
//         cardBookTitle.setAttribute('id', 'cardBookTitle');
//         cardBookAuthor.setAttribute('class', 'cardInfo')
//         cardBookAuthor.setAttribute('id', 'cardBookAuthor')
//         cardBookPages.setAttribute('class', 'cardInfo')
//         cardBookPages.setAttribute('id', 'cardBookPages')
//         cardBookPublished.setAttribute('class', 'cardInfo')
//         cardBookPublished.setAttribute('id', 'cardBookPublished')
//         cardBookGenre.setAttribute('class', 'cardInfo')
//         cardBookGenre.setAttribute('id', 'cardBookGenre')
//         cardBookIsRead.setAttribute('class', 'cardInfo')
//         cardBookIsRead.setAttribute('id', 'cardBookIsRead')
//         cardReadButton.setAttribute('class', 'read-btn')
//         cardReadButton.setAttribute('id', 'read-btn-id')
//         cardDeleteButton.setAttribute('id', 'delete-btn')
        
//         cardBookTitle.textContent = `Title: ${book.title}`;
//         cardBookAuthor.textContent = `Author: ${book.author}`;
//         cardBookPages.textContent = `Pages: ${book.pages}`;
//         cardBookPublished.textContent = `Published: ${book.publishYear}`;
//         cardBookGenre.textContent = `Genre: ${book.genre}`;
//         cardBookIsRead.textContent = `Have you read it: ${book.isRead}`;
//         cardReadButton.textContent = `Read?`;
//         cardDeleteButton.textContent = `Delete`;

        

//         const arrBook[i] = new Book(arr.title, 
//                                     arr.author,
//                                     arr.pages,
//                                     arr.publishYear,
//                                     arr.genre,
//                                     arr.isRead)

//     }
// }


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

        cardReadButton.addEventListener('click', function() {
            // console.log('testing card read button');
            if (book.isRead === 'Yes'){
                console.log('yes test')
                cardReadButton.textContent = `Have Read: No`;
                this.appendChild(cardReadButton)

            } else if (book.isRead === 'No') {
                console.log('no test')
                
                cardReadButton.textContent = `Have Read: Yes`;
                
            }
            newCard.appendChild(cardReadButton)
            
        }) 


        cardDeleteButton.addEventListener('click', function() {
            this.parentElement.remove();
            myLibrary.splice(myLibrary.book);
            
            // libInit();
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
    console.log('preventDefault() is working!')
    
    const formBookTitle = document.getElementById('book-title')
    const formBookAuthor = document.getElementById('book-author')
    const formBookPages = document.getElementById('book-pages')
    const formBookPublish = document.getElementById('book-publish-year')
    const formBookGenre = document.getElementById('book-genre')
    const formBookHaveRead = document.getElementById('have-read')

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

 
        
    // document.querySelectorAll('.bookCard').forEach(element => {
    //     element.remove();
    // })
    
    libInit();

}


document.querySelectorAll('.bookCard').forEach(element => {
    element.querySelector('#read-btn-id').onclick(alert('buttontest'))
})








    
// window.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll(".read-btn").forEach(el => {
//         el.addEventListener('click',function (e) {
//             console.log('test');
//             this.readBook.bind(this)
            
//         });
//     });
// });

    
