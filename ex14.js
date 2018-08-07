function createParagraph() {
    document.getElementById("paragraph").innerHTML = "<p id='p'></p>";
}

function editParagraph() {
    document.getElementById("p").innerHTML = document.getElementById("text").value; 
}

function deleteParagraph() {
    document.getElementById("p").parentNode.remove();
}