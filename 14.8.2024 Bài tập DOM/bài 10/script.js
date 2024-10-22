function updateItems() {
    var items = document.getElementsByClassName("item")
    for (var i = 0 ; i < items.length ; i++) { 
        items[i].textContent = "Update item"
    }

}