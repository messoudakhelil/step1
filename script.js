function validateForm() {
    var name = document.getElementById('name').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
5 if(name === ""  weight === ""  height === "") {
6 alert("All fields are required.");
return false;
}
if(isNaN(weight) || isNaN(height)) {
alert("Weight and Height must be numbers.");
return false;
}
return true;
}
body{
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #e9ecef;
}
 h1 {
 color: #007BFF;
 }
