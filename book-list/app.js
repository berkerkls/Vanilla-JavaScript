// Book constructor
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}
 
// UI Constructor 
function UI() {}

UI.prototype.addBookToList = function(book) {
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

// Delete Book
UI.prototype.deleteBook = function(target) {
    if(target.className === "delete") {
       document.getElementById("title-value").querySelector("ul").remove()
       document.getElementById("author-value").querySelector("ul").remove()
       document.getElementById("isbn-value").querySelector("ul").remove()
       document.getElementById("delete-value").querySelector("ul").remove()
    }
}

// Clear Inputs
UI.prototype.clearInputs = function () {
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("isbn").value = ""
}

// Error Function
UI.prototype.showAlert = function (message, className) {

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

    // Delete message
    ui.showAlert("The book was deleted", "deleted")
})