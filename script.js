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

let bookExists = false;
let currentBookIndex = 0;
const BOOK_ONE = new Book("Mere Christianity", "CS Lewis", "256", true);
const BOOK_TWO = new Book("The Meaning of Marriage", "Timothy Keller", "352", true);
addBookToLibrary(BOOK_ONE);
addBookToLibrary(BOOK_TWO);
displayBook(BOOK_ONE);
displayBook(BOOK_TWO);

function displayBook(book){
    let libraryDiv = document.getElementById("library");
    if (bookExists == false){
        let bookIndex = library.indexOf(book);
        let newDiv = document.createElement("div");
        newDiv.id = `bookItem${bookIndex}`;
        newDiv.className = "libraryDiv";
        libraryDiv.appendChild(newDiv);

        let titleHeader = document.createElement("h1");
        let bookTitle = document.createTextNode(`${book.title}`);
        titleHeader.appendChild(bookTitle);
        newDiv.appendChild(titleHeader);

        let authorHeader = document.createElement("p");
        let bookAuthor = document.createTextNode(`${book.author}`);
        authorHeader.appendChild(bookAuthor);
        newDiv.appendChild(authorHeader);

        let pagesHeader = document.createElement("p");
        let bookPages = document.createTextNode(`${book.pages} pages`);
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
        let removeBtnTxt = document.createTextNode("Remove");
        removeBtn.addEventListener("click", () => {
            removeBook(removeBtn.id);
            resetIds();
        })
        removeBtn.id = `${bookIndex}`;
        removeBtn.appendChild(removeBtnTxt);
        newDiv.appendChild(removeBtn);

        let editBtn = document.createElement("div");
        let editBtnTxt = document.createTextNode("Edit");
        editBtn.addEventListener("click", () => {
            currentBookIndex = editBtn.id;
            bookExists = true;
            openForm();
            setForm(currentBookIndex);
        })
        editBtn.id = `${bookIndex}`;
        editBtn.appendChild(editBtnTxt);
        newDiv.appendChild(editBtn);
    }
    else {
        let titleElement = libraryDiv.children[currentBookIndex].children[0];
        let authorElement = libraryDiv.children[currentBookIndex].children[1];
        let pagesElement = libraryDiv.children[currentBookIndex].children[2];
        let isReadElement = libraryDiv.children[currentBookIndex].children[3];
        titleElement.innerHTML = book.title;
        authorElement.innerHTML = book.author;
        pagesElement.innerHTML = `${book.pages} pages`;
        book.isRead == true? isReadElement.checked = true : isReadElement.checked = false;
    }
}

function openForm(){
    document.getElementById("container").style.display = "flex";
}

function setForm(index){
    document.getElementById("titleInput").value = library[index].title;
    document.getElementById("authorInput").value = library[index].author;
    document.getElementById("pagesInput").value = library[index].pages;
    document.getElementById("isRead").checked = library[index].isRead;
}

function closeForm(){
    document.getElementById("titleInput").value = ""
    document.getElementById("authorInput").value = ""
    document.getElementById("pagesInput").value = ""
    document.getElementById("isRead").checked = false
    document.getElementById("container").style.display = "none";
}

function resetIds() {
    for (let i = 0; i < library.length; i++){
        let libraryDiv = document.getElementById("library");
        libraryDiv.children[i].id = `bookItem${i}`;
        libraryDiv.children[i].children[4].id = i;
        libraryDiv.children[i].children[5].id = i;
    }
}

function createBook(){
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let isRead = document.getElementById("isRead").checked;
    let newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    displayBook(newBook);
}

function removeBook(index) {
    let libraryDiv = document.getElementById("library");
    let book = document.getElementById(`bookItem${index}`)
    library.splice(index, 1);
    libraryDiv.removeChild(book);
}

function editBook() {
    library[currentBookIndex].title = document.getElementById("titleInput").value;
    library[currentBookIndex].author = document.getElementById("authorInput").value;
    library[currentBookIndex].pages = document.getElementById("pagesInput").value;
    library[currentBookIndex].isRead = document.getElementById("isRead").checked;
    displayBook(library[currentBookIndex]);
};

const CANCELBTN = document.getElementById("cancelBtn").addEventListener("click", () => {
    closeForm();
})

const DONEBTN = document.getElementById("doneBtn").addEventListener("click", () => {
    bookExists == false ? createBook() : editBook();
    closeForm();
})

const NEWBOOKBTN = document.getElementById("newBookBtn").addEventListener("click", () => {
    openForm();
    bookExists = false;
})