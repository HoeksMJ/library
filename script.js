let library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book){
    library.push(book);
}

function displayNewBook(book){
    let div = document.getElementById("library");
    let newDiv = document.createElement("div");
    div.appendChild(newDiv);

    let titleHeader = document.createElement("h1");
    let bookTitle = document.createTextNode(`${book.title}`);
    titleHeader.appendChild(bookTitle);
    newDiv.appendChild(titleHeader);

    let authorHeader = document.createElement("p");
    let bookAuthor = document.createTextNode(`${book.author}`);
    authorHeader.appendChild(bookAuthor);
    newDiv.appendChild(authorHeader);

    let pagesHeader = document.createElement("p");
    let bookPages = document.createTextNode(`${book.pages}`);
    pagesHeader.appendChild(bookPages);
    newDiv.appendChild(pagesHeader);

    let readBox = document.createElement("input");
    readBox.setAttribute("type", "checkbox");
    readBox.setAttribute("class", "checkbox")
    if (book.isRead == true) {
        readBox.checked = true;
    }
    newDiv.appendChild(readBox);
}

function openForm(){
    document.getElementById("container").style.display = "flex";
}

function closeForm(){
    document.getElementById("titleInput").value = ""
    document.getElementById("authorInput").value = ""
    document.getElementById("pagesInput").value = ""
    document.getElementById("isRead").checked = false
    document.getElementById("container").style.display = "none";
}

const CANCELBTN = document.getElementById("cancelBtn").addEventListener("click", () => {
    closeForm();
})

const DONEBTN = document.getElementById("doneBtn").addEventListener("click", () => {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let isRead = document.getElementById("isRead").checked;
    let newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    displayNewBook(newBook);
    closeForm();
})

const NEWBOOKBTN = document.getElementById("newBookBtn").addEventListener("click", ()=>{
    openForm();
})