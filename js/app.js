//duomenu ivedimo formos iskvietimas mygtuku prideti
function display() {
    let x = document.getElementById("dataform");
    x.style.display = "block"
}

//duomenu radimas, nuskaitymas, issisaugojimas
const container = document.getElementById("TasksList");
const icon = "<i class=\"fa fa-bar-chart\"></i>";
const checkBox = "<input type=\"checkbox\" name=\"vehicle1\" >";
const subject = document.getElementById("taskInput");
const priority = document.getElementById("inputPriority");
const dueDate = document.getElementById(id = "dueDate");
const status = "<p>In progress</p>";
const percent = document.getElementById("inputProgres");
const delBtn = "<button type=\"button\" class=\"btn btn-danger\">Delete</button>"


const button = document.getElementById("confirm");
button.addEventListener('click', readForm);

function readForm() {
    let newRow = document.createElement("div");
    container.appendChild(newRow);
    newRow.className = "row align-items-center";
    let newCol0 = document.createElement("div");
    newRow.appendChild(newCol0);
    newCol0.className = "col-1";
    newCol0.innerHTML = icon;
    let newCol1 = document.createElement("div");
    newRow.appendChild(newCol1);
    newCol1.className = "col-2";
    newCol1.innerHTML = checkBox;
    let newCol2 = document.createElement("div");
    newRow.appendChild(newCol2);
    newCol2.className = "col-3";
    newCol2.innerHTML = subject.value;
    let newCol3 = document.createElement("div");
    newRow.appendChild(newCol3);
    newCol3.className = "col-2"
    newCol3.innerHTML = dueDate.value;
    let newCol4 = document.createElement("div");
    newRow.appendChild(newCol4);
    newCol4.className = "col-1";
    newCol4.innerHTML = status;
    let newCol5 = document.createElement("div");
    newRow.appendChild(newCol5);
    newCol5.className = "col-2 divProgress";
    newCol5.innerHTML = "<div class=\"progress\">\n" +
        "  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: " +percent.value+" \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
        "</div>";
    let newCol6 = document.createElement("div");
    newRow.appendChild(newCol6);
    newCol6.className = "col-2";
    newCol6.innerHTML = delBtn;
}
