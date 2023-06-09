let library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(newBook){
    library.push(newBook);
    console.log(library);
}

function displayNewBook(){

}

function openForm(){
    document.getElementById("container").style.display="block";
}

function closeForm(){
    document.getElementById("container").style.display="none";
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
    closeForm();
})

const NEWBOOKBTN = document.getElementById("newBookBtn").addEventListener("click", ()=>{
    openForm();
})