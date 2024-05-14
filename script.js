function Library () {
    
    
    let myLibrary = [
        {
            title: 'The Art of War',
            author: 'Sun Tzu',
            genre: 'Military Strategy',
            isRead: 'Yes',
        },
        {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            genre: 'Dystopian Fiction',
            isRead: 'Yes',
        }
    ];


    const libraryInit = () => {
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
            cardBookGenre.textContent = `Genre: ${book.genre}`;
            // cardBookIsRead.textContent = `Have you read it: `;
            cardReadButton.textContent = `Have Read: ${book.isRead}`;
            cardDeleteButton.textContent = `Delete`;
            
    
    
    
    
            library.appendChild(newCard);
            newCard.appendChild(cardBookTitle)
            newCard.appendChild(cardBookAuthor)
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
            }) 
    
    
            cardDeleteButton.addEventListener('click', function() {
                this.parentElement.remove();
                const objRemove = myLibrary.findIndex(value => value.title === book.title )
                myLibrary.splice(objRemove, 1)
            })
    
    
        })
    }
 
    
    return { libraryInit, addBookToLibrary, myLibrary }

}


class Book {
    
    constructor (title, author, genre, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
    }

    addBookToLibrary = (event) => {
        event.preventDefault();
        
        const formBookTitle = document.getElementById('book-title')
        const formBookAuthor = document.getElementById('book-author')
        const formBookGenre = document.getElementById('book-genre')
        const formBookHaveRead = document.getElementById('have-read')
    
        // document.querySelectorAll('#read-btn-id').addEventListener('click', function () {
        //     console.log("this is the prototype func");
        // })  
    
        const newBook = new Book(formBookTitle.value, 
                                formBookAuthor.value,
                                formBookGenre.value,
                                formBookHaveRead.value )
    
    
        mainLibrary.myLibrary.push(newBook)
    
        
            
        document.querySelectorAll('.bookCard').forEach(element => {
            element.remove();
        })
        
        libraryInit();
    
    }
    
    
    isBookRead = () => {
            // console.log('this is the readBook func');        
            console.log('this is a test of bookRead!')
            // if (this.isRead === 'Yes') {
            //     this.isRead = 'No';
    
            // } else if (this.isRead === 'No') {
            //     this.isRead = 'Yes';
            // }
            
    
        }




    
}








// libraryInit();

// function addBookToLibrary() {
//     // do stuff here

// }

// const librarySubmitBtn = document.querySelector("#submit-btn")
// librarySubmitBtn.addEventListener("click", addBookToLibrary, false)






    
