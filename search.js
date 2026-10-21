function search() {
    let r = document.getElementById("searchRoll").value;
    let students = document.getElementById("list").children;

    for (let s of students) {
        if (s.textContent.includes(" - " + r)) {
            alert(s.textContent);
            return;
        }
    }

    alert("Student not found");
}