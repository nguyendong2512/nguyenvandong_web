
function createTable() {
    var table = document.createElement("table");
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("Row " + (i+1) + ", Cell " + (j+1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById("table-container").appendChild(table);
}