document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault();
        let name = document.getElementById("fname").value;
        let lastname = document.getElementById("lname").value;
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        let email = document.getElementById("email").value;
        let grade = document.getElementById("grade").value;
        


function msgOnGrade(nota) {
    let msg;
    if (grade > 8) {
        msg = "Congrats!";
    } else {
        msg = "Keep learning!";
    }
    return msg;
};

let paragraf = name + " "  + "has obtained the grade:  " + grade + "." + " " + msgOnGrade(grade);
document.getElementById("demo").innerHTML = paragraf;

});