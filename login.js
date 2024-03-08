function show(){
 var emailid = document.getElementById('emailid').value;
 var pass  =document.getElementById('pass').value;

 
 if (emailid === "admin@admin.com" && pass === "123456") {
    alert("Login successful");
} else {
    alert("Incorrect email or password");
}
}