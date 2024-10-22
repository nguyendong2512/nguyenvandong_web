function updateParagraphs() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "Updated paragraph";
    }
}
