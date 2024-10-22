function addListItem(){
    var newItem = document.createElement("li");
    var text = document.createTextNode("Phần tử mới");
    newItem.appendChild(text);
    document.getElementsById("list").appendChild(newItem);
}