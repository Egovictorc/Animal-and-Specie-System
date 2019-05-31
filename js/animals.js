$(document).ready(function() {
  // FORM POST
  // lat div = "";

  $.getJSON("http://localhost:3000/animals", function(data) {
    let amphibians = "";
    let reptiles = "";

    $.each(data, function(index, value) {
      if (value.specieName === "amphibian") {
        amphibians += `<div class='specie__div'> `;
        amphibians += `<h3 class="family__name heading"> ${
          value.animalName
        } </h3>`;
        amphibians += `<div class="specie__img-cont" >`;
        amphibians += `<img src=${value.url} alt=${
          value.animalName
        } class="specie__img" />`;
        amphibians += "</div>";
        amphibians += `<p class="specie__desc">${value.description}</p>`;
        amphibians += `</div>`;
      } else {
        reptiles += `<div class='specie__div'> `;
        reptiles += `<h3 class="family__name heading"> ${
          value.animalName
        } </h3>`;
        reptiles += `<div class="specie__img-cont" >`;
        reptiles += `<img src=${value.url} alt=${
          value.animalName
        } class="specie__img" />`;
        reptiles += "</div>";
        reptiles += `<p class="specie__desc">${value.description}</p>`;
        reptiles += `</div>`;
      }
    });
    $("#reptiles").append(reptiles);
    $("#amphibians").append(amphibians);
  });

  let admin = {
    email: $("input#email").val(),
    password: $("input#password").val()
  };

  // ADD ANIMALS
//   $("#signup").on("click", function(e) {
//   $("#signup").click(function(e) {
  $("button#addbtn").click(function(e) {
    e.preventDefault();
    let error = {};
    
    let newAnimal = {
      specieName: $("input#specie-name").val(),
      // familyName: $("input#family-name").val(),
      animalName: $("input#animal").val(),
      description: $("input#description").val(),
      url: $("input#url").val()
    };
    let errorCount = 0;
    for (let [key, value] of Object.entries(newAnimal) ) {
      if (!value) {
        error[key] = "empty field";
        errorCount = errorCount + 1;
      }
    }
    // ADD ANIMALS TO DATABASE
    if(errorCount === 0) {
    $.post("http://localhost:3000/animals", newAnimal, function(
      data, obj, success
    ) {
    //   window.location.href = "../pages/index.html";
    alert(`${newAnimal.animalName} was added succesfully`);
      alert(JSON.stringify(success));
      // GET ANIMAL FROM
    });
    } 
    else {
        alert("Please fill all input fields")
    }
  });

  
  //UPDATE ANIMALS
  $("#updatebtn").click(function(e) {
    e.preventDefault();
    let targetAnimal = {
      specieName: $("input#specie-name").val(),
      // familyName: $("input#family-name").val(),
      description: $("input#description").val(),
      animalName: $("input#animal").val(),
      id: $("input#id").val(),
      url: $("input#url").val()
    };

    // VALIDATE INPUT FIELDS
    let error = {};
    let errorCount = 0;
    for( let [key, value] of Object.entries(targetAnimal)){
        if( value === "" ) {
            error[key] = "Empty field"
            errorCount = errorCount + 1;
        }
    }

    if ( targetAnimal.id !== "") {
      $.ajax({
        url: `http://localhost:3000/animals/${targetAnimal.id}`,
        type: "PUT",
        dataType: "json",
        data: targetAnimal,
        success: function() {
          // window.location.href = "../pages/admin.html"
        //   alert(targetAnimal.animalName);
          alert(`updated successfully`);
        }
      });
    } else {
      alert(`Please fill all input fields`);
    }
  });

  // DELETE ANIMALS
  $("form#deleteAnimal").submit(function(e) {
    e.preventDefault();
    let targetAnimal = {
      // specieName: $("input#specie-name").val(),
      // familyName: $("input#family-name").val(),
      animalName: $("input#animal").val(),
      id: $("input#id").val(),
      // url: $("input#url").val()
    };
    let id = 0;
    let deleteCount = 0
    $.getJSON("http://localhost:3000/animals", function(data){
        $.each(data, function(index, value){
            console.log(value.id, targetAnimal.id)
            if( value.id === targetAnimal.id ){
                id = value.id;
                deleteCount++
                // console.log(value.id, id)
            }
        })
    })

    if (targetAnimal.id) {
      $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/animals/${targetAnimal.id}`,
        success: function() {
          // window.location.href = "../pages/admin.html"
          alert(targetAnimal.animalName);
          alert(`deleted successfully`);
        }
      });
    } 
    else {
        // 
      alert(`Please fill all input fields`);
    }
  });
});

// {
//     "id": 3,
//     "animalName": "lion",
//     "specieName": "reptile",
//     "familyName": "family",
//     "url": "images/lion.jpg",
//     "description": "This is an animal from this family"
//   }
