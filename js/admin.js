$(document).ready(function() {
    // FORM POST
  let admin = {
    email: $("input#email").val(),
    password: $("input#password").val()
  };
  // $("#signup").on("click", function(e) {
  $("form").submit(function(e) {
    e.preventDefault();

    let addAdmin = {
        firstName: $("input#first-name").val(),
        lastName: $("input#last-name").val(),
        email: $("input#email").val(),
        password: $("input#password").val(),
        phoneNumber: $("input#phone").val(),
      }
    let admin = {
        email: $("input#email").val(),
        password: $("input#password").val(),
    }
    let url ="";
    if (  $(this).id === "signupform" ) {
        data = addAdmin;
        url = "http://localhost:3000/new-admin";
    } else if ($(this).id === "signinform") {
        data = admin;
        url = "http://localhost:3000/admin";
    }
    // let form =  $(this.id)
    // let data = ( form === "signup" ) ? addAdmin : ;
   

    $.post( "http://localhost:3000/admin", addAdmin, function(data, obj, success) {
        // alert(JSON.stringify(success));
        window.location.href = "../pages/admin.html"
        console.log(data);
      })
    });


})
   

