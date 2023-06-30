document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var name = document.getElementsByName("name")[0].value;
    var surname = document.getElementsByName("surname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var confirmPassword = document.getElementsByName("confirmPassword")[0].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Password:", password);
  });