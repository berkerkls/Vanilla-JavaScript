class Book {
    constructor(title,author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
    const valueTitle = document.getElementById("title-value")
    const valueAuthor= document.getElementById("author-value")
    const isbnValue = document.getElementById("isbn-value")
    const deleteValue = document.getElementById("delete-value")

    // TITLE
    // Create ul
    const titleUl = document.createElement("ul")
    // Create li 
    const titleIl = document.createElement("li")
    // Insert value to li
    titleIl.innerHTML = book.title
    // Append il to the ul
    titleUl.appendChild(titleIl)
    // Append ul to the title value
    valueTitle.appendChild(titleUl)

    // AUTHOR
    // Create ul
    const authorUl = document.createElement("ul")
    // Create li 
    const authorIl = document.createElement("li")
    // Insert value to li
    authorIl.innerHTML = book.author
    // Append il to the ul
    authorUl.appendChild(authorIl)
    // Append ul to the title value
    valueAuthor.appendChild(authorUl)

    // ISBN
    // Create ul
    const isbnUl = document.createElement("ul")
    // Create li 
    const isbnIl = document.createElement("li")
    // Insert value to li
    isbnIl.innerHTML = book.isbn
    // Append il to the ul
    isbnUl.appendChild(isbnIl)
    // Append ul to the title value
    isbnValue.appendChild(isbnUl)

    // Delete
    // Create ul
    const deleteUl = document.createElement("ul")
    // Create li 
    const deleteIl = document.createElement("li")
    // Insert value to li
    deleteIl.innerHTML = `<a href = "#" class= "delete">X</a>`
    // Append il to the ul
    deleteUl.appendChild(deleteIl)
    // Append ul to the title value
    deleteValue.appendChild(deleteUl)


    }

    deleteBook (target) {
        if(target.className === "delete") {
            document.getElementById("title-value").querySelector("ul").remove()
            document.getElementById("author-value").querySelector("ul").remove()
            document.getElementById("isbn-value").querySelector("ul").remove()
            document.getElementById("delete-value").querySelector("ul").remove()
         }
    }

    clearInputs() {
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("isbn").value = ""
    }

    showAlert(message, className) {
        // Create a div
    const div = document.createElement("div")
    // Add class to the div
    div.className = `alert ${className}`
    // Add text node
    div.appendChild(document.createTextNode(message))
    // Get parent
    const header = document.querySelector("header")
    // Get form
    const form= document.querySelector("#book-form")
    // Insert before
    header.insertBefore(div, form)

    // Set time out
    setTimeout(function () {
        document.querySelector(".alert").remove()
    }, 3000)
    }
}

// // Local Storage Class
// class Store {
//     static getBooks() {
//         let books;
//         if(localStorage.getItem("books") === null) {
//             books = []
//         } else {
//             books = JSON.parse(localStorage.getItem("books"))
//         }

//         return books
//     }

//     static displayBooks() {
//         const books = Store.getBooks()

//         books.forEach(function(book) {
//             const ui = new UI

//             // Add books to the UI
//             ui.addBookToList(book)
//         })
//     }

//     static addBook(book) {
//         const books = Store.getBooks()

//         books.push(book)

//         localStorage.setItem("books", JSON.stringify(books))
//     }

//     static removeBook(isbn) {
//         const books = Store.getBooks()

//         books.forEach(function (book, index) {
//             if(book.isbn === isbn) {
//                 books.splice(index, 1)
//             }
//         })

//         localStorage.setItem("books", JSON.stringify(books))
//     }
// }

// // Add event listener LS
// document.addEventListener("DOMContentLoaded", Store.displayBooks)


// Add event listeners
document.getElementById("book-form").addEventListener("submit", function (e) {

    // Get the values
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const isbn = document.getElementById("isbn").value

    // Instantiate Book
    const book = new Book(title, author, isbn)

    // Instantiate UI
    const ui = new UI()

    // Validate
    if(title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill out the form", "error")
    } else {
        // Add book to the list
        ui.addBookToList(book)

        // // Add Book to the list
        // Store.addBook(book)

        // Book added alert
        ui.showAlert("The book was added succesfully", "success")

        // Clear Inputs
        ui.clearInputs()

    }
    e.preventDefault()
})

// Add event listener for delete
document.getElementById("collection").addEventListener("click", function(e) {
    // Instantiate UI
    const ui = new UI()
    // Delete function
    ui.deleteBook(e.target)

    // Remove from LS
    // Store.removeBook(e.target.parentElement.parentElement.parentElement.previousSibling.querySelector("ul").firstChild.textContent)

    // Delete message
    ui.showAlert("The book was deleted", "deleted")

    e.preventDefault()
})