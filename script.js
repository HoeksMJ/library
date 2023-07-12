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

const BOOK_ONE = new Book("Mere Christianity", "CS Lewis", "256", true);
const BOOK_TWO = new Book("The Meaning of Marriage", "Timothy Keller", "352", true);
addBookToLibrary(BOOK_ONE);
addBookToLibrary(BOOK_TWO);
displayNewBook(BOOK_ONE);
displayNewBook(BOOK_TWO);

function displayNewBook(book){
    let div = document.getElementById("library");
    let newDiv = document.createElement("div");
    newDiv.id = `bookItem${library.indexOf(book)}`;
    newDiv.className = "libraryDiv";
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

    let removeBtn = document.createElement("div");
    removeBtn.addEventListener("click", () => {
        removeBook(removeBtn.id);
    })
    let removeBtnTxt = document.createTextNode("Remove");
    removeBtn.id = `${library.indexOf(book)}`;
    removeBtn.appendChild(removeBtnTxt);
    newDiv.appendChild(removeBtn);

    let editBtn = document.createElement("div");
    let editBtnTxt = document.createTextNode("Edit");
    editBtn.id = removeBtn.id;
    editBtn.appendChild(editBtnTxt);
    newDiv.appendChild(editBtn);

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

const NEWBOOKBTN = document.getElementById("newBookBtn").addEventListener("click", () => {
    openForm();
})

function removeBook(index) {
    let div = document.getElementById("library");
    let book = document.getElementById(`bookItem${index}`)
    library.splice(index, 1);
    div.removeChild(book);
}