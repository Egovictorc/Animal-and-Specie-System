$(document).ready(function() {
  // FORM POST
  let admin = {
    email: $("input#email").val(),
    password: $("input#password").val()
  };
  // SIGN UP
  $("form#signupform").submit(function(e) {
    e.preventDefault();

    // GET ADMIN INFO
    let addAdmin = {
      firstName: $("input#first-name").val(),
      lastName: $("input#last-name").val(),
      email: $("input#email").val(),
      password: $("input#password").val(),
      phoneNumber: $("input#phone").val()
    };

    // VALIDATE THAT ADMIN HAVE NOT REGISTERED BEFORE
    let isRegistered = false;
    let registerCount = 0;
    let registerArray = [];
    $.getJSON("http://localhost:3000/new-admin", function(admins) {
      $.each(admins, function(index, value) {
          registerArray.push(value.email)
        if (value === addAdmin.email) {
          registerCount = registerCount + 1;  
          // console.log(value[email])
        }
      });
      // isRegistered = ( registerCount === 0 ) ? false : true;
    });

    for (let val of registerArray){
      if(val === addAdmin.email) {
        isRegistered = true
      }
    }

    let error = {};
    let errorCount = 0;

    for (let [key, val] of Object.entries(addAdmin)) {
      if (!val) {
        error[key] = "Please fill all input fields";
        errorCount++;
      }
    }
    if ( isRegistered === true) {
      alert(`You have registered before, Please sign in`);
    } else if (errorCount === 0 && ( isRegistered === false) ) {
      $.post("http://localhost:3000/new-admin", addAdmin, function(
        data,
        obj,
        success
      ) {
      
        alert(`Your registration was successful, you can now signin`);
        // window.location.href = "../pages/admin.html"
        // console.log(data);
        
        // $("form:input").attr("value", "");
        // $("input#first-name").attr("value", "");
        // $("input#last-name").attr("value", "");
        // $("input#email").attr("value", "");
        // $("input#password").attr("value", "");
        // $("input#phone").attr("value", "");
      });
      $(this).closest("form").find('input[type]').val("");
      
    } else {
      alert(`Please fill all input fields`);
      // alert(addAdmin.email);
    }
    
  });

  // SIGIN IN FORM
  $("form#signinform").submit(function(e) {
    e.preventDefault();

    let admin = {
      email: $("input#passemail").val(),
      password: $("input#passpassword").val(),
      date: new Date()
    };

    let errorCount = 0;
    let error = {};
    for (let [key, value] of Object.entries(admin)) {
      if (!value) {
        errorCount = errorCount + 1;
      }
    }

    if (errorCount === 0) {
      $.post("http://localhost:3000/admin", admin, function(
        data,
        obj,
        success
      ) {
        // alert(JSON.stringify(success));
        window.location.href = "../pages/admin.html";
        // console.log(data);
      });
    } else {
      alert(`Please fill all input fields`)
    }
  });
});
