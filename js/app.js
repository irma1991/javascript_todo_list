function addTask() {

    var table = document.getElementById("table");

    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerHTML = document.getElementById("formSubjectInput").value;
    td2.innerHTML  = document.getElementById("inputPriority").value;
    td3.innerHTML  = document.getElementById("formDueDateInput").value;
    td4.innerHTML  = document.getElementById("inputStatus").value;
    td5.innerHTML  = document.getElementById("inputPercentCompleted").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    table.children[0].appendChild(row);

};
