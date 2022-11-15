
var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["course"] = document.getElementById("course").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentRec").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.course;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a class="buttons2 fa fa-edit" onClick="onEdit(this) ">edit</a>
                       <a class="buttons1 fa fa-remove" onClick="onDelete(this)">delete</a>`;
}

function resetForm() {
    document.getElementById("ID").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("course").value="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("course").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.fname;
    selectedRow.cells[2].innerHTML = formData.lname;
    selectedRow.cells[3].innerHTML = formData.course;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentRec").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("ID").value == "") {
        isValid = false;
        document.getElementById("IDValidationError").classList.remove("hide");
    }else {
        isValid = true;
        if (!document.getElementById("IDValidationError").classList.contains("hide"))
            document.getElementById("IDValidationError").classList.add("hide");
    }
    if (document.getElementById("fname").value == "") {
        isValid = false;
        document.getElementById("fnameValidationError").classList.remove("hide");
    }else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }
    if (document.getElementById("lname").value == "") {
        isValid = false;
        document.getElementById("lnameValidationError").classList.remove("hide");
    }else {
        isValid = true;
        if (!document.getElementById("lnameValidationError").classList.contains("hide"))
            document.getElementById("lnameValidationError").classList.add("hide");
    }
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("courseValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("courseValidationError").classList.contains("hide"))
            document.getElementById("courseValidationError").classList.add("hide");
    }
    alert("Add student records success!");
    return isValid;
}


