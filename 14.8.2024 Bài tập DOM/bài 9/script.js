function countDivs() {
    var divs = document.getElementById("div");
    var counts = divs.length;
    document.getElementById("div-count").textContent = "số lượng phần tử <div> trên trang : " + counts;
}