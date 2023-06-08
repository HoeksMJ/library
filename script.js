let titleInput;
let authorInput;
let pagesInput;
let readInput;

function openForm(){
    document.getElementById("container").style.display="block";
};

function closeForm(){
    document.getElementById("container").style.display="none";
};

const CANCELBTN = document.getElementById("cancelBtn").addEventListener("click", () => {
    closeForm();
});

const DONEBTN = document.getElementById("doneBtn").addEventListener("click", () => {
        titleInput = document.getElementById("titleInput").value;
        authorInput = document.getElementById("authorInput").value;
        pagesInput = document.getElementById("pagesInput").value;
        readInput = document.getElementById("readInput").value;
        console.log(titleInput, authorInput, pagesInput, readInput);
        closeForm();
    });
