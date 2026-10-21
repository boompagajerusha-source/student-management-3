function add() {
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;

    let li = document.createElement("li");
    li.textContent = n + " - " + r;

    document.getElementById("list").appendChild(li);
}